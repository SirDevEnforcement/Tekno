const morseCode = {
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."
}
const convertToMorse = (str) => {
   return str.toUpperCase().split("").map(el => {
      return morseCode[el] ? morseCode[el] : el;
   }).join("");
};

const Discord = require('discord.js');
module.exports = {
  name: "morse",
  description: "Convert something to morse!",
  run: async(client, message, args) => {
		const embed = new Discord.MessageEmbed()
		.setTitle('Text -> Morse')
		.setDescription(convertToMorse(args.join(" ")))

		message.channel.send({embeds: [embed]})

  }
  }