const Discord   = require ('discord.js');
const config = ("../config.json");

module.exports = async (client, msg) =>
{

  if(msg.channel.id == '813508660709163038') 
  {

    const marcado = msg.content.substring(6);
    const mamaEmbed = new Discord.MessageEmbed()
    .setColor ('#483D8B')
    .setImage ('https://cdn.discordapp.com/attachments/872245099663360010/875601440251457566/novinha-hentai-sexo-anal-06.gif');

    msg.delete();
    msg.channel.send(`${msg.author} traçou ${marcado}`,mamaEmbed);

  }
  else(msg.reply('Aqui não rsrs'));

}
