const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "deepfry",
    description: "Deepfry your profile picture!", 
  run: async (client, message, args) => {

    const member = message.member;
   const embed = new MessageEmbed()
   .setImage(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${member.user.displayAvatarURL({ format: 'png', size: 512 })}`)
     message.channel.send({ embeds: [embed] });
  
  
}}