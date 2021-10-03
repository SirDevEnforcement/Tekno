const { MessageEmbed } = require('discord.js')
const urban = require('urban');
const stripIndents = require("common-tags")

module.exports = {
  name: 'urban',
  aliases: ['urb'],
  category: '🇮 Information',
  run: async (client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send('Please run this command in an NSFW Channel')
    if(args < 1 || !["random", "search"].includes(args[0])) return message.channel.send(`t!urban <search|random> (query)`)
    let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium"
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random()
      try {
          search.first(res => {
            if(!res) return message.channel.send('No results found!')
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
            message.channel.send(embed)
          })
      } catch(e) {
        message.channel.send(e)

      }
    
  }
}