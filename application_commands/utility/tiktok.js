const Discord = require('discord.js');
const { nowatermark, watermark } = require('tiktok-no-watermark')

module.exports = {
   name: "tiktok",
	 description: "Download a tiktok!",
	 options: [
     {
       name: 'type',
       description: 'Choose which type to download!',
       required: true,
       type: 'STRING',
       choices: [
         {
           name: 'No Watermark',
           value: 'no',
         },
         {
           name: 'Watermark',
           value: 'yes',
         }
       ]
     },
     {
       name: 'url',
       description: 'URL of the video',
       type: 'STRING',
       required: true
     }
   ],
	 run: async(client, interaction) => {

     const embed = new Discord.MessageEmbed()

     if(interaction.options.getString('type') === 'no') {
       nowatermark(interaction.options.getString('url')).then(result => {
         embed.setDescription(`[Click here!](${result})`)
         interaction.reply({embeds: [embed]})
       })
     }
	 }
}