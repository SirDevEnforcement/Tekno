const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "total-bans",
    category: "Owner",
    run: async (client, message, args) => {

      if(!message.member.id === '585835814743834661') return;
      
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