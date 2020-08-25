import getConfig from 'next/config';

import ReactGA from 'react-ga';


const { publicRuntimeConfig } = getConfig();

const {GTM_ID} = publicRuntimeConfig.GTM;



export const initGA = () => {

    ReactGA.initialize(GTM_ID);

};


export const logPageView = () => {

    ReactGA.set({ page: window.location.pathname });

    ReactGA.pageview(window.location.pathname);

};