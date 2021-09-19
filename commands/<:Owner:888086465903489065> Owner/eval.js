const Discord = require('discord.js');
const { inspect } = require("util");

module.exports = {
  name: "eval",
  category: "<:Stage:881900881635852308> Owner",
  run: async (client, message, args) => {
    const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if(!owners.includes(message.author.id)) return;
		 const code = args.join(" ");
  const token = client.token.split("").join("[^]{0,2}");
  const rev = client.token.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, "[TOKEN]");
    if (output.length < 1950) {
		const outputembed = new Discord.MessageEmbed()
		.setTitle('Evaluation Successful')
		.setDescription('**Argument**\n\`\`\`' + args[0] + '\`\`\`\n\n**Output**\n\`\`\`' + output + '\`\`\`')
		.setFooter('Tekno', client.user.displayAvatarURL())
      message.channel.send(outputembed);
    }
  } catch (error) {
    message.channel.send(`The following error occured \`\`\`js\n${error}\`\`\``);
 }}}
 