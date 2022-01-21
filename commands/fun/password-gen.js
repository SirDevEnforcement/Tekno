function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

const Discord = require('discord.js');
module.exports = {
  name: "password-gen",
  description: "Generate a password!",
  run: async(client, message, args) => {
		if(!args[0]) return message.channel.send('```t!password-gen <password-length>``')
		if(isNaN(args[0])) return message.channel.send('```t!password-gen <password-length>``')

		const embed = new Discord.MessageEmbed()
		.setTitle('Here is your password!')
		.setDescription(`||${generatePassword(args[0])}||`)
		message.author.send({embeds: [embed]});

  }
  }