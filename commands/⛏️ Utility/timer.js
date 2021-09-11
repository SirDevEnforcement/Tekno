const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ms = require("ms");

module.exports = {
  name: "timer",
  category: "⛏️ Utility",
  timeout: 5000,
  run: async (client, message, args) => {
    let Timer = args[0];

    if (!args[0]) {
      return message.channel.send("Please enter a time period e.g \`\`5s, 10m or 20h\`\`");
    }

    if (args[0] <= 0) {
      return message.channel.send("Please enter a time period e.g \`\`5s, 10m or 20h\`\`");
    }
    const timerstart = new Discord.MessageEmbed()
      .setDescription(`Timer started for ${ms(ms(Timer), { long: true })}!`)
    message.channel.send(timerstart)

    setTimeout(function () {
      const timerend = new Discord.MessageEmbed()
        .setDescription(` \`⏰\` | Timer has finished after ${ms(ms(Timer), { long: true })}!`)
      message.author.send(timerend)

    }, ms(Timer));
  }

}			