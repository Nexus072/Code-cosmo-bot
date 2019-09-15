const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let replies = ["Первая в мире веб-страница была создана английским учёным Тимом Бернерс-Ли 6 августа 1991 года, и она всё еще существует. Страница содержит данные о том, что такое Всемирная паутина, как установить веб-сервер, как скачать браузер и другую справочную информацию. Ссылка - https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
  
    if(question === "Секрет") replies[result] = 'Нет, не секрет.'

//выше ответы
        bot.send(replies[result]);
    message.channel.send(e);
}
module.exports.help = {
    name: "fact"
};