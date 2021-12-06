module.exports = {
  name: 'help',
  aliases: ['commands'],
  description: 'Bot commands',
  permissions: [],

  execute(client, message, args, Discord) {

    const botdev = client.emojis.cache.find(emoji => emoji.name === "botdev");


    const newEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Help')
      .addField(`${botdev} Lead Developer`, '**• rev#8182**')
      .addField('Prefix', `Prefix = \`${prefix}\``)
      //.addField('Server Owner', `**•${message.guild.ownerId}**`)
      .addField('Moderation', `${prefix}kick @user <optional reason>\n ${prefix}ban @user <optional reason>\n ${prefix}clear <number>\n ${prefix}lock <channel> <reason> + ${prefix}unlock <channel> <reason>\n ${prefix}slowmode <time in ms>\n ${prefix}moderate @user\n ${prefix}mute @user <optionaltime> + ${prefix}unmute @user\n ${prefix}warn @user <reason>\n ${prefix}resetwarns @user`)
      .addField('Misc', `${prefix}ping\n ${prefix}uptime\n ${prefix}whois @user\n ${prefix}suggest <suggestion>\n ${prefix}uptime\n ${prefix}avatar @user`)
      .addField('Developer Only', `${prefix}eval\n ${prefix}dm @user <message>\n ${prefix}say <message>`)
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send(newEmbed);
  }
}
