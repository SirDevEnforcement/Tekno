const { WebhookClient, MessageEmbed } = require("discord.js");
const { inspect } = require("util");

module.exports = async client => {
	const webhook = new WebhookClient({ url: process.env['ratelimit'] });

	client.on("rateLimit", async data => {
		const embed = new MessageEmbed()
			.setTitle(`<:Tekno_Alert:951526699386957925> I've been **ratelimited**!`)
			.setDescription(`\`\`\`js\n${inspect(data)}\n\`\`\``)
			.setColor("RED")
			.setTimestamp();

		await webhook.send({
			embeds: [embed]
		});
	});
};
