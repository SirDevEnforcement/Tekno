const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js')
module.exports = {
  name: 'translate',
  category: '😄 Fun',
  run: async (client, message, args) => {

    const query = args.slice(1).join(" ");

    const lang = args[0]
    if (!lang) return message.channel.send("Please specify a language!")
    if (!query) return message.channel.send("Argument <text> is a required argument thats missing!")
    const translated = await translate(query, { to: lang })
      .catch(err => {
        message.channel.send(" :x: That language is not supported!")

      })
    let transembed = new Discord.MessageEmbed()
      .setTitle(` Translator`)

      .setDescription(`**Requested Language:** ${lang}
   
   **Translated text:** ${translated.text}`)
      .setThumbnail("https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Translate_logo.max-500x500.png")

    message.channel.send(transembed)

  }
}