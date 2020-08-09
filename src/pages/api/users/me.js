export default (req, res) => {
	res.statusCode = 200;
	res.json({
		name: 'Volkan Yıldız',
		email: 'siryildiz@gmail.com',
		lists: [2, 5, 7],
	});
};
