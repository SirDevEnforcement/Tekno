const Discord = require('discord.js');
module.exports = {
  name: "bio",
  description: "Set your profile's bio!",
  run: async(client, message, args) => {
    const db = require('quick.db');

    try {
      if(!args.join(" ")) {
        return message.channel.send({content: 'Send something!'})
      } else {
        db.set(`description_${message.author.id}`, args.join(" "))
        message.channel.send({content: 'Success!'})
      }
    } catch(e) {
      console.log(e)
    }

  }
  }