const mailservice = require("../services/mail.service");
const os = require('os')

const status = (request, h) => {
  return {
    status: "running",
    timestamp: new Date(),
  };
};

const sendMail = (request, h) => {
  mailservice.sendCongratulationsEmail()
  return {
    status: 202,
  };
};

const infosSystem = (request, h) => {
    os.uptime()

  return {
    freememory: os.freemem(),
    platform: os.platform(),
    uptime: os.uptime()
  }
}

module.exports = { status, sendMail, infosSystem };
