module.exports = {
    name: 'ping',
    aliases: [],
    description: 'sadasdBot commandssadsa',
    permissions: [],

    execute(client, message, args, Discord) {
      var pingEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setAuthor('Client Ping')
 .setDescription(`Ping: \`${Date.now() - message.createdTimestamp}\` ms`)

 message.channel.send(pingEmbed)
     }
}