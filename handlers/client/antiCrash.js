const chalk = require('chalk')
module.exports = async(client) => {
  const errorLogs = new client.Discord.WebhookClient({ url: "https://discord.com/api/webhooks/903572232876458047/FIvK00NLVZ86BL2O5iYolpn7Tw53aElkyDXivw4_OkIxDxZXksTwcxOMTY8NIK9WcPOs"})
  process.on("unhandledRejection", async(reason, p, origin) => {
  console.log(chalk.hex('#ff5252').bold("[antiCrash] :: Unhandled Rejection/Catch"));
  console.log(chalk.white(reason.stack));
  const embed = new client.Discord.MessageEmbed()
  .setTitle('Unhandled Rejection/Catch')
  .setDescription(` \`\`\`${reason.stack}\`\`\``)
  errorLogs.send({embeds: [embed], content: `<@!815878862075985971>`})
});
process.on("uncaughtExceptionMonitor", async (err, origin) => {
  console.log(chalk.hex('#ff5252').bold("[antiCrash] :: Uncaught Exception/Catch (MONITOR)"));
  console.log(chalk.white(err.stack));
    const embed = new client.Discord.MessageEmbed()
  .setTitle('Unhandled Exception/Catch (MONITOR)')
  .setDescription(` \`\`\`${err.stack}\`\`\``)
  errorLogs.send({embeds: [embed], content: `<@!815878862075985971>`})
});


}