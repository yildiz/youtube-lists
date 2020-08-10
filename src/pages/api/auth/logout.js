export default (req, res) => {
	console.log('api/auth/logout');
	console.log(req.headers.cookie);
	res.setHeader(
		'Set-Cookie',
		'session=; Max-Age=0; SameSite=Strict; HttpOnly; Path=/',
	);
	// res.writeHead(302, { Location: '/' });
	// res.end();
	res.status(200).end();
};
