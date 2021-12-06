const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['silence', 'gag'],
    description: "This mutes a member",
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args, Discord) {
        var muteEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`<@${memberTarget.user.id}> has been muted`)
        var timedMuteEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
        var muteErrorEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned someone.')

        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(muteEmbed)
                /*message.channel.send(`<@${memberTarget.user.id}> has been muted`).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);*/
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(timedMuteEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
           /* message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);*/
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send(muteErrorEmbed).then(msg => {
    setTimeout(() => message.channel.bulkDelete(2), 5000)
  })
  .catch(console.error);
        }
    }
}