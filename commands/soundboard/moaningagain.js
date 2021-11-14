const voiceDiscord = require('@discordjs/voice');
module.exports = {
    name: 'moaningagain',
    aliases: ["moanagain"],
    description: 'Sound effect of moaning :hot_face:.',
    run: async (client, message, args, Discord) => {
        const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/881575631291314192/888727089455464488/tmp7rlj5ajx.mp3');

		const connection = voiceDiscord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

		player.play(resource);
		connection.subscribe(player);

		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
        message.react("🔊")
        message.react("🥵")
    }
}