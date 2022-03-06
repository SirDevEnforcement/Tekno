const warns = require('../../database/warns.json');
const fs = require('fs');
module.exports = {
  name: 'warn',
  description: 'Warn a user!',
	options: [
		{
			name: 'target',
			description: 'Who ya gonna warn?',
			type: 'USER',
			required: true
		},
		{
			name: 'reason',
			description: 'Whats ya reason?',
			type: 'STRING',
			required: false
		}
	],

  run: async(client, interaction, args) => {
		const message = interaction;
    if (!message.guild.me.permissions.has(["EMBED_LINKS", "ADD_REACTIONS"])) return interaction.reply(`🚫 | I cannot run this command as I have insufficient permissions to do so. Please ensure I have the \"EMBED_LINKS\" & \"ADD_REACTIONS\" permissions.`);

    if(!message.member.permissions.has(["MANAGE_MESSAGES", "MANAGE_MEMBERS"])) return interaction.reply(`🚫 | I cannot run this command as you have insufficient permissions. Make sure to have the \"MANAGE_MEMBERS\" & \"MANAGE_MESSAGES\" permissions!`)

    const user = interaction.options.getUser('target')
    let reason = interaction.options.getString('reason') || "None Specified";
    if(!warns[user.id]) {
            warns[user.id] = {
                warnCount: 1
            }
        } else {
            warns[user.id].warnCount += 1;
        }
    

    if (reason) {
      try {
        const embed = new client.Discord.MessageEmbed()
          .setTitle(`⚠️ | __**Warning issued**__`)
          .setColor('RANDOM')
          .addField('Member', `\`\`\`${user.tag}\`\`\``)
          .addField('Moderator', `\`\`\`${message.author.tag}\`\`\``)
          .addField('Reason', `\`\`\`${reason}\`\`\``)
          .setFooter('Moderation system powered by Tekno')
          .setTimestamp()
				  .setColor('#2f3136')
        interaction.reply({ embeds: [embed] });

        const emb = new client.Discord.MessageEmbed()
          .setTitle(`⚠️ | __**Warning issued**__`)
          .setColor('RANDOM')
          .addField('Member', `\`\`\`${user.tag}\`\`\``)
          .addField('Moderator', `\`\`\`${message.author.tag}\`\`\``)
          .addField('Reason', `\`\`\`${reason}\`\`\``)
          .setFooter('Moderation system powered by Tekno')
          .setTimestamp()

        if (!user.bot) user.send({embeds: [emb]});

        message.react("✅");
      } catch (error) {
        return interaction.reply(`🚫 | An error occurred`);
				console.error(new Error(error))
      }

      fs.writeFile("../../database/warns.json", JSON.stringify(warns), err => {
            if (err) console.log(err);
        });
    }
  }
}