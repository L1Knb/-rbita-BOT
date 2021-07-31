const fotos = require("../fotos.json");

module.exports = async (client, msg) =>
{

  let nome = msg.content.substring(7);

  if(nome == 'guedes')
  {
    msg.channel.send(fotos.guedes);
  }
  if(nome == 'kogos')
  {
    msg.channel.send(fotos.kogos);
  }

}