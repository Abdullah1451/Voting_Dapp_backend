require('dotenv').config();
module.exports = {
  allowedOrigins: ['http://localhost:5001/'],
  SERVER_PORT: process.env.PORT || 5001,
  SERVER_DB_URI: process.env.DB_URI,
  OTP_LENGTH: 4,
  OTP_CONFIG: {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  },
  MAIL_SETTINGS: {
    service: 'gmail',
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  },
};
