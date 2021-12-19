const path = require('path');
const { createAudioResource, createAudioPlayer, joinVoiceChannel, AudioPlayerStatus } = require('@discordjs/voice');
const { MessageButton } = require('discord.js');

module.exports = {
	name: 'okeh',
	run: async (client, message) => {
	const channel = message.member.voice.channel;
	if (!channel) return message.channel.send('Please connect to a voice channel to use soundboard');
	function play() {
		const player = createAudioPlayer();
		const resource = createAudioResource(path.join(__dirname + '/audio/okeh.mp3'));
		const connection = joinVoiceChannel({
			channelId: message.member.voice.channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

		player.play(resource);
		connection.subscribe(player);
		player.on(AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
	}
	play();
	const btn = new MessageButton()
		.setStyle('SUCCESS')
		.setLabel('Play again?')
		.setCustomId('playAgain');

	const msg = await message.channel.send({ content: '\u200b', components: [{ type: 1, components: [btn] }] });

	const filter = m => m.user.id == message.author.id;
	const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON' });
	collector.on('collect', async (button) => {
		if (button.customId === 'playAgain') {
			await button.deferUpdate();
			play();
		}
	})}};