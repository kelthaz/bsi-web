import ReactGA from 'react-ga';

// Evento Chat

export const gaChatEvent = () => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Punto de contacto',

        action: path,  

        label: 'Chat',       

    });   

};


// Evento llamanos

export const gaCallEvent = () => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Punto de contacto',

        action: path,  

        label: 'Telefono',       

    });   

};


// Evento Pagos y Reservas

export const gaPaymentEvent = () => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Punto de contacto',

        action: path,  

        label: 'Pagos y reservas',       

    });   

};


// Evento Click a Dominio

export const gaCardDomainEvent = (domain) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;
    
    ReactGA.event({       

        category: path,

        action: 'Servicios',  

        label: domain,       

    });   

};


// Evento Cards noticias, convenios y te puede interezar

export const gaCardNewsEvent = (blog) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: path,

        action: 'Noticias y novedades',  

        label: blog,       

    });   

};


// Evento Click en tabs

export const gaTabsEvent = (tab) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: path,

        action: 'Pestañas',  

        label: tab,       

    });   

};


// Evento Card modal

export const gaCardEvent = (card) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: path,

        action: 'Card Modal',  

        label: card,

    });   

};


// Evento te puede interezar

export const gaCardSuggestionEvent = (card) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: path,

        action: 'Te puede interesar',  

        label: card,       

    });   

};


// Evento click en item Header

export const gaNavItemEvent = (nav) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Header',

        action: path,  

        label: nav,       

    });   

};


// Evento click en buscador

export const gaSearchEvent = () => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Header',

        action: path,  

        label: 'Buscador',       

    });   

};


// Evento link social Footer

export const gaSocialLinkEvent = (link) => {

    ReactGA.event({       

        category: 'Footer',

        action: 'Siguenos',  

        label: link,       

    });   

};

// Evento Descarga social Footer

export const gaDownloadEvent = (link) => {

    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Descargas',

        action: path,  

        label: link,       

    });   

};

// Evento Submit Formularios

export const gaFormEvent = (form) => {
    
    const str = window.location.pathname;
    const event = str.replace(/-/g, ' ').split('/', 2);
    const [ one, two] = event;
    let path = '';
    two === '' ? path = 'Home': path = two;

    ReactGA.event({       

        category: 'Formulario',

        action: path,  

        label: form,       

    });   

};