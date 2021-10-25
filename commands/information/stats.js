const { MessageEmbed } = require('discord.js');
const { Discord } = require('discord.js');
const { version } = require('discord.js');

module.exports = {
  name: "stats",
  aliases: ['s'],
      description: "Statistics on the bot!", 
  run: async (client, message, args) => {



      let days = 0;
      let week = 0;
      let uptime = ``
      let totalSeconds = (client.uptime / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);

      if (hours > 23) {
        days = days + 1;
        hours = 0;
      }

      if (days == 7) {
        days = 0;
        week = week + 1;
      }

      if (week > 0) {
        uptime += `${week} week, `;
      }

      if (minutes > 60) {
        minutes = 0;
      }

      uptime += `${days}d, ${hours}h, ${minutes}m, ${seconds}s`
      const clientembed = new MessageEmbed()
        .setAuthor('Tekno')
        .setColor('RANDOM')
        .setThumbnail(client.user.displayAvatarURL())
        .addField("\`   General   \`", `Name: \`${client.user.username}\`\nDiscriminator: \`${client.user.discriminator}\`\nPrefix: \`t!\`\nUptime: \`${uptime}\``)
        .addField('\`   Statistics   \`', `Guilds: \`${client.guilds.cache.size}\`\nUsers: \`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\nChannels: \`${client.channels.cache.size}\``)
        .addField('\`   Discord.JS Version   \`', `Version: \`${version}\``)
        .addField('\`   Owner   \`', `below`)
        .setFooter('Tekno', client.user.displayAvatarURL())
        .setImage(`https://discord.c99.nl/widget/theme-1/815878862075985971.png`)
  message.channel.send({ embeds: [clientembed] });
    
}}