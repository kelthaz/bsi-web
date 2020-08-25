import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/redux/store';
import { initGA, logPageView } from '../src/ga/initialize/initialize-ga';

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        // Anything returned here can be accessed by the client
        return { pageProps: pageProps };
    }

    constructor(props) {

        super(props);

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        // let authService = new AuthService();
        // authService.login().then(user => {
        //     console.log(user);
        //     this.setState({
        //         user: user
        //     });
        // });
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
          }
        logPageView();
    }

    render() {
        // pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

// makeStore function that returns a new store for every request
const makeStore = () => {
    return store;
};

// withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
