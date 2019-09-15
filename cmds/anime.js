const superagent = require("snekfetch");
const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    superagent.get('https://wallhaven.cc/search?q=id:1&ref=fp')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Онимэ")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: anime`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
    
}

module.exports.help = {
  name: "anime"
}