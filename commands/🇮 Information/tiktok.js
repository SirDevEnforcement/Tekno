const Discord = require('discord.js');
const tiktok = require('tiktok-scraper')

module.exports = {
  name: "tiktok",
  aliases: ['tt'],
  category: '🇮 Information',
  run: async (client, message, args) => {
  if (!args[0]) {
     return message.channel.send(`Please provide a user! \`t!tiktok <username>\``);
   }
   try {
   var user = await tiktok.getUserProfileInfo(args[0])
   } catch (err) {
     return message.channel.send("Could not find user!")
   }

   try {
   if (user.user.bioLink['link']) {var bioLink = user.user.bioLink['link']}
   } catch (err) {var bioLink = 'none'}
   if (!user.user.signature) {var bio = 'No bio yet.'} else {var bio = user.user.signature}
   if (user.user.privateAccount == true) {var privateAccount = 'Yes'} else {var privateAccount = 'No'}
   if (user.user.verified == true) {var verified = 'Yes'} else {var verified = 'No'}

   const tiktokEmbed = new Discord.MessageEmbed()
   .setTitle(`TikTok user: ${user.user.uniqueId}`)
   .addFields(
     { name: 'Profile:', value: `[${user.user.uniqueId}](https://tiktok.com/@${user.user.uniqueId})`, inline: true },
     { name: 'Nickname:', value: user.user.nickname, inline: true },
     { name: 'Bio:', value: bio },
     { name: 'Followers:', value: user.stats.followerCount, inline: true },
     { name: 'Following:', value: user.stats.followingCount, inline: true },
     { name: 'Likes:', value: user.stats.heart, inline: true },
     { name: 'Videos:', value: user.stats.videoCount, inline: true },
     { name: 'Private:', value: privateAccount, inline: true},
     { name: 'Verified:', value: verified, inline: true },
     { name: 'Bio Link:', value: `${bioLink} **(Click at your own risk)**`, inline: true }
   )
   .setThumbnail(user.user.avatarLarger)
   .setColor("#00C000")
   .setTimestamp()
   .setFooter(client.user.tag, client.user.displayAvatarURL());

   message.channel.send(tiktokEmbed)
  
}}
  