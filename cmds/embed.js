const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("У вас нет прав");
    if(!args[0]) return bot.send("Вы не указали Содержимое embed");
    let botmessage = args.join(" ");
    let title = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(botmessage)
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed"
};