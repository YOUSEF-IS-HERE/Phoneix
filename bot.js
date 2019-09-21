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

//nickname
client.on('message', async (message) => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(' ');
  let prefix = '!!';
  if (args[0] == `${prefix}nickall`) {
    if (!message.member.hasPermission('MANAGE_NICKNAMES') || !message.guild.me.hasPermission('MANAGE_NICKNAMES')) return;
    if (!args[1]) return message.reply('Type the nickname ( [name] = member username ).');
    let members = message.guild.members.filter(m => m.manageable);
    message.channel.send(`Changing nickname for ${members.size} members.`);
    members.forEach((m, i) => {
      setTimeout(() => {
        m.setNickname(args.slice(1).join(' ').replace('[name]', m.user.username)).catch(e => {
          message.channel.send(`Could not change nickname for **${m.user.tag}**.`);
        });
      }, (2000 * i));
    });
  }
});

client.on('message', msg => {
    if (msg.content === 'ياسيد') {
      msg.reply('هلا');
    }
  });

client.on('message', msg => {
    if (msg.content === 'هلا ') {
      msg.reply('ياسيد');
    }
  });

client.on('message', msg => {
    if (msg.content === 'ياسيد') {
      msg.reply('هلا');
    }
  });

client.on('message', msg => {
    if (msg.content === 'هلا ') {
      msg.reply('ياسيد');
    }
  });

client.login(process.env.BOT_TOKEN);
