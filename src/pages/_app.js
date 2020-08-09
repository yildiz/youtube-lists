import React from 'react';
import App from 'next/app';
// import Cookies from 'js-cookie';
import Router from 'next/router';
import NProgress from 'nprogress';
// import withNProgress from 'next-nprogress';

import cookie from 'cookie';

import { AuthProvider } from '@providers/Auth';
// import { NPS as NProgress } from '@api/api';

import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import '../../styles/globals.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
	render() {
		const { Component, pageProps, authenticated } = this.props;
		return (
			<AuthProvider authenticated={authenticated}>
				<>
					<Component {...pageProps} />
				</>
			</AuthProvider>
		);
	}
}

MyApp.getInitialProps = async (appContext) => {
	let authenticated = false;
	const request = appContext.ctx.req;
	if (request) {
		// request.cookies = cookie.parse(request.headers.cookie || '');
		request.cookies = cookie.parse(request.headers.cookie || '');
		// authenticated = !!Cookies.get('session');
		authenticated = !!request.cookies.session;
	}

	// Call the page's `getInitialProps` and fill `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps, authenticated };
};

export default MyApp;
