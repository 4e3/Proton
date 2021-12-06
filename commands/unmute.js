module.exports = {
  name: 'unmute',
  aliases: ['unsilence', 'ungag'],
  description: "This unmutes a member",
  permissions: ["KICK_MEMBERS"],
  execute(client, message, args, Discord){
    var unmuteEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription('Successfully unmuted the member')
    var unmuteErrorEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned a member.')
      const target = message.mentions.users.first();
      if(target){
          let mainRole = message.guild.roles.cache.find(role => role.name === 'Frog');
          let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

          let memberTarget= message.guild.members.cache.get(target.id);

          memberTarget.roles.remove(muteRole.id);
          memberTarget.roles.add(mainRole.id);
          message.channel.send(unmuteEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
          /*message.channel.send(`<@${memberTarget.user.id}> has been unmuted`).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);*/
      } else{
          message.channel.send(unmuteErrorEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
      }
  }
}