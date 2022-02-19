const Discord = require('discord.js');
const { inspect } = require("util");

module.exports = {
  name: "eval",
	description: 'idk',
	options: [{
		name: 'code',
		type: 'STRING',
		description: 'Literally useless',
		required: true
	}],
  run: async (client, interaction, args) => {
    const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if(!owners.includes(interaction.user.id)) return;
		 const code = interaction.options.getString('code')
  const token = client.token.split("").join("[^]{0,2}");
  const rev = client.token.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, "no");
    if (output.length < 1950) {
		const outputembed = new Discord.MessageEmbed()
		.setTitle('Evaluation Successful')
		.setDescription('**Argument**\n\`\`\`' + code + '\`\`\`\n\n**Output**\n\`\`\`' + output + '\`\`\`')
		.setColor('#2f3136')
		.setFooter('Tekno', client.user.displayAvatarURL())
  interaction.reply({ embeds: [outputembed] });
    }
  } catch (error) {

    const erroremb = new Discord.MessageEmbed()
    .setTitle(`⚠ Error`)
    .setDescription(`\`\`\`${error.stack}\`\`\``)
		.setColor('#2f3136')
    interaction.reply({embeds: [erroremb]})
 }}}
 