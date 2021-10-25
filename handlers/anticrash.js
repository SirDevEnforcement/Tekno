let { MessageEmbed } = require("discord.js");
const channel = client.channels.cache.get('894164132553699388')
module.exports = {
  run: async(client) => {



process.on("unhandledRejection", (reason, promise) => {


    const embed = new MessageEmbed()
        .setAuthor(`Anti Crash`, client.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Unhandled Rejection`)
        .setURL("https://nodejs.org/api/process.html#event-unhandledrejection")
        .addField("Promise", `\`\`\`${promise}\`\`\``, true)
        .addField("Reason", `\`\`\`${reason}\`\`\``, true)
        .setTimestamp()
        .setFooter("Imagine a bot without anti-crash")
        .setColor(`${client.embedColor}`)

        return channel.send({ embeds: [embed]})

});


process.on("uncaughtException", (err, origin) => {



    const embed = new MessageEmbed()
    .setAuthor(`Anti Crash`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Uncaught Exception`)
    .setURL("https://nodejs.org/api/process.html#event-uncaughtexception")
    .addField("Origin", `\`\`\`${origin}\`\`\``, true)
    .addField("Error", `\`\`\`${err}\`\`\``, true)
    .setTimestamp()
    .setFooter("Imagine a bot without anti-crash")
    .setColor(`${client.embedColor}`)

    return channel.send({ embeds: [embed]})

});


process.on("uncaughtExceptionMonitor", (err, origin) => {


    const embed = new MessageEmbed()
    .setAuthor(`Anti Crash`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Uncaught Exception Monitor`)
    .setURL("https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor")
    .addField("Origin", `\`\`\`${origin}\`\`\``, true)
    .addField("Error", `\`\`\`${err}\`\`\``, true)
    .setTimestamp()
    .setFooter("Imagine a bot without anti-crash")
    .setColor(`${client.embedColor}`)

    return channel.send({ embeds: [embed]})

});

process.on("multipleResolves", (type, promise, reason) => {



    const embed = new MessageEmbed()
    .setAuthor(`Anti Crash`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Multiple Resolves`)
    .setURL("https://nodejs.org/api/process.html#event-multipleresolves")
    .addField("Type", `\`\`\`${type}\`\`\``, false)
    .addField("Promise", `\`\`\`${promise}\`\`\``, true)
    .addField("Reason", `\`\`\`${reason}\`\`\``, true)
    .setTimestamp()
    .setFooter("Imagine a bot without anti-crash")
    .setColor(`${client.embedColor}`)

    return channel.send({ embeds: [embed]})

});
  }
}