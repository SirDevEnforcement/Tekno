const premium = require('../../database/premium.json')
module.exports = async(client) => {
	client.on('messageCreate', async message => {
		if(message.content.toLowerCase() === `<@!${client.user.id}>`) {
            const embed = new Discord.MessageEmbed()
      .setAuthor(`Help Menu`, client.user.displayAvatarURL())
      .setTitle('Click here!')
      .setDescription(`<:blurple_guide:929366443869487114> Hello! I'm **Tekno**, a feature-rich multi-purpose bot! To use **all** my commands, run the command \`/help\`!`)
      .setURL(`https://tekno-the-bot.repl.co`)

      if(premium.includes(message.guild.id)) {
        embed.addField('<:server_owner:926838334809051146> Premium', 'This server is a premium server, congrats!')
      }
    message.channel.send({embeds: [embed]})

      }
	})
}