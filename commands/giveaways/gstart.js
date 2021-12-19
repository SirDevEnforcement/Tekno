const messages = require('../../utils.js');
const ms = require('ms');
module.exports = {
    name: 'gstart',
    description: 'Start a giveaway',

    run: async (client, message, args) => {

        // If the member doesn't have enough permissions
    
        const giveawayChannel = message.mentions.channels.first()
        const giveawayDuration = args.slice(1).join("");
        const giveawayWinnerCount = args.slice(2).join(" ");
        const giveawayPrize = args.slice(3).join(" ");

        if(!giveawayChannel || !giveawayDuration || !giveawayWinnerCount || !giveawayPrize) {
          const embed = new client.Discord.MessageEmbed()
          .setTitle('Missing Arguements')
          .setDescription(` \`\`\`t!gstart <channel mention> <duration> <winner count> <prize>\`\`\``)
					message.channel.send({embeds: [embed]})
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
            hostedBy: message.user,
            // Messages
            messages
        });
    
        message.reply(`Giveaway started in ${giveawayChannel}!`);
    
    } 

};