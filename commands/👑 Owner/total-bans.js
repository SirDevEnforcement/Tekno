const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "total-bans",
  aliases: ['tb', 'bans'],
  category: "<:Stage:881900881635852308> Owner",
  run: async (client, message, args) => {

    const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if (!owners.includes(message.author.id)) return;

    message.guild.fetchBans()
      .then(banned => {
        let list = banned.map(ban => ban.user.tag).join('\n');

        if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
        const embed = new MessageEmbed()
          .setTitle('')
          .setDescription(`${list}`)

        message.channel.send(`\`${banned.size}\` user(s) are banned`, embed)
      })


  }
}