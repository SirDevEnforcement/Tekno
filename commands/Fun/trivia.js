const { MessageEmbed } = require('discord.js');
let questions = [
  {
      title: "Best programming language",
      options: ["Javascript", "Python", "Rust", "Ruby"],
      correct: 1
  },
  {
      title: "Best discord bot",
      options: ["MCFacts", "Tekno", "Render Bump", "Luigi", "Vetrilox"],
      correct: 2
  }
]

module.exports = {
  name: "trivia",
  run: async (client, message, args) => {
  let q = questions[Math.floor(Math.random()) * questions.length]
  let i = 0;
  
  const embed = new MessageEmbed()
  .setTitle(q.title)
  .setDescription(q.options.map(opt => {
    i++;
    return`${i} - ${opt}\n`
  }))
  .setColor(`GREEN`)
  .setFooter('Reply to this message with the correct number!')
  message.channel.send(embed)
  try {
    let msgs = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
    if(parseInt(msgs.first().content) == q.correct) {
      message.channel.send('Congrats! You got it correct!')
    } else {
      message.channel.send('You got it incorrect!')
    }
  } catch(e) {
    message.channel.send('You did not answer!')
  }
  
}}