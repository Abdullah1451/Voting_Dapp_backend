const nodemailer = require('nodemailer');
const { MAIL_SETTINGS } = require('../constants/constants');
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

module.exports.sendMail = async (params) => {
  try {
    await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: params.to, // list of receivers
      subject: 'Email Authentication', // Subject line
      html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h4>Namaskar🙏 Voter,</h4>
        <h4 style="margin-bottom: 20px;">To authenticate, please use the following OTP(One Time Password) </h4>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
        <p style="margin-top:20px;">Do not share this OTP with anyone. If you do not request for verification please do not respond to the mail. You can ignore this mail.</p>
      </div>
    `,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
