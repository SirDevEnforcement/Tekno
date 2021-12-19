const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "permissions",
      description: "View someones (or yours) server-permissions!", 
  run: async (client, message, args) => {
  let user = message.mentions.members.first() || message.member;
    const perms = []

    if(user.permissions.has('ADMINISTRATOR')) perms[0] = "Administrator"
    if(user.permissions.has('CREATE_INSTANT_INVITE')) perms[1] = "Create Instant Invite"
    if(user.permissions.has("KICK_MEMBERS")) perms[2] = "Kick Members"
    if(user.permissions.has("BAN_MEMBERS")) perms[3] = "Ban Members"
    if(user.permissions.has("MANAGE_CHANNELS")) perms[4] = "Manage Channels"
    if(user.permissions.has("MANAGE_GUILD")) perms[5] = "Manage Guild"
    if(user.permissions.has("ADD_REACTIONS")) perms[6] = "Add Reactions"
    if(user.permissions.has("VIEW_AUDIT_LOG")) perms[7] = "View Audit Log"
    if(user.permissions.has("PRIORITY_SPEAKER")) perms[8] = "Priority Speaker"
    if(user.permissions.has("STREAM")) perms[9] = "Stream"
    if(user.permissions.has("VIEW_CHANNEL")) perms[10] = "View Channels"
    if(user.permissions.has("SEND_MESSAGES")) perms[11] = "Send Messages"
    if(user.permissions.has("SEND_TTS_MESSAGES")) perms[12] = "Send TTS Messages"
    if(user.permissions.has("MANAGE_MESSAGES")) perms[13] = "Manage Messages"
    if(user.permissions.has("EMBED_LINKS")) perms[14] = "Embed Links"
    if(user.permissions.has("ATTACH_FILES")) perms[15] = "Attach Files"
    if(user.permissions.has("READ_MESSAGE_HISTORY")) perms[16] = "Read Message History"
    if(user.permissions.has("MENTION_EVERYONE")) perms[17] = "Mention Everyone"
    if(user.permissions.has("USE_EXTERNAL_EMOJIS")) perms[18] = "Use External Emojis"
    if(user.permissions.has("VIEW_GUILD_INSIGHTS")) perms[19] = "View Guild Insights"
    if(user.permissions.has("CONNECT")) perms[20] = "Connect"
    if(user.permissions.has("SPEAK")) perms[21] = "Speak"
    if(user.permissions.has("MUTE_MEMBERS")) perms[22] = "Mute Members"
    if(user.permissions.has("DEAFEN_MEMBERS")) perms[23] = "Deafen Members"
    if(user.permissions.has("MOVE_MEMBERS")) perms[24] = "Move Members"
    if(user.permissions.has("USE_VAD")) perms[25] = "Use Voice Activity"
    if(user.permissions.has("CHANGE_NICKNAME")) perms[26] = "Change Nickname"
    if(user.permissions.has("MANAGE_NICKNAMES")) perms[27] = "Manage Nicknames"
    if(user.permissions.has("MANAGE_ROLES")) perms[28] = "Manage Roles"
    if(user.permissions.has("MANAGE_WEBHOOKS")) perms[29] = "Manage Webhooks"

    permsString = perms.join('\n')
    
    const embed = new MessageEmbed()
    .setDescription(permsString)
      message.channel.send({ embeds: [embed] });
  
}}    