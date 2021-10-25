const { Discord, Message, MessageEmbed, Collection }= require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'remind',
    aliases: ['remindme'],
    description: 'Remind yourself!',

    run: async (client, message, args) => {
        let reminder = args.slice(1).join(' ');
        let time = args[0];

        const noDurationEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle('ERROR')
            .setDescription('Please state a duration for reminder!')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        if (!time) return message.channel.send({ embeds: [noDurationEmbed] })

        const noReminderEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle('ERROR')
            .setDescription('Please state a duration for reminder!')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
            console.log("time")

        if (!reminder) return message.channel.send({ embeds: [noReminderEmbed] })
        
        const reminderSetEmbed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor('Reminder Set !', message.author.displayAvatarURL())
            .setDescription(`Successfully set ${message.author.tag}'s reminder! `)
            .addField('Remind In', `${time}`)
            .addField('Reminder', `${reminder}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

    message.channel.send({ embeds: [reminderSetEmbed] })
            
        setTimeout(async function () {
                
            const reminderAlertEmbed = new MessageEmbed()
                .setColor('BLUE')
                .setAuthor('Reminder Alert!', message.author.displayAvatarURL())
                .addField('Reminder', `${reminder}`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();

                message.author.send({ embeds: [reminderAlertEmbed] })
        }, ms(time));
    },
};