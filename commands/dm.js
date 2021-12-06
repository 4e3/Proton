module.exports = {
    name: 'dm',
    aliases: [],
    description: 'Bot commandssadsa',
    permissions: [],

    execute(client, message, args, Discord) {

      const lol = client.emojis.cache.find(emoji => emoji.name === "bruhimagine");
      if (message.author.id !== "572545821849944076") return;
      var dmrseason = args.slice(1).join(" ");
      const dmtarget = message.mentions.users.first();

      if(!dmtarget) {
      return message.channel.send(`mention someone for this to actually work ${lol}`)
    }
      dmtarget.send(dmrseason)
      message.channel.send("ez done")
     }
    
}