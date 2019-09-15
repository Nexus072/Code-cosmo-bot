const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Список комманд -")
    .setColor('RANDOM')
    .addField("💎 Профиль", " profile, xp, balance")
    .addField("⚠ Административные, Модераторские", "ban, mute, kick, warn")
    .addField("🖥 info", "help, **commands**, ping, poll, fact")
    .addField("💋 NSFW","nekogif")
    .addField("🎁 Приватные","serverip, backdoor, server-list,**list**")
    message.channel.send(embed);

};
module.exports.help = {
    name: "commands"
};