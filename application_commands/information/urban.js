const { MessageEmbed } = require('discord.js')
const urban = require('urban');
const stripIndents = require("common-tags")

module.exports = {
  name: 'urban',
  description: "Research a word!",
	options: [{
		name: 'word',
		description: 'The word to research',
		type: 'STRING',
		required: true
	}],
  run: async (client, interaction, args) => {
		const message = interaction

    if(!message.channel.nsfw) return interaction.reply('Please run this command in an NSFW Channel')
    if(interaction.options.getString('word') < 1 || !["random", "search"].includes(interaction.options.getString('word'))) return interaction.reply(`t!urban <search|random> (query)`)
    let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium"
    let search = interaction.options.getString('word') ? urban(interaction.options.getString('word')) : urban.random()
      try {
          search.first(res => {
            if(!res) return interaction.reply('No results found!')
            let { word, definition, example, thumbs_up, thumbs_down, permalink, author } = res

            let embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(word, image)
            .setThumbnail(image)
            .setDescription(`**Definition:** ${definition || 'No Definition'}
            **Example:** ${example || 'No example'}
            **Rating:** 👍${thumbs_up || 0} / 👎${thumbs_down || 0}
            **Link:** [Here](${permalink || "https://urbandictionary"})`)
            .setTimestamp()
            .setFooter(`Written by ${author || 'no one 👀'}`)
  interaction.reply({ embeds: [embed] });
          })
      } catch(e) {
          console.log('e')

      }
    
  }
}