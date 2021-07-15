const config = require("../config.json");
const commands = require("../scripts/CommandsReader")(config.prefix);

const descriptions = {
    "*help": "Use esse comando para ver os comandos disponiveis",
    "*aviso": "Avise as pessoas do server",
    "*clear": "Limpe o chat",
    "*ping":  "Pingue o bot"
};

module.exports = (client, msg) => {
  var text = "Comandos: \n";

  Object.keys(commands).forEach(command => {
    text += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}`
  });
  msg.reply(text);
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