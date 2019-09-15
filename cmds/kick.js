const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав для выполнения данной комманды. Не стоит так делать, иначе вы можете быть забаненны на сервере.");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали Существо");
    if(!rUser) return bot.send("Пользователь не найден или его не существует(Также может быть если вы собираетесь кикнуть человека, выше вас по ролям)");
    let embed = new Discord.RichEmbed()
    .setDescription("Кик")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick("");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};