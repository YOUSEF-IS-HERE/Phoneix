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
client.on("message", message => {
    var prefix = "+"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':warning: | ليس لديك صلاحيات');
        var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح 100 رسالة بنجاح",
        footer: {
          text: "Boom" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }


});
//server
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      .setFooter(`Phoenix's Bot `,'')
      msg.channel.send({embed:embed});
    }
  });
//say
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
//id
client.on('message', message => {
  var prefix = "+"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.setFooter(`Phoenix's Bot `,'')
message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
//kick
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
     .setFooter(`Phoenix's Bot`,'')
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
//ban
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("380682708596031488")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       .setFooter(`Phoenix's Bot`,'')
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});
//members 

//emoji chat
const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
//s7b
client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
   if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });
//ping
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('+ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         .setFooter(`Phoenix's Bot`,'')
                        message.channel.send({embed:embed});
                        }
                    });


//cat
client.on('message', message => {
    if (message.content === 'حمودي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762222464372965376/Screenshot_89.png")
    }
});
client.on('message', message => {
    if (message.content === 'زعلان') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762229348584521728/Screenshot_189.png")
    }
});
client.on('message', message => {
    if (message.content === 'قودزيلا') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762229587521437706/Screenshot_188.png")
    }
});
client.on('message', message => {
    if (message.content === 'سعودي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/519940850122489856/762230503226343444/Screenshot_26.png")
    }
});
client.on('message', message => {
    if (message.content === 'مارد') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/759673970223480832/762202006017278002/kljjkljkl.png")
    }
});
client.on('message', message => {
    if (message.content === 'صعوطي') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/762232089785008158/1600328461557.png")
    }
});
client.on('message', message => {
    if (message.content === 'مركز') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/761211962910179369/2020-10-01_160235.png")
    }
});
client.on('message', message => {
    if (message.content === 'السلام عليكم') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/661101649238163487/762233908540080158/Screenshot_132.png")
    }
});
client.on('message', message => {
    if (message.content === 'سوداني') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/732286802320425083/761173308757901353/unknown.png")
    }
});
client.on('message', message => {
    if (message.content === 'واحد كب كيك') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768792356639997972/besso4.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'بعوص') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768791782653165618/besso3.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'واحد تحميله') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768794640002318346/t7mela.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'بكوري') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768792929476411412/bkory.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'معجون سنسوداين') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/768795372273270784/kobh.PNG")
    }
});
client.on('message', message => {
    if (message.content === 'زول') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/574361533816111104/770535901272473600/8fcc9f4d2cd5affc.png")
    }
});
client.on('message', message => {
    if (message.content === 'pls بافرحان') {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/764227981668384800/773499187723239455/Screenshot_5.png")
    }
});
//games
    const Sra7a = [
     'https://cdn.discordapp.com/attachments/519940850122489856/773500194519515156/Screenshot_5.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500212307689502/Screenshot_17.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500238073823262/Screenshot_121.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500269601226762/Screenshot_120.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500292628086794/Screenshot_123.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500317244719114/Screenshot_131.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500352003702804/Screenshot_154.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500394181623838/Screenshot_190.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500422198788126/Screenshot_195.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500456063467540/Screenshot_189.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500486954778695/Screenshot_209.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500530113642506/Screenshot_213.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500613128355850/Screenshot_339.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500616990392340/Screenshot_346.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500620102959118/Screenshot_353.png',
     'https://cdn.discordapp.com/attachments/519940850122489856/773500650817716254/Screenshot_338.png',
]
   client.on('message', message => {
 if (message.content.startsWith('pls بافرحان')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});
client.login(process.env.BOT_TOKEN);
