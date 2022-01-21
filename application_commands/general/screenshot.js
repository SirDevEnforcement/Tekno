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
		if(!interaction.options.getString('url').startsWith('https://')) return interaction.reply({content: 'Specify a URL! (Start with https://)', ephemeral: true})

    interaction.reply({ content: "Loading..." }).then(async msg => {
        let res = await fetch(`https://api.ultrax-yt.com/v1/screenshot?url=${url}&key=JCD8O1cgEDFA`)
        const buffer = new Buffer.from(res.data.screenshot.split(",")[1], "base64")
        const image = new discord.MessageAttachment(buffer, 'screenshot.png')

        const embed = new discord.MessageEmbed()
        .setTitle(`${url}`)
        .setURL(`${url}`)
        .setImage("attachment://screenshot.png")

        message.channel.send({ embeds: [ embed ], files: [ image ] })
        await msg.delete()
    })
    .catch(() => {
        return message.channel.send("Something went wrong, cannot screenshot that URL!")
    })
	}
}