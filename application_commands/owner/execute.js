const Discord = require('discord.js');
const child = require('child_process')
module.exports = {
  name: "execute",
  description: "yes",
	options: [{
		name: 'command',
		description: 'Ive lost the will atm',
		type: 'STRING',
		required: true
	}],
  run: async(client, interaction, args) => {
    if(!message.author.id === '815878862075985971') return;

    const command = interaction.options.getString()

    child.exec(command, (err, res) => {
      if(err) return console.log(err);
      message.channel.send({content: `\`\`\`js\n${res.slice(0, 2000)}\`\`\``})
          })




  }
  }