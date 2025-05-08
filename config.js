const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSSUHAIL_07_43_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvVm41ZlJ4cVQwSW1RZG90M2htU205Q2hucEJJejE4dnRWd2lkajBWNmxJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzYyMTcwMzI5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkNFMEMxOTYzMUE3OEU0MDlCNDdGNDc2RkE3MUNBRTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NjkwMTc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjIxNzAzMjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQTRGMUMyNzYzRkUxQ0I0RUJFODNDNDQyNjc2QjNGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY2OTAxNzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVQxRGlhZ2tRXzI5WUF4STM1UDByQVwiLFxuICBcInBob25lSWRcIjogXCJhOTc3Y2Y0Yy1kYzlmLTQyMzEtYjcwNC0yNjZiZWUyZTQxM2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICA5MSxcbiAgICAgIDE2MSxcbiAgICAgIDEyLFxuICAgICAgMjA3LFxuICAgICAgMjE5LFxuICAgICAgMTg4LFxuICAgICAgMTM0LFxuICAgICAgMTIzLFxuICAgICAgMzIsXG4gICAgICAxMDgsXG4gICAgICAyMTEsXG4gICAgICAxMTEsXG4gICAgICAyMjksXG4gICAgICAxOTMsXG4gICAgICAxMixcbiAgICAgIDE2NSxcbiAgICAgIDEwNSxcbiAgICAgIDI0LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjM0LFxuICAgICAgMTU5LFxuICAgICAgMzAsXG4gICAgICAxMjQsXG4gICAgICAxNDUsXG4gICAgICAxNjgsXG4gICAgICAxOTEsXG4gICAgICAyNDUsXG4gICAgICAyMzYsXG4gICAgICAxMTQsXG4gICAgICAyMTksXG4gICAgICAxNSxcbiAgICAgIDE1OCxcbiAgICAgIDkwLFxuICAgICAgMzcsXG4gICAgICA4OCxcbiAgICAgIDIwMSxcbiAgICAgIDIwMixcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTDdROTFaWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjIxNzAzMjk0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzYWxlIGJheWVcIixcbiAgICBcImxpZFwiOiBcIjIyMDEzOTIwMzEwODg4ODo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083N3c5Y0NFUHpBOGNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjhzbmRlNEl6akVCYWtZNG53QlJleDhRREgyaU1OQVBVeWNrMnFLNktCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLcUdEenBDNVNYTFg0VVlWZmw3MjVDSHlSY2RVYVdXbzhvWE4yT0RBcTUvS2lSL2xWcFUrYWQ1OXF4RXhaeDZ3UHlKbDdNYWJwNlJGL1prTGtIUnRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEN2xiYmlpcnZkdTFSaFNuZFJVbGJNUTlsaWhXUlRCWDhMd0x4Z3g5SFBsQ2RtU3VHcW1EVk9EZTUzSnBhQjFuU3lXbnBXQXVSRTh6bEMvbk1jTExqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2MjE3MDMyOTQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjY5MDE3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZZalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRllqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRHBJMlBJa2J5VktrckJFS3BvaTMrY1FRMnZqU3BtVWZDRWc0NEU4SG1OND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjA0MzY3MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjY5MDE3NjM5OFwifSIKfQ==ION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
