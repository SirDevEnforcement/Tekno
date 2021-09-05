const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "permissions",
  run: async (client, message, args) => {
  let user = message.mentions.members.first() || message.member;
    const perms = []

    if(user.hasPermission('ADMINISTRATOR')) perms[0] = "Administrator"
    if(user.hasPermission('CREATE_INSTANT_INVITE')) perms[1] = "Create Instant Invite"
    if(user.hasPermission("KICK_MEMBERS")) perms[2] = "Kick Members"
    if(user.hasPermission("BAN_MEMBERS")) perms[3] = "Ban Members"
    if(user.hasPermission("MANAGE_CHANNELS")) perms[4] = "Manage Channels"
    if(user.hasPermission("MANAGE_GUILD`")) perms[5] = "Manage Guild`"
    if(user.hasPermission("ADD_REACTIONS")) perms[6] = "Add Reactions"
    if(user.hasPermission("VIEW_AUDIT_LOG")) perms[7] = "View Audit Log"
    if(user.hasPermission("PRIORITY_SPEAKER")) perms[8] = "Priority Speaker"
    if(user.hasPermission("STREAM")) perms[9] = "Stream"
    if(user.hasPermission("VIEW_CHANNEL")) perms[10] = "View Channels"
    if(user.hasPermission("SEND_MESSAGES")) perms[11] = "Send Messages"
    if(user.hasPermission("SEND_TTS_MESSAGES")) perms[12] = "Send TTS Messages"
    if(user.hasPermission("MANAGE_MESSAGES")) perms[13] = "Manage Messages"
    if(user.hasPermission("EMBED_LINKS")) perms[14] = "Embed Links"
    if(user.hasPermission("ATTACH_FILES")) perms[15] = "Attach Files"
    if(user.hasPermission("READ_MESSAGE_HISTORY")) perms[16] = "Read Message History"
    if(user.hasPermission("MENTION_EVERYONE")) perms[17] = "Mention Everyone"
    if(user.hasPermission("USE_EXTERNAL_EMOJIS")) perms[18] = "Use External Emojis"
    if(user.hasPermission("VIEW_GUILD_INSIGHTS")) perms[19] = "View Guild Insights"
    if(user.hasPermission("CONNECT")) perms[20] = "Connect"
    if(user.hasPermission("SPEAK")) perms[21] = "Speak"
    if(user.hasPermission("MUTE_MEMBERS")) perms[22] = "Mute Members"
    if(user.hasPermission("DEAFEN_MEMBERS")) perms[23] = "Deafen Members"
    if(user.hasPermission("MOVE_MEMBERS")) perms[24] = "Move Members"
    if(user.hasPermission("USE_VAD")) perms[25] = "Use Voice Activity"
    if(user.hasPermission("CHANGE_NICKNAME")) perms[26] = "Change Nickname"
    if(user.hasPermission("MANAGE_NICKNAMES")) perms[27] = "Manage Nicknames"
    if(user.hasPermission("MANAGE_ROLES")) perms[28] = "Manage Roles"
    if(user.hasPermission("MANAGE_WEBHOOKS")) perms[29] = "Manage Webhooks"

    permsString = perms.join('\n')
    
    const embed = new MessageEmbed()
    .addField(`${user}'s Permissions`, permsString)
    message.channel.send(embed)
  
}}    