const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ['speak'],
  description: "bro",
  permissions: [],
   
  execute: async (client, message, args) => {
    if (message.author.id !== "572545821849944076") return;
    var stuff = args.slice().join(" ");
    if(!stuff) {
      return message.channel.send("maybe add a message to send idiot")
    }

    message.channel.send(stuff)
  },
};