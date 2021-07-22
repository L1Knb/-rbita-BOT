const config = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const Discord = require('discord.js');
module.exports = (client, msg) => {
  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setAuthor(`Órbita Server`,)
	.setThumbnail('https://i.imgur.com/6Z4L1qv.jpg')
	.addFields(
    {name: '*help', value: 'Use esse comando para ver os comandos disponiveis'},
    {name: '*ping', value: 'Pingue o bot'},
    {name: '*say', value: 'Faz o bot falar (**mods only**)'},
    {name: '*orbitancap', value: 'Link da live orbitancap'},
    {name: '*duduxqx', value: 'Link da live duduxqx'},
    {name: '*marcikass', value: 'Link da live marcikass'},
    {name: '*egirlancap', value: 'Link da live egirlancap'},
	)
	.setTimestamp()
	.setFooter('Órbita Server - BOT made by L1');

  msg.reply(avisoEmbed);

  //msg.member.roles.remove('813534457696354304');
  
};



const permissions = config.permissions;

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