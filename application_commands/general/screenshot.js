const fetch = require('node-fetch');
const discord = require('discord.js')
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
		if(!interaction.options.getString('url').startsWith('https://')) return interaction.reply({content: 'Specify a URL! (Start with https://)', ephemeral: true})
		
        await fetch(`https://api.ultrax-yt.com/v1/screenshot?url=${url}&key=G7TnWpjSznkD`).then(res => {
        const buffer = new Buffer.from(res.screenshot.split(",")[1], "base64")
        const image = new discord.MessageAttachment(buffer, 'screenshot.png')

        const embed = new discord.MessageEmbed()
        .setTitle(`${url}`)
        .setURL(`${url}`)
        .setImage("attachment://screenshot.png")

        interaction.reply({ embeds: [ embed ], files: [ image ] })
				})
    
	}
}