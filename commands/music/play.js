const Discord = require('discord.js');
module.exports = {
  name: "play",
  description: "Play some music!",
  run: async(client, message, args) => {

    let search = args.join(" ");
    let channel = message.member.voice.channel;
    let queue = client.distube.getQueue(message.guildId);
    if (!channel) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setColor("BLURPLE")
            .setDescription(`>>> Please Join a Voice Channel`)
        ],
      });
    }

    client.distube.play(message, search);



  }
  }