const Discord = require('discord.js')

exports.run = async (bot, message, args) => { 
  let botmessage = args.join(" ");
  message.delete().catch();
    if (!args[0]) return message.reply(" а где вопрос?");
  if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await message.channel.send(botmessage);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

exports.help = {
    name:"poll"

}