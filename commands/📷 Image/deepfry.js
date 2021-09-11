const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
  name: "deepfry",
  category: '📷 Image',
  timeout: 5000,
  run: async (client, message, args) => {

    const member = message.member
   const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${member.user.displayAvatarURL({ format: 'png', size: 512 })}`));
           const json = await res.json();
   const embed = new MessageEmbed()
   .setImage(json.message)
   message.channel.send(embed)
  
  
}}

