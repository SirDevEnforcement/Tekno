const { MessageEmbed } = require("discord.js");
const glob = require("glob");
const chalk = require("chalk");
module.exports = {
   name: "reload",
   description: "Reload Commands",
   run: async (client, message, args) => {
     if(!message.author.id === '815878862075985971') return;
           let reload_embed = new MessageEmbed()
         .setTitle(`:white_check_mark: | Reloaded All Commands`)
         .setColor("GREEN")
         .setTimestamp();
      client.commands.sweep(() => true);
      glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
         if (err) return console.log(err);
         filePaths.forEach((file) => {
            delete require.cache[require.resolve(file)];

            const pull = require(file);
            if (pull.name) {
               console.log(
                  chalk.red("✪ ") +
                     chalk.blue(`Reloaded `) +
                     chalk.green(`${pull.name} `) +
                     chalk.blue(`Command`))
                     reload_embed.setDescription(`Reloaded \`${pull.name}\``)
         
               client.commands.set(pull.name, pull);
            }})
         });
      message.reply({ embeds: [reload_embed] });
   },
};