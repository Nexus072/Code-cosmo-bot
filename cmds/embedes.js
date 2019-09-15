const discord = require('discord.js');

module.exports.run = async (bot,message,args) => { 
        let Color = args[0];
        let Title = args[1];
        let Description = args[2];

        if (Color === "blue") { Color = "6734767"; } 
        if (Color === "RANDOM") { Color = 'RANDOM'; }


        console.log(args[0]);
        message.delete().catch();
        const embed =
        {
                embed: 
                {
                        color: Color,
                        title: Title,
                        description: Description

                }
        }
        return message.channel.send(embed);
    },
module.exports.help = {
    name: 'embed-3',
    description: 'test'
}