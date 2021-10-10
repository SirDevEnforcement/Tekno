const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    description: "Snipe someones message!", 
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.reply('There\'s nothing to snipe!')
        const embed = new MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter('Sniped')
            .setColor("RANDOM")
            .setTimestamp()
          message.channel.send({ embeds: [embed] });
    }
}