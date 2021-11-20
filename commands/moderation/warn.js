const Discord = require('discord.js');
const warns = require('../../database/warns.json');
const fs = require('fs')
module.exports = {
  name: "warn",
  description: "Warn a user. Saves to the database",
  run: async(client, message, args) => {
    const mutedrole = message.guild.roles.cache.find(role => role.name === 'Muted');
    const mutedroleid = mutedrole.id
if(!message.member.permissions.has("MUTE_MEMBERS")) return message.reply("You do not have permission to do that.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please specify someone you want to warn. **!warn <user> [reason]**");
        const target = message.guild.members.cache.get(user.id);
        if(target.roles.cache.has(mutedroleid)) return message.reply("You cannot warn muted members.");
        if(!mutedrole) return message.reply("Couldn't find the Muted role.");

        const reason = args.slice(1).join(" ");

        if (!warns[user.id]) {
            warns[user.id] = {
                warnCount: 1
            }
        } else {
            warns[user.id].warnCount += 1;
        }

        if(warns[user.id].warnCount >= 5) {
            const mute = new Discord.MessageEmbed()
            .setColor("#00aaaa")
            .setDescription(`${user} has been muted. (**5**/**5**)\nReason: **${reason != "" ? reason : "-"}**`);
            message.channel.send({ embeds: [mute] });
            
            target.roles.add(mutedrole.id);
            warns[user.id].warnCount = 0;
    
            setTimeout(() => {
                target.roles.remove(mutedrole.id);
                const unmute = new Discord.MessageEmbed()
                .setColor("#00aaaa")
                .setDescription(`${user} has been unmuted.`);
                message.channel.send({ embeds: [unmute] });
            }, 1000 * 900);

        } else {
            const warn = new Discord.MessageEmbed()
            .setColor("#00aaaa")
            .setDescription(`${user} has been warned by ${message.author}. (**${warns[user.id].warnCount}**/**5**) \nReason: **${reason != "" ? reason : "-"}**`);
            message.channel.send({ embeds: [warn] });
        }

        fs.writeFile("../../warns.json", JSON.stringify(warns), err => {
            if (err) console.log(err);
        });



  }
  }