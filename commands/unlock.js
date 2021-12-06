
module.exports = {
    name: "unlock",
    description: "Locko",
    aliases: [],
    permissions: ["ADMINISTRATOR"],

    execute(client, message, args, Discord) {
      const unlockreason = args[1] ? args.slice(1).join(' ') : 'No reason specified';
        const unlockmod = message.author.username
       const targetChannel = message.mentions.channels.first() || message.channel;
       const auditchannel = client.channels.cache.find(channel => channel.id === "907362521902612541")


       var unlockembed = new Discord.MessageEmbed()
.setAuthor('Proto', 'https://drive.google.com/uc?id=1EtJmv32xWHbzn27yoBluSoPjTu9Wv70o', 'https://discord.js.org')
 .setColor('GREEN')
 .setDescription(`\`${targetChannel.name}\` has been locked  :lock:\n \n \n**Reason:** \`${unlockreason}\`\n \n**Moderator:** ${unlockmod}`)


 var auditunembed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setTitle("Unlock Issued")
 .setDescription(`\`${targetChannel.name}\` has been unlocked\n \n \n**Reason:** \`${reason}\`\n \n**Moderator:** ${mod}`)

        // Guild ID is the same as the everyone role ID
        const everyoneID = message.guild.id;

        targetChannel.updateOverwrite(everyoneID, {
            SEND_MESSAGES: true,
        });

        //targetChannel.send(`**${targetChannel.name}** has been unlocked by a moderator :unlock:`);
        targetChannel.send(unlockembed)
        auditchannel.send(auditunembed)
    }
}