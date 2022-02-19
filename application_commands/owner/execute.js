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
    if(!interaction.user.id === '815878862075985971') return;

    const command = interaction.options.getString('command');

    child.exec(command, (err, res) => {
      if(err) return console.log(err);
      interaction.reply({embeds: [
				new Discord.MessageEmbed()
				.setColor('#2f3136')
				.setDescription(res.slice(0, 2000))
			]})
          })




  }
  }