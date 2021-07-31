const config   = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const Discord  = require('discord.js');
module.exports = (client, msg) => 
{
  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setAuthor(`Órbita Server`,)
	.setThumbnail('https://i.imgur.com/6Z4L1qv.jpg')
	.addFields(
    {name: 'em breve!'}
	)
	.setTimestamp()
	.setFooter('Órbita Server - BOT made by L1');

  msg.reply(avisoEmbed);

  //
  
};
