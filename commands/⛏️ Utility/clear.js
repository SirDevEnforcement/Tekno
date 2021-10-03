const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "clear",
    aliases: ["purge"],
    category: "⛏️ Utility",
    timeout: 5000,
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) 
            return message.channel.send(
                `You do not have correct permissions to do this action.`
            );
        if (!args[0]) {
            return message.channel.send(`Please enter a amount 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setDescription(`Successfully deleted ${deleteAmount} messages!`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('RANDOM')
        await message.channel.send(embed)
    }
}