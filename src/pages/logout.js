import { useEffect } from 'react';
import { useAuth } from '@providers/Auth';
import withAuth from '@hocs/withAuth';

import Cookies from 'js-cookie';

import api from '@api/api';

const isServer = () => typeof window === 'undefined';

function Logout() {
	const { setAuthenticated } = useAuth();
	useEffect(() => {
		async function doLogout() {
			await api.get('auth/logout').then((response) => {
				if (response.status === 200) {
					Cookies.set('v', 'y');
					setAuthenticated(false);
				} else {
					console.error('Failed to logout', response);
				}
			});
		}
		doLogout();
	}, [setAuthenticated]);
	return <h1>Logging out</h1>;
}

Logout.getInitialProps = async (ctx) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 2500);
	});

	if (isServer()) {
		ctx.res.setHeader(
			'Set-Cookie',
			'session=; Max-Age=0; SameSite=Strict; HttpOnly; Path=/',
		);
		ctx.res.writeHead(302, { Location: '/' });
		ctx.res.end();
	}

	// // console.log(ctx.req);
	// // console.log('ctx.req', new Date());
	// // return;
	// console.log(ctx.req.headers.cookie);

	// await api.get('auth/logout', {
	// 	headers: {
	// 		Cookie: ctx.req.headers.cookie,
	// 	},
	// });
};
export default withAuth(Logout, '/');
