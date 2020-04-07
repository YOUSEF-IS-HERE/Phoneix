const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Phoneix's Bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

//clear
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل انت متأكد من أنك تريد محو الشات؟ **`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
  message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

const fs = require('fs') // npm i fs
let temp = JSON.parse(fs.readFileSync('./temp.json' , 'utf8'));
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
 if(message.content == (prefix+'temp on')){
if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
if(temp[message.guild.id]) return message.channel.send('**The TempVoice Room Is Allready setup ✅**')
 message.guild.createChannel('Temporary Channels', 'category').then(cg => {
 message.guild.createChannel('Join to create temp room', 'voice').then(ch => {
ch.setParent(cg)
 message.channel.send('**The TempVoice Room Successfully setup ✅**')
 temp[message.guild.id] = {time: "3000", category : cg.id,  channel :ch.id}
});
 })
 }fs.writeFile("./temp.json", JSON.stringify(temp),(err)=>{if(err)console.error(err)})
    });
//
client.on('message' , message => {
  if(message.content == prefix+'temp off') {
    if(!temp[message.guild.id])return message.channel.send('**The TempVoice Room Is Allready Disabled ✅**')
   if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
let cg = message.guild.channels.get(temp[message.guild.id].category);let ch = message.guild.channels.get(temp[message.guild.id].channel)
if(cg&&ch) {ch.delete().then(()=>{cg.delete()});message.channel.send('**The TempVoice Room has been Disabled ✅**')}
else {message.channel.send('**The TempVoice Room Is Allready Disabled ✅**')};delete temp[message.guild.id]} });

//
client.on('message' , message => {
if (message.content.startsWith(prefix + "temp time")) {
if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
let newTime= message.content.split(' ').slice(2);
if(!newTime) return message.channel.send(`**You Must type the number after the command** ❎`)
if(isNaN(newTime)) return message.channel.send(`**Please Type The a Correct Number \🔢\❌**`);
if(newTime < 3) return message.channel.send(`**The Time Must Be More Than \`3s\` ❌**`)
let Time = Math.floor((newTime*(1000)));
temp[message.guild.id].time = Time
message.channel.send(`**✅ The Time Set To: \`${newTime}s\`**`);
}})
////
client.on('voiceStateUpdate', (old, neww) => {
if(!temp[old.guild.id]) return
if(!neww.guild.member(client.user).hasPermission('ADMINISTRATOR'))return;;
let newUserChannel = neww.voiceChannel;let oldUserChannel = old.voiceChannel
if(newUserChannel == oldUserChannel) return;
let channel = temp[neww.guild.id].channel
let category = temp[neww.guild.id].category
let ch = old.guild.channels.get(channel);if(!ch) return
let ct = old.guild.channels.get(category);if(!ct) return

if(newUserChannel !== undefined && newUserChannel.id == channel) {
neww.guild.createChannel(neww.displayName , 'voice').then(c => {
c.setParent(category).then(()=>{c.setParent(category).catch(err=>{return})})
c.overwritePermissions(neww.user, {MANAGE_CHANNELS:true,MUTE_MEMBERS:true})
.then(()=>{ch.overwritePermissions(neww,{CONNECT:false})});return neww.setVoiceChannel(c)});}
if(oldUserChannel !== undefined) {
setTimeout(()=>{
let chh = neww.guild.channels.find('name',neww.displayName)
if(!chh) return
if(chh.type === 'voice')return[chh.delete(),
ch.overwritePermissions(neww, {
CONNECT:null})]
}, temp[neww.guild.id].time);}
client.on('channelDelete',channel =>{
  if(oldUserChannel !== undefined) {
    setTimeout(()=>{
    let chh = neww.guild.channels.find('name',neww.displayName)
    if(!chh) return
    if(chh.type === 'voice')return[chh.delete(),
    ch.overwritePermissions(neww, {
    CONNECT:null})]
    }, temp[neww.guild.id].time);}
})
});
client.login(process.env.BOT_TOKEN);
