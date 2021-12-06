

const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  description: "Warn anyone who do not obey the rules",
  aliases: [],
  permissions: ["KICK_MEMBERS"],
  execute: async (client, message, args, Discord) => {
    const auditchannel = client.channels.cache.find(channel => channel.id === "907362521902612541")
    
    
    const user = message.mentions.members.first()
    const reason = args.slice(1).join(" ")

    var noMention = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription("Please mention the person you want to warn, **USAGE:** .warn @mention <reason>")

  var botMention = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription("You cannot warn bots")

 var selfMention = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription("You cannot warn yourself")


 var noreasonMention = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription("Add a reason")

 var maxWarnings = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)

 

 
    
    if(!user) {
      return message.channel.send(noMention)
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send(botMention)
    }
    
    if(message.author.id === user.id) {
      return message.channel.send(selfMention)
    }
  
    
    
    
    if(!reason) {
      return message.channel.send(noreasonMention)
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(maxWarnings)
    }
    
    function generateRandomString(length){
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var random_string = '';
        if(length > 0){
          for(var i=0; i < length; i++){
              random_string += chars.charAt(Math.floor(Math.random() * chars.length));
          }   
        }
        return random_string  
      }
      const random = generateRandomString(9)
      const mod = message.author.tag
      var channelWarn = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`${mod} warned **${message.mentions.users.first().username}** for ${reason}`)
 .setFooter(`ID: ${random}`)

      var dmWarn = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`You have been warned by ${mod} in **${message.guild.name}** for **${reason}**`)
 .setFooter(`ID: ${random}`)

 

    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(dmWarn)
      await message.channel.send(channelWarn)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(dmWarn)
      await message.channel.send(channelWarn)
      console.log(`${mod} used warn`)
            auditchannel.send(channelWarn)
    }
    
  
  } 
}