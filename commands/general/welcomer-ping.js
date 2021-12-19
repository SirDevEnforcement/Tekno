const Discord = require('discord.js');
module.exports = {
  name: "welcomer-ping",
  description: "Get the role to welcome new members!",
  run: async(client, message, args) => {

		if(!message.guild.id === '894164132100730880') return message.channel.send({content: 'You must be in the support server to use this command!'})

             try { 
							var guild = client.guilds.cache.get('894164132100730880')
            const member = await guild.members.cache.get(message.author.id)
            const role = await guild.roles.fetch('920030045634961418')

						if(member.roles.cache.has(role)) {
							member.roles.remove(role).then(() => message.channel.send({content: 'Removed the role from you!'}))
						} else {
            member.roles.add(role)
							message.channel.send({content: 'Gave you the role!'})
						}

						
						 } catch(e) {
							 console.log(e)
						 }

  }
  }