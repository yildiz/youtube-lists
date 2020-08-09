import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import useSWR from 'swr';

import NProgress from 'nprogress';

import api from '@api/api';
import Video, { VideoPlaceholder } from '@components/video';
import Layout from '@components/navigation/layout';
import { Title } from '@components/text';
// import Video from '../components/video'

function Videos() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const getList = async () => {
			await NProgress.start();
			// await NProgress.set(0.2);
			// const { data, error } = useSWR('/lists/1/videos', api);
			const res = await api.get('/lists/1/videos');
			setData(res?.data);
			await NProgress.done();
		};
		getList();
	}, []);

	const placeholderCount = 8;

	// if (error) return <div>failed to load</div>;
	if (!data) {
		return (
			<div className={'videoContainer'}>
				{[...Array(placeholderCount)].map((e, i) => (
					<VideoPlaceholder key={i} />
				))}
				{/* { [...Array(n)].map((e, i) => <VideoPlaceholder key={i} />]; */}
			</div>
		);
	}

	const list = data;
	const videos = list?.videos;

	return (
		<>
			<Title>
				<b>{list.listName}</b> listesinden son videolar
			</Title>
			<div className={'videoContainer'}>
				{videos.map((video, key) => {
					return <Video key={key} video={video} />;
				})}
			</div>
		</>
	);
}

function Home() {
	return (
		<Layout title="Home">
			<Videos data={'data'} />
		</Layout>
	);
}

// Home.getInitialProps = async () => {
// 	const res = await api.get('/lists/1/videos');
// 	const data = res.data;

// 	return { data };
// };

export default Home;
