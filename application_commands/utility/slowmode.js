const { Message, MessageEmbed, Discord, MessageActionRow, MessageSelectMenu } = require('discord.js');
const ms = require("ms");

module.exports = {
    name: 'slowmode',
	  description: 'Set a slowmode for the channel!',
    run: async(client, interaction, args) => { 
			const message = interaction;

        const menu = new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Click to select delay')
        .addOptions([
            {label: 'OFF',value: 'OFF',},
            {label: '5s',value: '5s',},
            {label: '10s',value: '10s',},
            {label: '15s',value: '15s',},
            {label: '30s',value: '30s',},
            {label: '1m',value: '1m',},
            {label: '2m',value: '2m',},
            {label: '5m',value: '5m',},
            {label: '10m',value: '10m',},
            {label: '15m',value: '15m',},
            {label: '30m',value: '30m',},
            {label: '1h',value: '1h',},
            {label: '2h',value: '2h',},
            {label: '6h',value: '6h',}
        ]);
    let row = new MessageActionRow().addComponents(menu);

    const slowmoEmbed = new MessageEmbed()
			.setColor('#2f3136')
        
        .setDescription(`${message.user.username}, use the menu to select a slowmode!`)

        if(message.member.permissions.has(`MANAGE_CHANNELS`)) {
      
 interaction.reply({embeds:[slowmoEmbed],components:[row], fetchReply: true}).then(sent => {

        const filter = (interaction) => {
            interaction.deferUpdate();
            if (interaction.user.id === interaction.user.id) return true;
            return;
        }

        const collector = sent.createMessageComponentCollector({ filter, componentType: 'SELECT_MENU', time: 30e3 });
    
        collector.on('collect', collected => {
            collector.resetTimer({ time: 30e3 });
            menu.setPlaceholder(`Set to: ${collected.values[0]}`);
            row = new MessageActionRow().addComponents(menu);
            if (collected.values[0] !== 'OFF') {
                slowmoEmbed
                    .setDescription('Successfully Enabled')
							.setColor('#2f3136')
                    
            }
            else {
                slowmoEmbed
                    .setDescription('Successfully Disabled')
							.setColor('#2f3136')
                    
            }
            message.channel.setRateLimitPerUser(isNaN(ms(collected.values[0])/1e3) ? 0 : ms(collected.values[0])/1e3 );
            return sent.edit({ embeds:[slowmoEmbed], components:[row] });
        });

        collector.on('end', collected => {
            menu.setDisabled(true);
            row = new MessageActionRow().addComponents(menu);
            return sent.edit({ components:[row] });
        });

    })} else {
      const no = new MessageEmbed()
      .setDescription(`You need the \`MANAGE_CHANNELS\` permission to use this command!`)
			.setColor('#2f3136')
      interaction.reply({embeds: [no]})
    }


}}