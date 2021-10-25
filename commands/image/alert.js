const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "alert",
  description: "Presidential alert!", 
  run: async (client, message, args) => {
    if(!args[0]) message.channel.send({content: `Send something to say!`})
    else {
    const embed = new MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/alert?message=${args.join("%20")}`)
      message.channel.send({ embeds: [embed] });
    }
  }
  
  }