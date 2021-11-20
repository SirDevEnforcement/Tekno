const Discord = require('discord.js');
const child = require('child_process')
module.exports = {
  name: "execute",
  description: "yes",
  aliases: ['ex'],
  run: async(client, message, args) => {
    if(!message.author.id === '815878862075985971') return;

    const command = args.join(" ")

    child.exec(command, (err, res) => {
      if(err) return console.log(err);
      message.channel.send({content: `\`\`\`js\n${res.slice(0, 2000)}\`\`\``})
          })




  }
  }