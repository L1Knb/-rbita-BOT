module.exports = async (client,msg) => 
{
  await msg.member.voice.channel.join();

}