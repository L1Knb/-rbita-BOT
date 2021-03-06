const config        = require("../config.json");
const commands      = require("./CommandsReader")(config.prefix);
const unknowCommand = require("./unknowCommand");
const permissions   = config.permissions;
const venId         = config.VenId;
const paulo         = require("../fotos.json");
const help          = require("../commands/help.js");

module.exports = async (client, msg) => {
  client.on("message", (msg) => {

  if(!msg.author.bot && msg.guild)
  {
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);

        const args = msg.content.split(" ");

        if(commands[args[0]])
        {

            if(verificarPermissao(msg.member,args[0]))
            {
              commands[args[0]](client,msg, args);
            }
            
            else msg.reply("você não tem permissão para executar esse comando!");
            
        }
        else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);

   /* if (msg.content == 'Oi')
      {
        if  (msg.member.id == config.L1Id)
        {
          msg.channel.send(`olá L1 como você esta?`);     
        }
        else if (msg.member.id == config.AdaId)
        {
            msg.channel.send(`Salve Adamastor, te notei seu Gostosao`)
        }
        else if (msg.member.id == config.RodId)
        {
            msg.channel.send(`Salve Rodrigão, seu linde`)
        }
        else 
        {
          msg.reply(`Você não é o L1 😡`);
        }
        
      }*/
      if (msg.content == 'bem') 
      {
        if  (msg.member.id == config.L1Id) 
        {
          msg.channel.send(`que bomm 😘`);
        }
               
      } 
      else if (msg.content == 'mal') 
      {
        if  (msg.member.id == config.L1Id) 
        {
          msg.channel.send(`poxa que pena, mas logo passa`);
        }
               
      }

    if (msg.content == 'BOM DIA') {
      msg.reply(`BOM DIA VAGABUNDO`);
    }

    else if (msg.content == 'BOA TARDE') {
      msg.reply(`BOA TARDE PORRA`);
    }

    else if (msg.content == 'BOA NOITE') {
      msg.reply(`BOA NOITE CARALHO`);
    }

    else {

      const menssagem = msg.content.toLowerCase();

      if (menssagem == 'oi') {
      msg.reply(`oiiieeee :3 (oi cringe)`);
    }
  
      if (menssagem == 'bom dia') {
        msg.reply(`Bom dia`);
      }
  
      else if (menssagem == 'boa tarde') {
        msg.reply(`Boa tarde`);
      }
    
      else if (menssagem == 'boa noite') {
        if  (msg.member.id == config.L1Id)
        {
          msg.channel.send(`Boa noite L1, Dorme bemm 😘🥰🥰`);
        }
      else msg.reply(`Boa noite`);
      }

    }

    
     if (msg.content == 'é sobre isso') {
      msg.reply(`LACROU MANXXX???`);
    }
  
     if (msg.content == 'F') {
      msg.channel.send(`F`);
    }
      if (msg.content == 'gabriel pereira') {
      msg.channel.send(`<@${venId}>, queria saber se sua mãe está solteira`);;
    }
   /* else if (msg.content == '*paulo guedes') {
      msg.channel.send(paulo.guedes);
    }*/
     if (msg.content == `<@${config.botId}`) {
      help(client);
      msg.channel.send(`a`);
    }
     if (msg.content == 'bolsonaro') {
      msg.reply(`fechado com o mito :sunglasses::point_right::point_right:`);
    }
    
     if (msg.content == 'de quem o Órbita gosta?') {
      msg.channel.send(`Só amo o <@${config.L1Id}> o resto odeio todos`);
    }

    /*else {
      const tam = msg.content.length;
      console.log(tam);
      menssagem = msg.content.substring(tam-2);
      console.log(menssagem);
      if(menssagem == 'ão')
      {
        msg.channel.send('meu pau na sua mão');
      }
    }*/

  }
});



function verificarPermissao(member,command)
{
    let verification = !permissions[command];
    if(!verification)
    {
        const perms = permissions[command];
        perms.forEach(p =>
        {
            switch(p.type)
            {
                case "role":
                    if(member.roles.cache.has(p.value)) verification = true;
                break;
                case "permission":
                    if(member.permissions.has(p.value)) verification = true;
                break;
                case "id":
                    if(member.id.has(p.value)) verification = true;
                break;
            }
        });
    }
    return verification;
}
}