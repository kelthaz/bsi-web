import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './loader.scss';


class Loader extends Component {
    render() {
        const appBody = document.getElementById('app-cafam');
        if (this.props.visible) {
            if (appBody) {
                appBody.classList.add('hide_scroll');
            }
        } else if (appBody) {
            appBody.classList.remove('hide_scroll');
        }

        return (
            <div className={`loader_container ${this.props.visible ? '' : 'loader_fade_out'}`} style={{ backgroundColor: '#1a1c21' }}>
                <img className="vertical-center" src="https://cdn.dribbble.com/users/347174/screenshots/2958807/charlie-loader.gif" alt="" />
            </div>
        );
    }
}


Loader.getContentTypeIdentifier = () => {
    return 'loader';
};

Loader.propTypes = {
    content: PropTypes.object.isRequired,
    visible: false
};


Loader.defaultProps = {
    visible: true,
    content: {
        name: '',
    },
};

export default Loader;