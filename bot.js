const { Client, IntentsBitField, GatewayIntentBits } = require('discord.js');
const { measureMemory } = require('vm');
const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.GuildPresences,IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildMembers,GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildIntegrations);

const bot = new Client({ intents: myIntents});


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    let canal = bot.channels.fetch("943283709510033448")
    console.log(canal);
});
let personas = ["322798185204416512", "553613528800559116", "747956165236883597", "748004656684466176", "457692823488167936", "662061215161385012", "758324176091742260", "380167946753802251"];
let lastNumber;

bot.on("messageCreate", (message) => {
    if (isNaN(parseInt(message.content))) return;
    if (message.channel.id !== "943283709510033448") return;

    if (lastNumber && lastNumber + 1 !== + message.content) {
        lastNumber = undefined;
        message.channel.send("PONE BIEN EL NUMERO LA CONCHA DE TU MADRE, TE VAS BANEADO POR PELOTUDO")
        message.channel.send("PONE BIEN EL NUMERO LA CONCHA DE TU MADRE, TE VAS BANEADO POR PELOTUDO")
        message.channel.send("PONE BIEN EL NUMERO LA CONCHA DE TU MADRE, TE VAS BANEADO POR PELOTUDO")
        message.channel.send("PONE BIEN EL NUMERO LA CONCHA DE TU MADRE, TE VAS BANEADO POR PELOTUDO")
        return message.channel.send("PONE BIEN EL NUMERO LA CONCHA DE TU MADRE, TE VAS BANEADO POR PELOTUDO")
    }

    if (message.author.bot === true) return;
    let numeroAleatorio = Math.floor(Math.random() * personas.length)
    while (personas[numeroAleatorio] === message.author.id) {
        numeroAleatorio = Math.floor(Math.random() * personas.length);
    }
    message.channel.send(`<@${personas[numeroAleatorio]}> Che pa tenes que contar numerito, te la hago corta, el siguiente es **${parseInt(message.content) + 1}**`);
    lastNumber =+ message.content

    

    // message.channel.send((parseInt(message.content)+1).toString())

})



// bot.on("messageCreate", (message) => {

//     message.channel.send((parseInt(message.content)+1).toString())

// })



  


bot.login('MTA3MTU4ODQ2ODkwNTQ3NjIyNg.GKDGp7.HYAy6LyCAckzJhHqfWA2Ebn9ISrc2VZdeQQYBo');