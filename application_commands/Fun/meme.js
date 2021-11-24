const Discord = require('discord.js');
const { Client, CommandInteraction } = require("discord.js");
module.exports = {
  name: "meme",
  description: "So funny, right?!",
  execute: async(client, interaction) => {

const API = require('leoapi.xyz');
const leo = new API();

        leo.fun('meme', {}).then(data => {
            const embed = new Discord.MessageEmbed()
            .setTitle(data.title)
            .setURL(data.subreddit)
            .setImage(data.image)
            .setFooter(`👍 ${data.upvotes} | 💬 ${data.comments}`)
            .setColor('RANDOM')
            interaction.reply({embeds: [embed]})
        })
  }
  }