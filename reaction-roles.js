const ReactionRoleManager = require('discord-reaction-role');
const client = require('./index');
const manager = new ReactionRoleManager(client, {
    storage: "./database/reaction-roles.json"
});
manager.on('reactionRoleAdded',(reactionRole,member,role,reaction) => {
  console.log(`${member.user.username} added his reaction \`${reaction}\` and won the role : ${role.name}`);
})

module.exports = manager;