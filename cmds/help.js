const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    console.log('4584155')
    let embed = new Discord.RichEmbed()
    .setDescription("Описание бота -")
    .setColor('#00ff00')
    .addField("О боте","Бот создан 17.07.2019, Комманды разделенны на модуля, поброднее - ~commands, Изначально он должен был быть приватным")
    .addField("О другом","Мы имеем свой сервер - https://discord.gg/ZSGs58T также ссылка приглашение бота - ~invite(Бывший сервер - https://discord.gg/299fD6w)")
    .addField("Последнее -","Бот имеет более 35 комманд, 3 из них в разработке.")
    message.channel.send(embed);

};
module.exports.help = {
    name: "help"
};