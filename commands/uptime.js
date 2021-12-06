module.exports = {
    name: 'uptime',
    aliases: [],
    description: 'sadasclears messages!',
    permissions: [],
    async execute(client, message, args, Discord) {
      var uptime = new Date(message.client.uptime);
      const days = Math.floor(message.client.uptime / (60 * 1000 * 60 * 24));
      var uptimeEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setAuthor('Proto', 'https://drive.google.com/uc?id=1EtJmv32xWHbzn27yoBluSoPjTu9Wv70o', 'https://discord.js.org')
 .setDescription(`I have been up for ${days} days, ${uptime.getHours()} hours, ${uptime.getMinutes()} minutes, ${uptime.getSeconds()} seconds.`)
    
 message.channel.send(uptimeEmbed)

    }
}