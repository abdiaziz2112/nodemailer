
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'maaaxafrica@gmail.com',
        pass:'cehibgnxmffrcnhj'
    }
})

var mailOptions = {
    from:'maaaxafrica@gmail.com',
    to:'maashaaabdiaziz@gmail.com',
    subject:'Sending Email using Node.js',
    text: 'from wiil to gabar!'
}
transporter.sendMail(mailOptions, function(error, info){
    if (error) { 
        console.log(error); 
    } else {
        console.log('Email sent: ' + info.response);
     } })
    