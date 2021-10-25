const Discord = require('discord.js');
module.exports = {
  name: "dm",
  run: async(client, message, args) => {

       const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if(!owners.includes(message.author.id)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Message from: ${message.author.username}#${message.author.discriminator}`)
    .setDescription(`${args.slice(1).join(" ")}`)
    .setFooter(`Tekno`, client.user.displayAvatarURL())

    const user = message.mentions.members.first() ||
        client.users.cache.get(args[0]);
    user.send({embeds: [embed]})
    

  }
  }