import React, { useEffect } from 'react';

import Head from 'next/head';
import Router from 'next/router';

// import api, { NPS as NProgress } from '@api/api';
import NProgress from 'nprogress';
import api from '@api/api';
import withoutAuth from '@hocs/withoutAuth';
import { useAuth } from '@providers/Auth';

import Layout from '@components/navigation/layout';

import FormGroup from '@components/form-group';
import InputText from '@components/input-text';
import FormText from '@components/form-text';

import Button from '@components/button';
import { Title } from '@components/text';

function Page() {
	const { setAuthenticated } = useAuth();

	const handleFormSubmit = (e) => {
		NProgress.start();
		e.preventDefault();
		// debugger;

		const username = e.target.elements['username'].value;
		const password = e.target.elements['password'].value;

		console.log(username, password);
		// return;

		api.post('auth/login', { username, password })
			.then((response) => {
				if (response.status === 200) {
					setAuthenticated(true);
				} else {
					console.error('Login error', response);
				}
				// NProgress.done();
			})
			.catch((error) => {
				// setErrors(error.response.data || []);
				console.log(error);
			});
	};

	return (
		<Layout title="Login">
			<Title>Giriş Yap</Title>
			<div
				className={'section'}
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
				<form
					onSubmit={handleFormSubmit}
					style={{
						// display: 'flex',
						// flexDirection: 'column',
						width: '50rem',
						// alignContent: 'flex-start',
						// alignSelf: 'flex-start',
					}}>
					<FormGroup>
						<FormText>Kullanıcı adı:</FormText>
						<InputText
							name="username"
							placeholder={'username'}
							autoFocus
						/>
					</FormGroup>
					<FormGroup>
						<FormText>Parola:</FormText>
						<InputText name="password" placeholder={'password'} />
					</FormGroup>
					<FormGroup>
						<Button buttonType="button" type="submit">
							GİRİŞ YAP
						</Button>
					</FormGroup>
				</form>
			</div>
		</Layout>
	);
}

export default withoutAuth(Page);
