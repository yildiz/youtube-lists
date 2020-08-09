// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	const { query } = req;
	res.statusCode = 200;
	res.json({
		name: 'Listem',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		channels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	});
};
