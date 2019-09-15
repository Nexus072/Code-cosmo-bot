const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    superagent.get('https://cataas.com/cat')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
    
}

module.exports.help = {
  name: "cat"
}