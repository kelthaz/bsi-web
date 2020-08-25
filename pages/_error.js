import ErrorMessages from '../src/components/not-found/not-found';
import React, { Fragment } from 'react';
import getConfig from 'next/config';
import PageService from '../src/services/page.service';
import App from '../src/cms/core-contentful/app';
import PropTypes from 'prop-types';
const { serverRuntimeConfig } = getConfig();


function CustomError({ statCode, pages }) {

    // Se puede cargar la pagina de error
    // es un error en el cliente ya que pages solo
    // se llena con un status code 404
    if(pages && pages.length) {
        return (
            <div>
                <App pages={pages}></App>
            </div>
        );
    }

    // Con errores en el server no se puede recuperar la informacion
    return (
        <ErrorMessages />
    );
}


CustomError.getInitialProps = async ({ req, res, err }) => {
    // const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

    let statCode = 404;
    if (res) {
        statCode = res.statusCode;
        console.log(`${statCode} ${req.url}`);
    }
    if (err) {
        statCode = err.statusCode;
        console.log(`${statCode}`);
        console.log(err);
    }

    const prod = process.env.NODE_ENV === 'production';

    // Only require Rollbar and report error if we're on the server
/*     if (!process.browser && prod) {
        // console.log('Reporting error to Rollbar...');
        const Rollbar = require('rollbar');
        const rollbar = new Rollbar(serverRuntimeConfig.rollbarServerToken);
        rollbar.error(err, req, (rollbarError) => {
            if (rollbarError) {
                console.error('Rollbar error reporting failed:');
                console.error(rollbarError);
                return;
            }
            console.log('Reported error to Rollbar');
        });
    } */


    // Si el error es 404 trata de crear pagina con headers
    
    let data;
    if(statCode === 404) {
        try {
            const pageService = new PageService();
            data = await pageService.getPages('/404');
        } catch (error) {
            console.error('_error.js');
            console.error(error);
        }
    }
       
    return { statCode, pages: data && data.items };
};


CustomError.propTypes = {
    statCode: PropTypes.any,
    pages: PropTypes.array
};


export default CustomError;