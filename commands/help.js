const config = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const Discord = require('discord.js');

  const avisoEmbed = new Discord.MessageEmbed()
	.setColor('#483D8B')
	.setTitle('Comandos:')
	.setAuthor(`Órbita Server`,)
	.setThumbnail('https://i.imgur.com/6Z4L1qv.jpg')
	.addFields(
    {name: '*help', value: 'Use esse comando para ver os comandos disponiveis'},
    {name: '*aviso', value: 'Avise as pessoas do server'},
    {name: '*filme', value: 'Cria um template para o filme'},
    {name: '*clear', value: 'Limpe o chat'},
    {name: '*ping', value: 'Pingue o bot'},
	)
	.setTimestamp()
	.setFooter('Órbita Server');

  msg.reply(avisoEmbed);
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