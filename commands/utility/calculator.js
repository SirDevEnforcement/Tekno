const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

module.exports = {
  name: "calc",
  aliases: ["calculate"],
  description: "Calculates a math equation",
  run: async (client, message, args) => {
  
  if(args.length < 1)
  return message.reply(`You must provide a equation to be solved on the calculator`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
      message.channel.send(`Invalid math equation: ${err}`);
  }
}

const embed = new client.Discord.MessageEmbed()
.setTitle('Calculator')
.addField('Question', `\`\`\`${question}\`\`\``)
.addField('answer', `\`\`\`${answer}\`\`\``)
  }
  };