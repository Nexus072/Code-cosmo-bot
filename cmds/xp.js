const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var member;
    if(args[0]) member = message.guild.member(message.mentions.members.first());
    if(!args[0]) member = message.member
    let profile = require('../profile.json');
    let embed = new Discord.RichEmbed()
    .setDescription(`Опыт - ${member.user.username}`)
    .setColor('RANDOM')
    .addField("Опыт",profile[member.user.id].xp)
    message.channel.send(embed);

};
module.exports.help = {
    name: "xp"
};