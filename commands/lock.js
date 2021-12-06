

module.exports = {
    name: "lock",
    description: "Lock",
    aliases: [],
    permissions: ["ADMINISTRATOR"],

    execute(client, message, args, Discord) {
const auditchannel = client.channels.cache.find(channel => channel.id === "907362521902612541")
       const reason = args[1] ? args.slice(1).join(' ') : 'No reason specified';
       const mod = message.author.username
       const targetChannel = message.mentions.channels.first() || message.channel;

       var lockembed = new Discord.MessageEmbed()
 .setColor('GREEN')
.setAuthor('Proto', 'https://drive.google.com/uc?id=1EtJmv32xWHbzn27yoBluSoPjTu9Wv70o', 'https://discord.js.org')
 .setDescription(`\`${targetChannel.name}\` has been locked  :lock:\n \n \n**Reason:** \`${reason}\`\n \n**Moderator:** ${mod}`)


 var auditembed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setTitle("Lock Issued")
 .setDescription(`\`${targetChannel.name}\` has been locked\n \n \n**Reason:** \`${reason}\`\n \n**Moderator:** ${mod}`)
 

        // Guild ID is the same as the everyone role ID
        const everyoneID = message.guild.id;

        targetChannel.updateOverwrite(everyoneID, {
            SEND_MESSAGES: false,
        });

        //targetChannel.send(`**${targetChannel.name}** has been locked by a moderator :lock:`);
        console.log(`${mod} used lock`)
        targetChannel.send(lockembed)
        auditchannel.send(auditembed)
    }
}