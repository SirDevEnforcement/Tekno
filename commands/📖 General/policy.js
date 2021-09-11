const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "policy",
  category: 'General',
  timeout: 5000,
  run: async (client, message, args) => {

      const embed = new MessageEmbed()
      .setTitle('Policy')
      .setDescription('[\`   Click here to view Tekno\'s Policy   \`](https://docs.google.com/document/d/1If3gfCyGzFGk-J12ixk6_B_RR2XC2ZdrxAHNPCp5vhs/edit)')
      
      message.channel.send(embed)
  }
  
  }