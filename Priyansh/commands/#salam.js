const fs = require("fs");
module.exports.config = {
  name: "salam",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("asslam") ||
     react.includes("Assalam") || react.includes("aslam") || react.includes("Asslam") ||
react.includes("Aslam") ||
react.includes("asslam") ||     
react.includes("ASLAM")) {
    var msg = {
        body: `${name}  𝐖𝐀𝐋𝐄𝐊𝐔𝐌 𝐀𝐒𝐒𝐋𝐀𝐌💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/salam.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }