import React, { useEffect } from 'react';

import Head from 'next/head';
import useSWR from 'swr';

import fetcher from '@utils/fetcher';

import { Title } from '@components/text';
import Video from '@components/video';
import Layout from '@components/navigation/layout';
// import Video from '../components/video'

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
				<Title>
					<b>Listem 1</b> listesinden son videolar
				</Title>
				<div className={'videoContainer'}>
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
					<Video />
				</div>
			</Layout>
		</div>
	);
}
