module.exports.run = (bot, message, args) => {
    if (message.author.id !== "424534058949935115" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Ты не создатель бота!`)
      let client = bot
        if(args.length < 1){
            message.channel.send("⛔");
            return;
        }
    
        var gameName = "";
        for(var i = 0; i < args.length; i++){
            gameName += args[i] + " ";
        }
        client.user.setActivity(gameName)
            .then(user => console.log("> Установлена игра: " + gameName))
            .catch(console.error);
    };
    
    module.exports.help = {
        name: "setgame"
    };