const axios = require('axios');
const { radarid } = process.env['radarid']

module.exports = client => {

	axios({
		method: 'post',
		url: `https://radarbotdirectory.xyz/api/bot/${client.user.id}/stats`,
		headers: {
			Authentication: radarid,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		data: {
			guilds: parseInt(client.guilds.cache.size),
		},
	}).then(() => {
		console.log('[LOG] radarbotdirectory.xyz stats posted.');
	}).catch(err => {
		console.error(err);
	});
};