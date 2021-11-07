const Discord = require('discord.js');
module.exports = {
	name: 'drake',
	description: 'Drake hotline bling meme generator',
	usage: '"<text 1>" "<text 2>"',
	run: async (client, message, args) => {
		if (!args[0]) return message.reply(`**${message.author.username}**, the right syntax is \`t!drake "<text1>" "<text2>"\`.`);
		if (!args[1]) return message.reply(`**${message.author.username}**, the right syntax is \`t!drake "<text1>" "<text2>"\`.`);

		const a = args.join('%20');
		const content = a.split('"');

		if (content[0] !== '') return message.reply(`**${message.author.username}**, the right syntax is \`t!drake "<text 1>" "<text2>"\`.`);
		if (content[4] !== '') return message.reply(`**${message.author.username}**, the right syntax is \`t!drake "<text 1>" "<text2>"\`.`);
		const m = await message.reply('Please wait...');

    const embed = new Discord.MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/drake?text1=${content[1]}&text2=${content[3]}`)

    message.channel.send({embeds: [embed]}).then(() => m.delete())
}}