const Discord = require('discord.js');
module.exports = {
  name: "",
  description: "",
  run: async(client, message, args) => {

  }
  }

const Discord = require('discord.js');
const Link = require("dsc.js");

const link = new Link.Client("721aa739-4e30-4905-a77a-12bab1f7a8ad")
module.exports = {
  name: "create-link",
  description: "Create a link with dsc.gg!",
  usage: '<ending> <type (server, bot, template)> <redirect>',
  run: async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setDescription(` \`\`\`t!create-link <ending> <type (server, bot, template)> <redirect>\`\`\`  `)

    if(!args) message.channel.send({embeds: [embed]})

    var response = await link.createLink({
    link: args[0],
    type: args[1], //this can be server, bot, template or link
    redirect: args[2], //the redirect of the link
    unlisted: false,
    meta: {
        title: `${message.author.username}'s link!`, //optional
        description: 'Made with Tekno (dsc.gg/tekno)', //optional
    }
})
console.log(response)

message.channel.send({content: `Your new link is <https://dsc.gg/${args[0]}> !`})

  }
  }