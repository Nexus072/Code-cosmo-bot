const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
message.guild.createRole({ name: 'Color', color: args[0], position: message.member.highestRole.position + 1}).then(r => message.member.addRole(r.id))
      let embed = new Discord.RichEmbed()
    .setColor("#0000ff")
    .setTitle("Я создала роль!")

    message.channel.send(embed);
}
      module.exports.help = {
        name: "color"
      }