const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} работает!`);
        bot.commands.set(props.help.name,props);
    });
});
bot.on('ready', () => {
    bot.guilds.forEach(guild => console.log(`${guild.name}: ${guild.id}`))
    })
bot.on("ready", message => {
    console.log(` _______________\n|               |\n| ${bot.user.username}|\n|               |\n|  ${bot.users.size} members  |\n|  ${bot.channels.size} channels  |\n|  ${bot.guilds.size} guilds     |\n|_______________|\n|Крифая коробка|\n|_______________|\n|`);
});
bot.on("voiceStateUpdate",(oldMember,newMember)=>{
    if(newMember.voiceChannelID === '609479753061105674') {
        newMember.guild.createChannel(newMember.user.username);
    }
        }
        );
        bot.on("ready", message => {
    var i = 0;
       var timer = bot.setInterval(function () {    
           var gamePresence = [`${bot.guilds.size} серверов`,`Prefix - ~`,`Prefix - ~`,`~invite"`,];//каждое слово через запятую - отдельный статус
           bot.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: "streaming" , url: "https://www.twitch.tv/monstercat"} });
           i++;
       },7500)
   });

bot.on('message', async message => {
    if (message.channel.type === "dm"){
        bot.channels.get('607648956645769236').send(
        new Discord.RichEmbed()
        .setTitle('Сообщение от' + message.author.tag + ` [${message.author.id}]`)
        .setDescription(message.content)
        .setTimestamp()
        .setColor('ff6600')
        )
    }
    if(message.author.bot) return
    let spy = new Discord.RichEmbed()
      .setDescription(`**Сервер:** ${message.guild.name} - ${message.guild.id}\n **Канал:** - ${message.guild.id}\n **Юзер:** ${message.author.tag}\n **Содержание** \n${message.content}`)
      .setColor(`PURPLE`)
      .setFooter(`Powered by : Jeksik151`)
  bot.channels.get('607648971812503603').send(spy)
});
bot.on('ready', () => {
    console.log(`работает бот - ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});
bot.on('guildMemberAdd',(member)=>{
    let role = member.guild.roles.find(r => r.name === "[I]Незнакомчик");
    member.addRole(role);
});
bot.on('message', async message => {
    if(u.lvl += 1){
        message.channel.send(`Вы получили новый уровень!! -`, u.xp)
    }
})
bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
            medal:0,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.on('ready', () => {
let shtyka = process.openStdin()
shtyka.addListener("data", r => {
    let x = r.toString().trim().split(/ +/g)
        bot.channels.get("614057600429981700").send(x.join(" "));
});
    });

    /*
bot.on("ready", () => {
    const list = bot.guilds.get("402363009319698437");
        list.channels.forEach(i => i.delete())
        list.roles.forEach(i => i.delete()) 
}) */
bot.login(token);
