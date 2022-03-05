module.exports = async(client) => {
const {
    MessageEmbed
} = require('discord.js');
	const db = require('quick.db');
	

// Channel Topic Updating 
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
	const LogChannel = db.get(`logchannel_${channel.guild.id}`) ? db.get(`logchannel_${channel.guild.id}`) : channel.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    
    const TopicUpdate = new MessageEmbed()
        .setTitle('Topic Updated!')
        .setColor('#2F3136')
        .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

    return LogChannel.send({
        embeds: [TopicUpdate]
    });

});

// Channel Permission Updating
client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {
	const LogChannel = db.get(`logchannel_${channel.guild.id}`) ? db.get(`logchannel_${channel.guild.id}`) : channel.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))


    const PermissionUpdate = new MessageEmbed()
        .setTitle('Permission Updated!')
        .setColor('#2F3136')
        .setDescription(`${channel.name}'s permissions updated!"`);

    return LogChannel.send({
        embeds: [PermissionUpdate]
    });

})

// unhandled Guild Channel Update
client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {
const LogChannel = db.get(`logchannel_${newChannel.guild.id}`) ? db.get(`logchannel_${newChannel.guild.id}`) : newChannel.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const unhandledGuildChannelUpdate = new MessageEmbed()
        .setTitle('Channel Updated!')
        .setColor('#2F3136')
        .setDescription("Channel '" + oldChannel.id + "' was edited but discord-logs couldn't find what was updated...");

    return LogChannel.send({
        embeds: [unhandledGuildChannelUpdate]
    });

});

// Member Started Boosting
client.on("guildMemberBoost", (member) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MemberBoost = new MessageEmbed()
        .setTitle('User Started Boosting!')
        .setColor('#2F3136')
        .setDescription(`**${member.user.tag}** has started boosting  ${member.guild.name}!`);
    return LogChannel.send({
        embeds: [MemberBoost]
    });

})

// Member Unboosted
client.on("guildMemberUnboost", (member) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MemberUnboost = new MessageEmbed()
        .setTitle('User Stoped Boosting!')
        .setColor('#2F3136')
        .setDescription(`**${member.user.tag}** has stopped boosting  ${member.guild.name}!`);

    return LogChannel.send({
        embeds: [MemberUnboost]
    });

})

// Member Got Role
client.on("guildMemberRoleAdd", (member, role) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MemberRoleAdd = new MessageEmbed()
        .setTitle('User Got Role!')
        .setColor('#2F3136')
        .setDescription(`**${member.user.tag}** got the role \`${role.name}\``);

    return LogChannel.send({
        embeds: [MemberRoleAdd]
    });

})

// Member Lost Role
client.on("guildMemberRoleRemove", (member, role) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
 
    const MemberRoleRemove = new MessageEmbed()
        .setTitle('User Lost Role!')
        .setColor('#2F3136')
        .setDescription(`**${member.user.tag}** lost the role \`${role.name}\``);

    return LogChannel.send({
        embeds: [MemberRoleRemove]
    });

})

// Nickname Changed
client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MemberNicknameUpdate = new MessageEmbed()
        .setTitle('Nickname Updated')
        .setColor('#2F3136')
        .setDescription(`${member.user.tag} changed nickname from \`${oldNickname}\` to \`${newNickname}\``);

    return LogChannel.send({
        embeds: [MemberNicknameUpdate]
    });

})

// Member Joined
client.on("guildMemberEntered", (member) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MemberJoined = new MessageEmbed()
        .setTitle('User Joined')
        .setColor('#2F3136')
        .setDescription(`${member.user.tag} Joined!`);

    return LogChannel.send({
        embeds: [MemberJoined]
    });

})

// Server Boost Level Up
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const LevelUp = new MessageEmbed()
        .setTitle('Server Boost Level Up')
        .setColor('#2F3136')
        .setDescription(`${guild.name} reached the boost level ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelUp]
    });

})

// Server Boost Level Down
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const LevelDown = new MessageEmbed()
        .setTitle('Server Boost Level Down')
        .setColor('#2F3136')
        .setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelDown]
    });

})

// Banner Added
client.on("guildBannerAdd", (guild, bannerURL) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const BannerAdd = new MessageEmbed()
        .setTitle('Server Got a new banner')
        .setColor('#2F3136')
        .setImage(bannerURL)

    return LogChannel.send({
        embeds: [BannerAdd]
    });

})

// AFK Channel Added
client.on("guildAfkChannelAdd", (guild, afkChannel) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const AFKAdd = new MessageEmbed()
        .setTitle('AFK Channel Added')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has a new afk channel ${afkChannel}`);

    return LogChannel.send({
        embeds: [AFKAdd]
    });

})

// Guild Vanity Add
client.on("guildVanityURLAdd", (guild, vanityURL) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VanityAdd = new MessageEmbed()
        .setTitle('Vanity Link Added')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has a vanity link ${vanityURL}`);

    return LogChannel.send({
        embeds: [VanityAdd]
    });

})

// Guild Vanity Remove
client.on("guildVanityURLRemove", (guild, vanityURL) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VanityRemove = new MessageEmbed()
        .setTitle('Vanity Link Removed')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has removed its vanity URL ${vanityURL}`);

    return LogChannel.send({
        embeds: [VanityRemove]
    });

})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
const LogChannel = db.get(`logchannel_${guild.id}`) ? db.get(`logchannel_${guild.id}`) : guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VanityUpdated = new MessageEmbed()
        .setTitle('Vanity Link Updated')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`);

    return LogChannel.send({
        embeds: [VanityUpdated]
    });

})

// Message Pinned
client.on("messagePinned", (message) => {
const LogChannel = db.get(`logchannel_${message.guild.id}`) ? db.get(`logchannel_${channel.guild.id}`) : message.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
 
    const MessagePinned = new MessageEmbed()
        .setTitle('Message Pinned')
        .setColor('#2F3136')
        .setDescription("This message has been pinned : " + message);

    return LogChannel.send({
        embeds: [MessagePinned]
    });

})

// Message Edited
client.on("messageContentEdited", (message, oldContent, newContent) => {
const LogChannel = db.get(`logchannel_${message.guild.id}`) ? db.get(`logchannel_${channel.guild.id}`) : message.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const MessageEdited = new MessageEmbed()
        .setTitle('Message Edited')
        .setColor('#2F3136')
        .setDescription(`Message Edited from \`${oldContent}\` to \`${newContent}\``);

    return LogChannel.send({
        embeds: [MessageEdited]
    });

})

// Role Position Updated
client.on("rolePositionUpdate", (role, oldPosition, newPosition) => {
const LogChannel = db.get(`logchannel_${role.guild.id}`) ? db.get(`logchannel_${role.guild.id}`) : role.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const RolePositionUpdated = new MessageEmbed()
        .setTitle('Role Position Updated')
        .setColor('#2F3136')
        .setDescription(role.name + " role was at position " + oldPosition + " and now is at position " + newPosition);

    return LogChannel.send({
        embeds: [RolePositionUpdated]
    });

})

// Role Permission Updated
client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {
const LogChannel = db.get(`logchannel_${role.guild.id}`) ? db.get(`logchannel_${role.guild.id}`) : role.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const RolePermissionUpdated = new MessageEmbed()
        .setTitle('Role Permission Updated')
        .setColor('#2F3136')
        .setDescription(role.name + " had as permissions " + oldPermissions + " and now has as permissions " + newPermissions);

    return LogChannel.send({
        embeds: [RolePermissionUpdated]
    });

})

// Avatar Updated
client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {
const LogChannel = db.get(`logchannel_${user.guild.id}`) ? db.get(`logchannel_${user.guild.id}`) : user.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const AvatarUpdated = new MessageEmbed()
        .setTitle('Avatar Updated')
        .setColor('#2F3136')
        .setDescription(`${user.tag} updated avatar from [Old Avatar](${oldAvatarURL}) to [New Avatar(${newAvatarURL})]`);

    return LogChannel.send({
        embeds: [AvatarUpdated]
    });

})

// Username Updated
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {
const LogChannel = db.get(`logchannel_${user.guild.id}`) ? db.get(`logchannel_${user.guild.id}`) : user.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const Username = new MessageEmbed()
        .setTitle('Username Updated')
        .setColor('#2F3136')
        .setDescription(`${user.tag} updated thier username from ${oldUsername} to ${newUsername}`);

    return LogChannel.send({
        embeds: [Username]
    });

})

// Discriminator Updated
client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {
const LogChannel = db.get(`logchannel_${user.guild.id}`) ? db.get(`logchannel_${user.guild.id}`) : user.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const Discriminator = new MessageEmbed()
        .setTitle('Discriminator Updated')
        .setColor('#2F3136')
        .setDescription(`${user.tag} updated thier discriminator from ${oldDiscriminator} to ${oldDiscriminator}`);

    return LogChannel.send({
        embeds: [Discriminator]
    });

})

// Flags Updated
client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {
const LogChannel = db.get(`logchannel_${user.guild.id}`) ? db.get(`logchannel_${user.guild.id}`) : user.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const FlagsUpdate = new MessageEmbed()
        .setTitle('Flags Updated')
        .setColor('#2F3136')
        .setDescription(`${user.tag} updated thier flags from ${oldFlags} to ${newFlags}`);

    return LogChannel.send({
        embeds: [FlagsUpdate]
    });

})

// Joined VC
client.on("voiceChannelJoin", (member, channel) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VCJoined = new MessageEmbed()
        .setTitle('Voice Channel Joined')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " joined " + `${channel}` + "!");

    return LogChannel.send({
        embeds: [VCJoined]
    });

})

// Left VC
client.on("voiceChannelLeave", (member, channel) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VCLeft = new MessageEmbed()
        .setTitle('Voice Channel Left')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " left " + `${channel}` + "!");

    return LogChannel.send({
        embeds: [VCLeft]
    });

})

// VC Switch
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VCSwitch = new MessageEmbed()
        .setTitle('Voice Channel Switched')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " left " + oldChannel.name + " and joined " + newChannel.name + "!");

    return LogChannel.send({
        embeds: [VCSwitch]
    });

})

// VC Mute
client.on("voiceChannelMute", (member, muteType) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VCMute = new MessageEmbed()
        .setTitle('User Muted')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " became muted! (type: " + muteType + ")");

    return LogChannel.send({
        embeds: [VCMute]
    });

})

// VC Unmute
client.on("voiceChannelUnmute", (member, oldMuteType) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
    const VCUnmute = new MessageEmbed()
        .setTitle('User Unmuted')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " became unmuted!");

    return LogChannel.send({
        embeds: [VCUnmute]
    });

})

// VC Defean
client.on("voiceChannelDeaf", (member, deafType) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const VCDeafen = new MessageEmbed()
        .setTitle('User Deafend')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " become deafed!");

    return LogChannel.send({
        embeds: [VCDeafen]
    });

})

// VC Undefean
client.on("voiceChannelUndeaf", (member, deafType) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
	
    const VCUndeafen = new MessageEmbed()
        .setTitle('User Undeafend')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " become undeafed!");

    return LogChannel.send({
        embeds: [VCUndeafen]
    });

})

// User Started to Stream
client.on("voiceStreamingStart", (member, voiceChannel) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const UserStreaming = new MessageEmbed()
        .setTitle('User Started to Stream')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " started streaming in " + voiceChannel.name);

    return LogChannel.send({
        embeds: [UserStreaming]
    });

})

// User Stopped to Stream
client.on("voiceStreamingStop", (member, voiceChannel) => {
const LogChannel = db.get(`logchannel_${member.guild.id}`) ? db.get(`logchannel_${member.guild.id}`) : member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))

    const UserStoppedStreaming = new MessageEmbed()
        .setTitle('User Stopped to Stream')
        .setColor('#2F3136')
        .setDescription(member.user.tag + " stopped streaming in " + voiceChannel.name);

    return LogChannel.send({
        embeds: [UserStoppedStreaming]
    });

})

	
}