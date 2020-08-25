import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import '../component-register';
import ContentFactory from '@bit/cafam.components.content-factory';


class App extends React.Component {

    render() {

        const [pageData] = this.props.pages;

        return (
            <Fragment>
                {
                    pageData && pageData.sys && (<ContentFactory contentType={pageData.sys.contentType.sys.id} fields={pageData.fields} />)
                }
            </Fragment>
        );
    }
}


App.propTypes = {
    pages: PropTypes.array.isRequired,
};


export default App;