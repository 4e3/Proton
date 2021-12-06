module.exports = {
    name: 'whois',
    aliases: ['userinfo'],
    description: "This command kicks a mesadasdsamber!",
    permissions: [],
    execute(client, message, args, Discord){
      const target = message.mentions.users.first() || message.author

                const whois = new Discord.MessageEmbed()

                .setAuthor(`${target.username}`)
                .addField('Discord Name', `${target.username}`, true)
                .addField('Tag', `${target.discriminator}`, true)
                .addField('Joined Server Date', `${target.joinedAt}`, true)
                .addField('Account Creation Date', `${target.createdAt}`, true)
                .addField('Bot Account', `${target.bot}`, true)
                .addField('ID', `${target.id}`, true)
                .addField('Last Message', `${target.lastMessage}`, true)
                .addField('Roles', `${target.roles}`, true)
                .setThumbnail(target.displayAvatarURL({dynamic: true}))
                .setColor('RANDOM')
                message.channel.send(whois)
      
    }
}