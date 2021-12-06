

module.exports = {
    name: 'kick',
    aliases: ['k', 'kill'],
    description: "This command kicks a member!",
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args, Discord){
      const kickreason = args[1] ? args.slice(1).join(' ') : 'No reason specified';
      const auditchannel = client.channels.cache.find(channel => channel.id === "907362521902612541")
      
 
      var bruhEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Make sure you mentioned someone.')
 
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
      const kickid = generateRandomString(14)

      const mod = message.author.id

        const target = message.mentions.users.first();
        var dmkickEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setAuthor('Proton', 'https://drive.google.com/uc?id=1EtJmv32xWHbzn27yoBluSoPjTu9Wv70o', 'https://discord.js.org')
 .setDescription(`You have been kicked.\n **Reason:**\n ${kickreason}`)
 .setFooter(`ID: ${kickid}`)
 
        var doneEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setTitle('Kick Issued')
 .setDescription(`${target.username} has been kicked.\n **Reason:**\n ${kickreason}\n **Moderator:** <@${mod}>`)
 .setFooter(`ID: ${kickid}`)
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(doneEmbed)
            target.send(dmkickEmbed)
            console.log(`${mod} used kick`)
            auditchannel.send(doneEmbed)
        }else{
            message.channel.send(bruhEmbed).then(msg => {
            msg.delete, 5000})
        }
    }
}