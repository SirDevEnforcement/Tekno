const messages = require('../../utils.js');
const ms = require('ms');
module.exports = {
    name: 'gstart',
    description: 'Start a giveaway',
    options: [
        {
            name: 'duration',
            description: 'How long the giveaway should last for. Example values: 1m, 1h, 1d',
            type: 'STRING',
            required: true
        },
        {
            name: 'winners',
            description: 'How many winners the giveaway should have',
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: 'What the prize of the giveaway should be',
            type: 'STRING',
            required: true
        },
        {
            name: 'channel',
            description: 'The channel to start the giveaway in',
            type: 'CHANNEL',
            required: true
        }
    ],

    execute: async (client, interaction) => {

        // If the member doesn't have enough permissions
    
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
        
        if(!giveawayChannel.isText()) {
            return interaction.reply({
                content: ':x: Selected channel is not text-based.',
                ephemeral: true
            });
        }
    
        // Start the giveaway
        client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            duration: ms(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: giveawayWinnerCount,
            // Who hosts this giveaway
            hostedBy: interaction.user,
            // Messages
            messages
        });
    
        interaction.reply(`Giveaway started in ${giveawayChannel}!`);
    
    } 

};