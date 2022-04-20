module.exports = async(client) => {
	const { joinVoiceChannel } = require('@discordjs/voice');
	client.on('ready', async() => {
		joinVoiceChannel({
			channelId: '957284622838951947',
			guildId: '894164132100730880',
			adapterCreator: client.guilds.cache.get('894164132100730880').voiceAdapterCreator
		})

		client.channels.cache.get('957284058579230812').setName(`Servers: ${client.guilds.cache.size}`)
		console.log('Set servers channel')
		await client.channels.cache.get('957284088929198080').setName(`Users: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)
		console.log('Set users channel')
	})
}