const discord = require("discord.js");
 
module.exports = {
  name: "suicide",
	description: 'Suicide hotlines',
  run: async (client, interaction, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Suicide and Self-Harm Prevention\n  We want you to know you are not alone`)
    .setDescription('**USA Suicide Hotline** \n Phone Number: 1-800-273-8255\n **International Suicide Hotlines**\n These hotlines are made available to those that do not reside in the United States currently. Look up the number on the list thats correlates to your residency and call it. It will connect you to your countrys suicide hotline.')
    .setColor('#2f3136')
    .setTimestamp() 
.setThumbnail('https://media.discordapp.net/attachments/912073940556451871/922032380187930644/giphy.gif')
    
    interaction.reply({embeds: [embed]})
    
  
  }
}