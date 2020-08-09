// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
	const { query } = req;

	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});

	res.statusCode = 200;
	res.json({
		listName: 'Listem 1',
		videos: [
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: "don't do it",
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'volkan',
				views: '27 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '7 saat',
				videoTime: '0:57',
			},
			{
				videoId: '111',
				videoTitle: 'just do it',
				thumbnail:
					'https://i.ytimg.com/vi/uenYOPGSDds/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYVeVI2oXCc5EUsbpLhzRj9LyNLQ',
				channelName: 'star',
				views: '7 B', // TODO: sayı olacak. e.g: 27000,
				createdAt: '1 saat',
				videoTime: '7:07',
			},
		],
	});
};
