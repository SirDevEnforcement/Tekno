module.exports = {

    name: 'greroll',
    description: 'Reroll a giveaway',
    
    run: async (client, message) => {

        // If the member doesn't have enough permissions
        if(!message.member.permissions.has('MANAGE_MESSAGES')){
            return message.reply({
                content: ':x: You need to have the manage messages permissions to reroll giveaways.',
                ephemeral: true
            });
        }

        const query = args[0]

        // try to found the giveaway with prize then with ID
        const giveaway = 
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === message.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === message.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return message.reply({
                content: 'Unable to find a giveaway for `'+ query +'`.',
            });
        }

        if (!giveaway.ended) {
            return message.reply({
                content: 'The giveaway is not ended yet.',
            });
        }

        // Reroll the giveaway
        client.giveawaysManager.reroll(giveaway.messageId)
        .then(() => {
            // Success message
            message.reply('Giveaway rerolled!');
        })
        .catch((e) => {
            message.reply({
                content: e,
            });
        });

    }
};