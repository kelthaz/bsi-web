import React from 'react';
import PropTypes from 'prop-types';
import { Router, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { polyfill } from 'interweave-ssr';

// import ChatBot from '../chat-bot/chat-bot';

import 'bootstrap/scss/bootstrap.scss';
import './page.scss';

polyfill();

/**
 * Clase del componente
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: true,
            errorMenssage: false,
        };
    }

    componentDidMount() {
        const whereIAm = window.location.pathname;

        if (whereIAm === '/' || whereIAm === '/home') {
            window.addEventListener('scroll', () => {
                if (window.scrollY < 765) {
                    this.setState({ scrolled: true });
                } else {
                    this.setState({ scrolled: false });
                }
            });
        } else {
            this.setState({ scrolled: false });
        }

        if (document.getElementById('__next')) {
            document.getElementById('__next').scrollIntoView();
        }
    }

    render() {

        const { scrolled, errorMenssage } = this.state;
        const position = scrolled ? '' : 'container-header--height';

        return (
            <div className='container-page'>
                <div className={`container-header ${position}`} id='menu-header'>
                    {/* <ChatBot content={{ home: isHome }} /> */}

                    {this.props.content.groups.header}
                </div>

                {this.props.content.groups.content}


                <div className='container-footer'>
                    {this.props.content.groups.footer}
                </div>

                <div className='container-modals'>
                    {this.props.content.groups.modals}
                </div>
            </div>
        );
    }
}



Page.getContentTypeIdentifier = () => {
    return 'page';
};



Page.propTypes = {
    content: PropTypes.object.isRequired,
    pageModalList: PropTypes.array,
};


Page.defaultProps = {

    content: {

        slug: '',
        nombre: '',
        groups: {
            header: [],
            error: {
                name: '',
                urlIcon: '/images/code-404.svg',
                urlIconAnimation: '',
                highlightedMessage: '¡Lo sentimos!',
                config: {
                    style: 'style-404'
                },
                message: 'No encontramos la página que buscas pero tenemos otros servicios en nuestra web que te pueden interesar.'
            },
            map: [],
            footer: [],
        },
    },
};


const mapStateToProps = (state, props) => {
    return { pageModalList: state.pageModalList };
};

// export default Page;
export default connect(mapStateToProps)(Page);
