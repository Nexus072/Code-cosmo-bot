const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var member;
    if(args[0]) member = message.guild.member(message.mentions.members.first());
    if(!args[0]) member = message.member
    let profile = require('../profile.json');
    let embed = new Discord.RichEmbed()
    .setDescription(`Профиль - ${member.user.username}`)
    .setColor('RANDOM')
    .addField("Уровень",profile[member.user.id].lvl)
    .addField("Опыт",profile[member.user.id].xp)
    .addField("Монеток",profile[member.user.id].coins)
    .addField("Предупреждений",profile[member.user.id].warns)
    .addField("Медалей",profile[member.user.id].medal)
    message.channel.send(embed);

};
module.exports.help = {
    name: "profile"
};