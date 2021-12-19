const Discord = require('discord.js')

module.exports = {
  name: "dependencies",
  run: async(client, message, args, data, db) => { 
try {
	const embed = new Discord.MessageEmbed()
	  .setTitle(":bricks: Dependencies")
      .setDescription(client.user.tag + " runs on " + Object.keys(require('../../package').dependencies).length + " dependencies")
	  .setTimestamp()
	  .setColor("RANDOM")
  message.channel.send(embed);
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
  }
}
  }