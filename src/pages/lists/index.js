import React, { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

import Layout from '@components/navigation/layout';
import Button, { LinkButton } from '@components/button';
import ListItem from '@components/list-item';

import { Title } from '@components/text';

export default function Home() {
	// const { data, error } = useSWR('/api/hello', fetcher);
	// console.log(data);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Title>Listelerim</Title>
				<div
					className={'section'}
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}>
					<LinkButton href={'/lists/create'} color="blue">
						YENİ LİSTE OLUŞTUR
					</LinkButton>
				</div>
				<div className={'lists-wrapper'}>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
					<ListItem
						title={'Teknoloji Kanalları'}
						updated_at={'7 gün önce güncellendi.'}
					/>
				</div>
			</Layout>
		</div>
	);
}
