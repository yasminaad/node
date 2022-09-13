var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kkkkkk@gmail.com',
    pass:'ljkjfjhjhjkll'
  }
});

var mailOptions = {
  from: 'kkkkkk@gmail.com',
  to: 'jaxyz@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});