module.exports = {
  name: "reaction-role",
  aliases: ["rr", "reactionrole"],
  run: async(client, message, args) => {
     if(!message.member.permissions.has("ADMINISTRATOR"))
{
  return;
} 
    if(!args[0])
    {
      return message.reply(`\`\`\`t!reaction-role <emoji> <message id> <role ping>\`\`\``);
    }
    if(!args[1])
    {
      return message.reply("Give me an ID!");
    }
  var role2 = message.mentions.roles.first();
  

if(!role2)
{
  var role2 = args[2];
  var role2 = message.guild.roles.cache.get(role2);
  console.log("not mentioned");
}

if(!role2)
{
  return message.reply("You didnt give me a role!");
}
client.reactionRoleManager.create({
      messageID: args[1],
      channel: message.channel,
      reaction: args[0],
      role: role2
})
message.channel.send(`Done!`);
 await message.delete();

return;
}}
  