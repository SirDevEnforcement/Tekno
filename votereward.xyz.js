const Topgg = require('@top-gg/sdk');
const express = require('express');
const { webhookpassword } = process.env['webhooktoken']
const { MessageEmbed } = require('discord.js');
const { PORT1 } = 3000;
const { topgg } = require('../../routes.json');

module.exports = (client) => {
	const app = express();

	const webhook = new Topgg.Webhook(webhookpassword);

	// vote reward
	app.post(topgg, webhook.listener(async vote => {


		const channel = client.channels.cache.get('845327057465507887');

		client.users.fetch(vote.user).then(async user => {

			const embed = new MessageEmbed()
				.setTitle('Thank you for voting!')
				.setColor('#ff1493')
				.setDescription(`\`${user.tag} (${user.id})\` just voted!\n\nYou can vote on radarbotdirecory.xyz [here](https://top.gg/bot/867048396358549544/vote) every 12 hours!`)
				.setFooter('Thank you for your support!');

			channel.send(embed);

			user.send(`Thank for voting!`).catch((e) => console.log(e));
		});


	}));

	app.listen(PORT1, () => { console.log(`[LOG] Webhook server running at ::${PORT1}/${topgg}`); });
};