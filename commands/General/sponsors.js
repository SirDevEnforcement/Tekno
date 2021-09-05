const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "sponsors",
  category: "General",
  description: "Check out the server's Tekno sponsors!",
  usage: "t!sponsors",
  timeout: 5000,
  run: async (client, message, args) => {
        const embed = new MessageEmbed()
            
            .setTitle("Server's Tekno sponsors!")
            .setDescription(` \n \n **[\`Your Servers | Advertisng\`](https://discord.gg/CwzMgYthCH)** \n \n  ------------- \n \n **[\`Develop Your Bot\`](https://discord.gg/gMhdX6Y4kH)** \n \n \n Make sure to join these servers, they are amazing!`)
            
            await message.channel.send(embed)
  }
  
  }