const random = require("something-random-on-discord").Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "meme",
  timeout: 5000,
  run: async (client, message, args) => {


    let data = await random.getMeme()
    message.channel.send(data)


  }
}