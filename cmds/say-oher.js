const discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    if(message.member.hasPremssion('MENAGE_MESSAGES')) return message.channel.send("У вас нету прав!!!");
    if(!args[0]) return message.channel.send("Вы не указали ID канала!!!");
    if(!args[1]) return message.channel.send("Вы ничего не сможете отправить, напишите хотя бы один символ!!!")
    let mess = args.join(" ")
    bot.message.channel.send(mess)

}

module.exports.help = {
    name:"say-other"
}