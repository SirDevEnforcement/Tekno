const Discord = require("discord.js")
const DB = require('../../Schemas/ScamLinks')
const reason = "[Auto Mod] Sending a Banned Word (Scam Links)"
module.exports = async(client) => {
	client.on('messageCreate', async message => {
	const array = require("../../database/scam.json")
    if(array.includes(message.content.toLowerCase())) {
      message.delete()
        DB.findOne({
            User: message.guild.id,
            Guild: message.author.id
        }, async (err, data) => {
            if (err) throw err;
            if (!data) {
                data = new DB({
                    Guild: message.guild.id,
                    User: message.author.id,
                    content: [{
                        moderator: client.user.id,
                        reason: reason
                    }]
                })
            } else {
                const object = {
                    moderator: client.user.id,
                    reason: reason
                }
                data.content.push(object)
            }
            data.save()

            const BannedWords = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setTitle("<:Tekno_Staff:951555867260645536> Scam Link Detected\n")
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .addField("User", `\`\`\`${message.author.tag} (${message.author.id})\`\`\``)
            .addField("Message Content", `\`\`\`${message.content}\`\`\``)
            .setFooter({ text: `${message.author.tag} has been warned.`, iconURL: message.author.displayAvatarURL()})
      
          message.channel.send({embeds: [BannedWords]}).then((msg) => {
              setTimeout(() => msg.delete(), 6000)
                
                }
              )
          })
     }
	})
}