// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const lists = [
	{
		name: 'Listem',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		channels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	},
];

export default (req, res) => {
	res.json(lists);
};
