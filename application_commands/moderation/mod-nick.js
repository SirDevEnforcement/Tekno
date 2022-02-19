const { Client, Message, MessageEmbed, Permissions } = require("discord.js");

module.exports = {
    name: 'mod-nick',
    description: 'Moderate a nickname that is not following the rules!',
	  options: [{
			name: 'user',
			description: 'User to moderate',
			required: true,
			type: 'USER'
		}],
    run: async(client, interaction, args) => {
			const message = interaction;
        if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply({content: 'You do not have the permission \`MANAGE_NICKNAMES\`'})
        if(!message.guild.me.permissions.has("MANAGE_NICKNAMES")) return message.reply({content: `I do not have the permission \`MANAGE_NICKNAMES\``})

        let user = interaction.options.getUser('user')
        if(!user) return message.reply({content: 'Please mention a user to moderate them'})

        
        function generateRandomString(length){
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
            var random_string = '';
            if(length > 0){
              for(var i=0; i < length; i++){
                  random_string += chars.charAt(Math.floor(Math.random() * chars.length));
              }   
        }
        return random_string  
        }

        const random = generateRandomString(6)

        nickname = `Moderated nickname ${random}`

        try {
            await user.setNickname(nickname)
            message.channel.send({embeds: [new MessageEmbed().setColor('#2f3136').setDescription(`<:check:926839972982562846> Moderated Nickname for **${user.user.tag}** to \`${nickname}\``).setColor("GREEN")]})
          } catch(err) {
            message.reply({content: 'An error occured while trying to moderate the nickname of that user.'})
            console.log(err)
          }
        }
    }