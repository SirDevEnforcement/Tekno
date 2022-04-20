const Discord = require('discord.js')

module.exports = {
   name: "editsnipe",
	 description: "View the last edited message in this channel",
	 run: async(client, interaction) => {

     const msg = client.editsnipes.get(interaction.guild.id)
        if (!msg) return interaction.reply('There\'s nothing to snipe!')
        const embed = new Discord.MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(`Old Content:\n\n\`\`\`${msg.oldContent}\`\`\`\n\nNew Content:\n\n\`\`\`${msg.newContent}\`\`\``)
            .setFooter(`#${msg.channel}`)
            .setColor('#2f3136')
            .setTimestamp()
          interaction.reply({ embeds: [embed] });
	
	 }
}