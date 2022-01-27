const Discord = require("discord.js")
const inlinereply = require('discord-reply');

module.exports = {
  name: "nuke",
	description: 'idk',
  run: async (client, interaction, args) => {

    const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if (!owners.includes(interaction.user.id)) return;
    const nukei = new Discord.MessageEmbed()
      .setDescription("Channel Nuked by: " + interaction.user.username)
      .setImage("https://media.discordapp.net/attachments/863674695643037726/865526577030365195/nuke.gif")
      .setTimestamp()
      .setColor("RED")
    interaction.channel.clone({ position: interaction.channel.rawPosition }).then(ch => { ch.send( { embeds: [nukei] }); })
    interaction.channel.delete();



  }
}