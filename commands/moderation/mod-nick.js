const { Client, Message, MessageEmbed, Permissions } = require("discord.js");

module.exports = {
    name: 'mod-nick',
    description: 'Moderate a nickname that is not following the rules!',
    usage: '<@user | user.id>',
    aliases: ['nick-mod'],
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply({content: 'You do not have the permission \`MANAGE_NICKNAMES\`'})
        if(!message.guild.me.permissions.has("MANAGE_NICKNAMES")) return message.reply({content: `I do not have the permission \`MANAGE_NICKNAMES\``})

        let user = message.mentions.members.first();
        if(!user) {
            user = message.guild.members.cache.get(args[0])
        }
        if(!user) return message.reply({content: 'Please mention a user to moderate them'})

        if(user.roles.highest.position >= message.guild.me.roles.highest.position) return message.reply({content: `I cannot moderate a member's nickname that is higher/equal than my role`});
        if(user.roles.highest.position >= message.member.roles.highest.position) return message.reply({content: `You cannot moderate a member's nickname that is higher/equal than your role`});

        
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
            message.channel.send({embeds: [new MessageEmbed().setDescription(`<:tickYes:897893666138517535> Moderated Nickname for **${user.user.tag}** to \`${nickname}\``).setColor("GREEN")]})
          } catch(err) {
            message.reply({content: 'An error occured while trying to moderate the nickname of that user.'})
            console.log(err)
          }
        }
    }