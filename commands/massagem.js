const Discord   = require ('discord.js');

module.exports = async (client, msg) =>
{
  
  const marcado = msg.content.substring(9);
  const mamaEmbed = new Discord.MessageEmbed()
  .setColor ('#483D8B')
  .setImage ('https://cdn.discordapp.com/attachments/872245099663360010/875178648141955072/Gif_Massagem_no_cachorro.gif');

  msg.delete();
  msg.channel.send(`${msg.author} massageou ${marcado}`,mamaEmbed);

  

}
