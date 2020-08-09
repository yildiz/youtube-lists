import React, { useEffect } from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

import { useAuth } from '@providers/Auth';
import withAuth from '@hocs/withAuth';

import Layout from '@components/navigation/layout';

import FormGroup from '@components/form-group';
import InputText from '@components/input-text';
import TextArea from '@components/textarea';
import FormText from '@components/form-text';

import { LinkButton } from '@components/button';
import { Title } from '@components/text';

function Page() {
	// const { data, error } = useSWR('/api/hello', fetcher);
	// console.log(data);

	const { user, isAuthenticated } = useAuth();
	// console.log('user', user);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Title>Yeni Liste Oluştur</Title>
				<div
					className={'section'}
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}>
					<form
						action=""
						style={{
							// display: 'flex',
							// flexDirection: 'column',
							width: '50rem',
							// alignContent: 'flex-start',
							// alignSelf: 'flex-start',
						}}>
						<FormGroup>
							<FormText>Liste Adı</FormText>
							<InputText placeholder={'Ara'} />
						</FormGroup>
						<FormGroup>
							<FormText>Liste Açıklaması</FormText>
							<TextArea
								placeholder={'Liste açıklaması'}
								rows={3}
								cols={10}
							/>
						</FormGroup>
						<FormGroup>
							<LinkButton href={'lists/create'} color="blue">
								GÖNDER
							</LinkButton>
						</FormGroup>
					</form>
				</div>
			</Layout>
		</div>
	);
}

export default withAuth(Page);
