const config   = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const Discord  = require('discord.js');
module.exports = (client, msg) => 
{
  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setThumbnail('https://cdn.discordapp.com/attachments/872245099663360010/875755476455940116/a_95fd29a1a79b9e63c6778d0331454e25.gif')
	.addFields(
    {name: '**prefixo**', value: '`*`'},
    {name: '**geral**', value: '`help` `ping` `paulo guedes` `paulo kogos` `gafeu` `ciencia` `zap` `massagem @user`'},
    {name: 'lives', value: '`orbitancap` `duduxqx` `marcikass` `egirlancap`'},
    {name: 'mods', value: '`say`'},
    {name: 'você também pode conversar com o bot digitando:', value:'`bom dia` `boa tarde` `boa noite` `oi` `F` `gabriel pereira` `bolsonaro` '},
    {name: '+18', value: '`mamar @user` `sexo @user`'}
	)
	.setTimestamp()
	.setFooter('Órbita Server - BOT made by L1');

  msg.reply(avisoEmbed);

  
  
};
