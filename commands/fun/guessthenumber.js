const guildNumber = new Map();
const guildAttempts = new Map();
const { MessageEmbed } = require('discord.js')

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 50) + 1;
 
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
   
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}

module.exports = {
    name: "guessthenumber",
    aliases: ['guess', 'gtn'],
    description: "Guess the number!",
    run: async (client, message, args, Discord) => {
        const { member, channel, guild } = message;

        const provideaguess = new MessageEmbed()
            .setTitle("Error")
            .setColor('#F30B04')
            .setDescription(`**Please provide a guess!**`)

        const pickinganumber = new MessageEmbed()
            .setTitle("Picking a number....")
            .setColor('#33F304')
            .setDescription('**Picking a number between 1 and 50**')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send({embeds: [pickinganumber]})
        } else if (!guess) {
            return channel.send({embeds: [provideaguess]});
        }
        const ToHighForGuess = new MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} is to high!`)
            .setColor('RED')

        const ToLowForGuess = new MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} is to low!`)
            .setColor('RED')

        const InvalidNumber = new MessageEmbed()
            .setTitle("Error")
            .setDescription("Invalid number please try again!")
            .setColor('RED')

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new MessageEmbed()
                .setColor('#33F304')
                .setDescription(`Perfect, <@${member.id}> the number was ${guildNumber.get(guild.id)}! It only took you ${attempts.attempts} attempts!`)

            channel.send({embeds: [guessedthenumber]});
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);


            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply({embeds: [ToLowForGuess]});
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply({embeds: [ToHighForGuess]});
        } else {
            return message.reply({embeds: [InvalidNumber]});
        }
    },
};