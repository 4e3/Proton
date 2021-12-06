const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "warnings",
  description: "Get the warnings of yours or mentioned person",
  aliases: ['warns'],
  permissions: [],
  execute: (client, message, args, Discord) => {
    const user = message.mentions.members.first() || message.author

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    var botMention = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`${user} has **${warnings}** warn(s)`)
    
  
    
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(botMention)
  
  
  }
}