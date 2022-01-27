const figlet = require("figlet");

module.exports = {
  name: "ascii",
  description: "Turn text into ascii art!",
	options: [{
		name: 'text',
		description: 'Text to turn into ascii',
		required: true,
		type: 'STRING'
	}],
  run: async (client, interaction, args) => {

    let text = interaction.options.getString('text')
    if (text.length > 20) {
      return interaction.reply(`Please put text that has 20 characters or less because the conversion won't be good!`)
    }

    figlet(text, function(err, data) {
      message.channel.send({content: `\`\`\`${data}\`\`\`  `})
    })

  }
};