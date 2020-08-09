import React, { useEffect } from 'react';

import Head from 'next/head';
import Router from 'next/router';

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
		e.preventDefault();
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
			})
			.catch((error) => {
				// setErrors(error.response.data || []);
				console.log(error);
			});
	};

	return (
		<div>
			<Head>
				<title>Giriş</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
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
							<InputText
								name="password"
								placeholder={'password'}
							/>
						</FormGroup>
						<FormGroup>
							<Button buttonType="button" type="submit">
								GİRİŞ YAP
							</Button>
						</FormGroup>
					</form>
				</div>
			</Layout>
		</div>
	);
}

export default withoutAuth(Page);
