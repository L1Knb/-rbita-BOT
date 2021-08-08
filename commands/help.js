const config   = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const Discord  = require('discord.js');
module.exports = (client, msg) => 
{
  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setThumbnail('https://i.imgur.com/6Z4L1qv.jpg')
	.addFields(
    {name: '**prefixo**', value: '`*`'},
    {name: '**geral**', value: '`help` `ping` `paulo guedes` `paulo kogos` `gafeu` `ciencia`'},
    {name: 'lives', value: '`orbitancap` `duduxqx` `marcikass` `egirlancap`'},
    {name: 'mods', value: '`say`'}
    
	)
	.setTimestamp()
	.setFooter('Órbita Server - BOT made by L1');

  msg.reply(avisoEmbed);

  //
  
};
