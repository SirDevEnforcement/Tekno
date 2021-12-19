const warns = require('../../database/warns.json');
const fs = require('fs');
module.exports = {
  name: 'warn',
  description: 'Warn a user!',

  run: async(client, message, args) => { 
    if (!message.guild.me.permissions.has(["EMBED_LINKS", "ADD_REACTIONS"])) return message.channel.send(`🚫 | I cannot run this command as I have insufficient permissions to do so. Please ensure I have the \"EMBED_LINKS\" & \"ADD_REACTIONS\" permissions.`);

    if(!message.member.permissions.has(["MANAGE_MESSAGES", "MANAGE_MEMBERS"])) return message.channel.send(`🚫 | I cannot run this command as you have insufficient permissions. Make sure to have the \"MANAGE_MEMBERS\" & \"MANAGE_MESSAGES\" permissions!`)

    const user = message.mentions.users.first();
    let reason = args.slice(1).join(" ") || "None Specified";
    if(!warns[user.id]) {
            warns[user.id] = {
                warnCount: 1
            }
        } else {
            warns[user.id].warnCount += 1;
        }
    
    if (!user) return message.react('🚫'), message.reply('Command Usage: `warn <@USER_MENTION> <Reason>`');

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
        message.channel.send({ embeds: [embed] });

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
        return message.channel.send(`🚫 | An error occurred:\n\```${error.message}\````);
      }

      fs.writeFile("../../database/warns.json", JSON.stringify(warns), err => {
            if (err) console.log(err);
        });
    }
  }
}