const Discord = require("discord.js");
const Guild = require("../../Schemas/LoggingDB");//require our log model
const mongoose = require("mongoose");

module.exports = {
  name: "setlogchannel",
  description: 'Set the servers logging channel',
  options: [
    {
      name: 'channel',
      description: 'Log channel',
      required: true,
      type: 'CHANNEL'
    }
  ],
  run: async (client, interaction) => {

    const message = interaction;

    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.reply("You do not have permission to use this command.")

    const channel = await interaction.options.getChannel('channel');
    const guild1 = message.guild;
    let webhookid;
    let webhooktoken;
    await channel
      .createWebhook(guild1.name, {
        avatar: guild1.iconURL({ format: "png" })
      })
      .then(webhook => {
        webhookid = webhook.id;
        webhooktoken = webhook.token;
      });
   
    if (!channel)
      return message.reply(
          "I cannot find that channel. Please mention a channel within this server."
        )// if the user do not mention a channel
        .then(m => m.delete({ timeout: 5000 }));
    
    await Guild.findOne(//will find data from database
      {
        guildID: message.guild.id
      },
      async (err, guild) => {
        if (err) console.error(err);
        if (!guild) {// what the bot should do if there is no data found for the server
          const newGuild = new Guild({
            guildID: message.guild.id,
            guildName: message.guild.name,
            logChannelID: channel.id,
            webhookid: webhookid,
            webhooktoken: webhooktoken
          });

          await newGuild
            .save() //save the data to database(mongodb)
            .then(result => console.log(result))
            .catch(err => console.error(err));

          return message.reply(
            `The log channel has been set to ${channel}`
          );
        } else {
          guild
            .updateOne({ //if data is found then update it with new one
              logChannelID: channel.id,
              webhooktoken: webhooktoken,
              webhookid: webhookid
            })
            .catch(err => console.error(err));

          return message.reply(
            `The log channel has been updated to ${channel}`
          );
        }
      }
    );
  }
};