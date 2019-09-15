const superagent = require("snekfetch"); // https://id.hentai-image.com/archive/date/20180520/page/124/
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('Ты должен использовать это в nsfw канале!')
    superagent.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#704c84`)
      .setFooter(`Tags: neko gif`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
    
}

module.exports.help = {
  name: "nekogif"
}