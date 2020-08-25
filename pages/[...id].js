import React, { Fragment } from 'react';
import Head from 'next/head';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Interweave, { Markup } from 'interweave';
import { withRouter } from 'next/router';
import App from '../src/cms/core-contentful/app';
import PageService from '../src/services/page.service';
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap.scss';


class EntryPoint extends React.Component {

    static async getInitialProps({ req, res }) {

        const pageService = new PageService();

        if (!req || !req.url) {
            res.statusCode = 404;
            return {
                pages: []
            };
        }

        // if the url comes as media query
        const index = req.url.indexOf('?');
        const fullUrl = index < 0 ? req.url : req.url.substring(0, index);

        // Obtiene primera parte de la Url, para permitir
        // ubicar tabs y modales mediante Url
        // La url que pasan son asi /slug_pagina/slug_tab/slug_modal
        const fullUrlArray = fullUrl.trim().split('/');
        const url = fullUrlArray.length > 0 ? `/${fullUrlArray[1]}` : '';

        let data = await pageService.getPages(url);

        // Si los datos retornados por el servicio
        // de contentful son vacios retirna un 404
        // y finaliza
        if (!data || !data.items.length) {
            res.statusCode = 404;
            data = await pageService.getPages('/404');

            console.log(`No se cargaron datos de contenful ${res ? res.statusCode : ''} ${req ? req.url : ''}`);

            if (!data || !data.items.length) {
                return {
                    pages: []
                };
            }
        }

        return {
            pages: data.items,
        };
    }


    render() {
        const { pages, seoTitle } = this.props;

        return (
            <div>
                <Head>
                    <title>{seoTitle ? seoTitle : ''}</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <App pages={pages}></App>
            </div>
        );
    }
}

EntryPoint.propTypes = {
    pages: PropTypes.any.isRequired,
    seoTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    modalData: PropTypes.any,
    relCanonical: PropTypes.string,
    router: PropTypes.any
};

export default withRouter(EntryPoint);