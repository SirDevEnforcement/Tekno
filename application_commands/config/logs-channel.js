const Discord = require("discord.js");
const Guild = require("../../Schemas/LoggingDB");

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
    if(!interaction.member.permissions.has('MANAGE_GUILD'))
      return interacton.reply("You do not have permission to use this command.")

    const channel = await interaction.options.getChannel('channel');
    const guild1 = interaction.guild;
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
      return interaction.reply(
          "I cannot find that channel. Please mention a channel within this server."
        )
    
    await Guild.findOne(
      {
        guildID: interaction.guild.id
      },
      async (err, guild) => {
        if (err) console.error(err);
        if (!guild) {
          const newGuild = new Guild({
            guildID: interaction.guild.id,
            guildName: interaction.guild.name,
            logChannelID: channel.id,
            webhookid: webhookid,
            webhooktoken: webhooktoken
          });

          await newGuild
            .save() 
            .then(result => console.log(result))
            .catch(err => console.error(err));

          return interaction.reply(
            `The log channel has been set to ${channel}`
          );
        } else {
          guild
            .updateOne({ 
              logChannelID: channel.id,
              webhooktoken: webhooktoken,
              webhookid: webhookid
            })
            .catch(err => console.error(err));

          return interaction.reply(
            `The log channel has been updated to ${channel}`
          );
        }
      }
    );
  }
};