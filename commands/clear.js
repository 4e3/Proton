    module.exports = {
    name: 'clear',
    aliases: ['purge', 'delete'],
    description: 'clears messages!',
    permissions: ["MANAGE_CHANNELS"],
    async execute(client, message, args, Discord) {
  var underminEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Please enter the amount of messages that you want to clear.')
 var overlimitEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('You cant delete more than 100 messages.')
 var nonumberEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Please enter a real number.')
 var noinputEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('You must delete atleast one message.')
 





            if (!args[0]) return message.channel.send(underminEmbed).then(msg => {
            msg.delete, 5000})
  .catch(console.error);
            if (isNaN(args[0])) return message.channel.send(nonumberEmbed).then(msg => {
            msg.delete, 5000})
  .catch(console.error);

            if (args[0] > 100) return message.channel.send(overlimitEmbed).then(msg => {
            msg.delete, 5000})
  .catch(console.error);
            if (args[0] < 1) return message.reply(noinputEmbed).then(msg => {
            msg.delete, 5000})
  .catch(console.error);
  var mod = message.author.tag

            await message.channel.messages.fetch({
                limit: args[0]
            }).then(messages => {
                message.channel.bulkDelete(messages);
                var cleardoneEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription("Messages cleared.")
 console.log(`${mod} used clear`)
                message.channel.send(cleardoneEmbed).then(msg => {
            msg.delete, 5000})
            })


        }


    }