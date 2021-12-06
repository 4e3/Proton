

module.exports = {
    name: 'ban',
    aliases: ['b', 'murder'],
    description: "This command kicks a member!",
    permissions: ["BAN_MEMBERS"],
    execute(client, message, args, Discord){

      const auditchannel = client.channels.cache.find(channel => channel.id === "907362521902612541")

      const banreason = args[1] ? args.slice(1).join(' ') : 'No reason specified';
      

      function generateRandomString(length){
        var chars = '0123456789';
        var random_string = '';
        if(length > 0){
          for(var i=0; i < length; i++){
              random_string += chars.charAt(Math.floor(Math.random() * chars.length));
          }   
        }
        return random_string  
      }
      const banid = generateRandomString(14)
      

      

 var notbannedEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned a member.')
 
        const target = message.mentions.users.first();
      if(!target) {
      return message.channel.send(notbannedEmbed)
    }
    const mod = message.author.tag
        
        var bannedEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setAuthor('Proto', 'https://drive.google.com/uc?id=1EtJmv32xWHbzn27yoBluSoPjTu9Wv70o', 'https://discord.js.org')
 .setDescription(`<@${target.id}> has been banned.\n **Reason:**\n ${banreason}\n **Moderator:** ${mod}`)
 .setFooter(`ID: ${banid}`)

 var dmbannedEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setTitle('Ban')
 .setDescription(`You have been banned in **${message.guild.name}**.\n **Reason:**\n ${banreason}`)
 .setFooter(`ID: ${banid}`)

      

 
 
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            memberTarget.send(dmbannedEmbed)
            message.channel.send(bannedEmbed)
            console.log(`${mod} used ban`)
            auditchannel.send(bannedEmbed)
            

        }else{
            message.channel.send(notbannedEmbed)
    }
    }
}