const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "github",
  category: "Utility",
  run: async (client, message, args) => {
    const fetch = require("node-fetch")
    var body = await fetch(`https://shit-api.ml/misc/github?key=&username=${args[0]}`)
    body = await body.json()

    const embed = new MessageEmbed()
    .setTitle(body.username)
    .setDescription(` Total Stars: ${body.totalStars}\nTotal Repo's: ${body.totalRepositories}`)


    message.channel.send(embed)

  
  
  
}}