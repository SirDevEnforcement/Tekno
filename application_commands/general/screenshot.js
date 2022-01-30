const discord = require('discord.js');
const Screenshoter = require("discord-screenshot");
module.exports = {
	name: 'screenshot',
	description: 'Screenshot a website!',
	options: [{
		name: 'url',
		description: 'Specify a URL',
		type: 'STRING',
		required: true
	}],
	run: async(client, interaction) => {
		const url = interaction.options.getString('url');
		const result = Screenshoter.screenshot(url);

		console.log(result)
		
    
	}
}