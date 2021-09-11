const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
  name: "blurpify",
  category: "😄 Fun",
  timeout: 5000,
  run: async (client, message, args) => {

const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${message.author.displayAvatarURL()}`));
			const json = await res.json();
    const embed = new MessageEmbed()
    .setImage(json.message)
    message.channel.send(embed)
  }
  
  }