import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './not-found.scss';


class ErrorMessages extends React.Component {


    render() {
        const { style } = this.props.content.config;
        const sheetStyleName = style;

        return (
            <Fragment>
                <div className="message-error-container">
                    <div className={sheetStyleName}>
                        <div className="image-error-container">
                            {sheetStyleName === 'style-404' ?
                                <img className="image-error" src='/images/code-404.svg'></img>
                                :
                                <img className="image-error" src='/images/code-500.svg'></img>
                            }

                        </div>
                        <div className="message-container">
                            <p className="message-error highlighted">
                                {sheetStyleName === 'style-404' ?
                                    '¡Lo sentimos!'
                                    :
                                    'Ups!'
                                }
                            </p>
                            <p className="message-error">
                                {sheetStyleName === 'style-404' ?
                                    'No encontramos la página que buscas pero tenemos otros servicios en nuestra web que te pueden interesar.'
                                    :
                                    'Algo no va bien. Por favor, espera unos minutos para volver a intentarlo.'
                                }
                            </p>
                        </div>
                        <div className="animation-container">
                            <img className="icon-left" src="/images/left-plug.svg"></img>
                            <img className="icon-right" src="/images/right-plug.svg"></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


ErrorMessages.getContentTypeIdentifier = () => {
    return 'not_found';
};


ErrorMessages.getContentStructure = () => {
    return `ErrorMessagesContent {
                name
            }`;
};


ErrorMessages.propTypes = {
    content: PropTypes.object.isRequired,
};


ErrorMessages.defaultProps = {
    content: {
        name: '',
        urlIcon: '/images/code-500.svg',
        urlIconAnimation: '',
        highlightedMessage: 'Ups!',
        config: {
            style: 'style-500'
        },
        message: 'Algo no va bien. Por favor, espera unos minutos para volver a intentarlo.'
    }
};

export default ErrorMessages;