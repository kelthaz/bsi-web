const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');

const dotenv = require('dotenv');
dotenv.config();

module.exports = withSass(withFonts({
    enableSvg: true,
    webpack(config, options) {
        return config;
    },

    // Variables de Rollbar
    serverRuntimeConfig: {
        // Will only be available on the server side
        rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN
    },

    publicRuntimeConfig: {
        // Will be available on both server and client
        rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN
    },

    // tomado de: https://tilomitra.com/using-environment-variables-on-the-front-end-with-nextjs/
    publicRuntimeConfig: {
        API_HOST: process.env.API_HOST,
        URI_DOMINIO: process.env.URI_DOMINIO,
        CACHE_DISABLE: process.env.CACHE_DISABLE,
        CACHE_TIME: process.env.CACHE_TIME,
        CONTENTFUL: {
            SERV_ID: process.env.SERV_ID,
            SERV_ENV: process.env.SERV_ENV,
            SERV_TOKEN: process.env.SERV_TOKEN,
            SERV_PATH: process.env.SERV_PATH,
            SERV_HOST: process.env.SERV_HOST,
            SERV_FRONT_HOST: process.env.SERV_FRONT_HOST,
            SERV_FRONT_INSECURE: process.env.SERV_FRONT_INSECURE,
            SERV_FRONT_BASIC_AUTH_TOKEN: process.env.SERV_FRONT_BASIC_AUTH_TOKEN
        },
        GTM: {
            GTM_ID: process.env.GTM_ID,
        },
        KEYS: {
            RECAPTCHA_SITEKEY: process.env.RECAPTCHA_SITEKEY
        },
        ENDPOINTS: {
            SEND_MAIL: process.env.SEND_MAIL
        }
    }
}));
