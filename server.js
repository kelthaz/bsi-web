const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const Keyv = require('keyv');
const { resolve: urlResolve } = require('url');
const normalizeUrl = require('normalize-url');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });

const defaultRequestHandler = nextApp.getRequestHandler();
const cacheStore = new Keyv({ namespace: 'ssr-cache' });

const contenfulProxy = require('./api/json/contentful-proxy');

const _getSSRCacheKey = (req) => {
    const reqUrl = req.req ? req.req.url : req.url;
    const url = urlResolve('http://localhost', reqUrl);

    const { origin } = new URL(url);
    const baseKey = normalizeUrl(url, {
        removeQueryParameters: [
            'embed',
            'filter',
            'force',
            'proxy',
            'ref',
            /^utm_\w+/i
        ]
    });
    return baseKey.replace(origin, '').replace('/?', '')
};



function clearCompleteCache(res, req) {
    cacheStore.clear();
    res.status(200);
    res.send({
        path: req.hostname + req.baseUrl,
        purged: true,
        clearedCompleteCache: true
    });
    res.end();
}


function clearCacheForRequestUrl(req, res) {
    let key = _getSSRCacheKey(req);
    console.log(key);
    cacheStore.delete(key);
    res.status(200);
    res.send({
        path: req.hostname + req.baseUrl + req.path,
        key: key,
        purged: true,
        clearedCompleteCache: false
    });
    res.end();
}


nextApp.prepare().then(() => {
    const server = express();

    server.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    const { publicRuntimeConfig } = require('next/config').default();
    const { CACHE_TIME, CACHE_DISABLE } = publicRuntimeConfig;
    const cacheDisable = CACHE_DISABLE === 'true';

    const { SERV_ID, SERV_ENV, SERV_TOKEN, SERV_PATH, SERV_HOST } = publicRuntimeConfig.CONTENTFUL;
    console.log('** Variables de entorno **');
    console.log('SERV_ID: ' + SERV_ID);
    console.log('SERV_ENV: ' + SERV_ENV);
    console.log('SERV_TOKEN: ' + SERV_TOKEN);
    console.log('SERV_PATH: ' + SERV_PATH);
    console.log('SERV_HOST: ' + SERV_HOST);
    console.log('');



    const ssrCache = cacheableResponse({
        ttl: 1000 * 60 * CACHE_TIME,
        get: async ({ req, res }) => {
            const data = await nextApp.renderToHTML(req, res, req.path, {
                ...req.query,
                ...req.params,
            });

            // No se cachean los errores 404mprocedentes de 
            // la rederizacion de paginas
            if (res.statusCode === 404) {
                res.end(data)
                return
            }

            if (res.statusCode === 500) {
                res.end(data)
                return
            }

            if (!data) {
                res.end(data)
                return
            }

            if (res.statusCode !== 200) {
                console.log(`Cacheada respuesta inesperada StatusCode ${res.statusCode}`);
            }

            return { data }
        },
        send: ({ data, res }) => {
            res.send(data);
        },
        cache: cacheStore,
        getKey: _getSSRCacheKey,
        compress: true
    });


    const contentfulProxyCache = cacheableResponse({
        ttl: 1000 * 60 * CACHE_TIME,
        get: async ({ req, res }) => {
            const data = await contenfulProxy.getData(req, res);

            if (res.statusCode === 404 || res.statusCode === 500) {
                res.end()
                return
            }

            return { data }
        },
        send: ({ data, res }) => {
            res.send(data);
        },
        cache: cacheStore,
        getKey: _getSSRCacheKey,
        compress: true
    });


    // No usar cache para archivos  _next
    server.get('/_next/*', (req, res) => {
        return defaultRequestHandler(req, res);
    });

    // No usar cache para archivos de imagen
    server.get('/images/*', (req, res) => {
        return defaultRequestHandler(req, res);
    });

    // No usar cache para archivos de fuentes
    server.get('/fonts/*', (req, res) => {
        return defaultRequestHandler(req, res);
    });

    // No usar cache para archivos de fuentes
    server.get('/js/*', (req, res) => {
        return defaultRequestHandler(req, res);
    });


    server.get('/favicon.ico', (req, res) => {
        return defaultRequestHandler(req, res);
    });


    server.get('/robots.txt', (req, res) => {
        return defaultRequestHandler(req, res);
    });


    server.get('/manifest.json', (req, res) => {
        return defaultRequestHandler(req, res);
    });


    server.get('/contentful/*', (req, res) => {
        if (dev || cacheDisable || req.query.noCache) {
            contenfulProxy.getData(req, res)
                .then((data) => {

                    if (res.statusCode === 404 || res.statusCode === 500) {
                        res.end()
                        return
                    }

                    res.setHeader('X-Cache-Status', 'DISABLED');
                    res.end(JSON.stringify(data));
                });
        }
        else {
            contentfulProxyCache({ req, res, pagePath: req.path });
        }
    });


    server.get('*', (req, res) => {
        if (dev || cacheDisable || req.query.noCache) {
            res.setHeader('X-Cache-Status', 'DISABLED');
            defaultRequestHandler(req, res);
        } else {

            let statusCode;
            if (res) {
                statusCode = res.statusCode;
            }

            if (req && req.url && statusCode === 200) {
                ssrCache({ req, res, pagePath: req.path });
            }
            else {
                defaultRequestHandler(req, res);
            }
        }
    });


    server.purge('*', (req, res) => {
        if (req.query.clearCache) {
            console.log('Purging all cache')
            clearCompleteCache(res, req);
        } else {
            console.log(`Purging cache ${req.url}`)
            clearCacheForRequestUrl(req, res);
        }
    });


    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Server Env '${process.env.NODE_ENV}' Ready on port: ${port}`)
    })
})
