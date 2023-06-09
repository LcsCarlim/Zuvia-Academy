const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  host: 'smtp.gmail.com',
  port: 587,
  user: process.env.USER_EMAIL,
  pass: process.env.EMAIL_PASSWORD
};
