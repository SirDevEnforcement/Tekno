const timers = require('../Schemas/TimerDB');

module.exports = (client, timer) => {
    const embed = {
        title: "⏰ Timer Ended! ⏰",
        description: `Your timer has ended!`,
        fields: [
            { name: "Server", value: client.guilds.cache.get(timer.guild)?.name || "Unknown", inline: true },
            { name: "Channel", value: client.channels.cache.get(timer.channel)?.name || "Unknown", inline: true },
            { name: "Set", value: `<t:${Math.floor(timer.createdAt / 1000)}:R>`, inline: true },
        ],
        footer: {
            text: "Timer ended at " + new Date(Date.now()).toTimeString()
        }
    };

    const timeLeft = Date.now() >= timer?.endAt ? 0 : timer.endAt - Date.now();

    setTimeout(async () => {
        try {
            client.users.cache.get(timer.user).send({ embeds: [embed] })
        } catch (e) {
            client.channels.cache.get(timer.channel).send({ embeds: [embed], content: `<@${timer.user}>, I was unable to DM you` }).catch(async() => {
                await new Promise(res => setTimeout(res, 2000));
                client.channels.cache.get(timer.channel).send({ embeds: [embed], content: `<@${timer.user}>, I was unable to DM you.` })
            });
        }

        await timers.findOneAndDelete({ id: timer.id, user: timer.user, guild: timer.guild });
    }, timeLeft)
}