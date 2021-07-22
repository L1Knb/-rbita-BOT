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

const welcome   = require("./scripts/welcome.js");
const interacao = require("./scripts/interation.js");

client.on("ready", () =>{
  console.log(`Logado com o bot ${client.user.tag}`);
  welcome(client);
  interacao(client);
});

client.login(process.env.TOKEN);