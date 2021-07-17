const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require ('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const commands  = require("./scripts/CommandsReader")(config.prefix);
const unknowCommand = require("./scripts/unknowCommand");
const permissions = config.permissions;

const welcome = require("./welcome.js");

client.on("ready", () =>{
  console.log(`Logado com o bot ${client.user.tag}`);
  welcome(client);
});

client.on("message", (msg) => {

  if(!msg.author.bot && msg.guild){
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]){
            if(verificarPermissao(msg.member,args[0]))
                commands[args[0]](client,msg, args);
            else msg.reply("você não tem permissão para executar esse comando!");
        }else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);
    }

  if (!msg.author.bot) {
    if (msg.content == 'bom dia') {
      msg.reply(`Bom dia`);
    }
    else if (msg.content == 'Bom dia') {
      msg.reply(`Bom dia`);
    }
    else if (msg.content == 'BOM DIA') {
      msg.reply(`Bom dia`);
    }
    else if (msg.content == 'boa tarde') {
      msg.reply(`Boa tarde`);
    }
    else if (msg.content == 'Boa tarde') {
      msg.reply(`Boa tarde`);
    }
    else if (msg.content == 'BOA TARDE') {
      msg.reply(`Boa tarde`);
    }
    else if (msg.content == 'boa noite') {
      msg.reply(`Boa noite`);
    }
    else if (msg.content == 'Boa noite') {
      msg.reply(`Boa noite`);
    }
    else if (msg.content == 'BOA NOITE') {
      msg.reply(`Boa noite`);
    }
  }
});



function verificarPermissao(member,command){
    let verification = !permissions[command];
    if(!verification){
        const perms = permissions[command];
        perms.forEach(p =>{
            switch(p.type){
                case "role":
                    if(member.roles.cache.has(p.value)) verification = true;
                break;
                case "permission":
                    if(member.permissions.has(p.value)) verification = true;
                break;
            }
        });
    }
    return verification;
}

client.login(process.env.TOKEN);

