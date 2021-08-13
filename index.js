const express   = require('express');
const app       = express();

app.get("/", (request, response) => 
{
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

const Discord   = require ('discord.js');
const client    = new Discord.Client();

const config    = require("./config.json");
const welcome   = require("./scripts/welcome.js");
const interacao = require("./scripts/interation.js");
const bye       = require("./scripts/byee.js");


client.on("ready", () =>{
  console.log(`Logado com o bot ${client.user.tag}`);

  let atividade =
  [
    `Use ${config.prefix}help para ajuda com comandos`
  
  ],
  i = 0;
  setInterval ( () =>
    client.user.setActivity(`${atividade[i++ % atividade.length]}`,{
      type: "WATCHING"
    }), 500 * 60);


  welcome(client);
  bye(client);
  interacao(client);
});

client.login(process.env.TOKEN);