const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "spotify",
    description: "Play some music!", 
  run: async (client, message, args) => {
    if(!args[0]) return message.channel.send({content: ` \`\`\`t!spotify <song name>\`\`\` `})


    const embed = new MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/spotify?name=${args.join("%20")}&artist=${message.author.username}&title=Tekno's%20Album&image=${message.author.displayAvatarURL({format: 'png'})}`)
      message.channel.send({ embeds: [embed] });
  
  
}}