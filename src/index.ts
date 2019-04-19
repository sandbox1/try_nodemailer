import * as nodemailer from "nodemailer";
const env = require('env2')('.env')

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_HOST!),
    secure: false,
    auth: {
        user: process.env.MAIL_USER!,
        pass: process.env.MAIL_PASS!,
        type: "login"
    }
},
    { from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>` },
)

const message = {
    // Comma separated list of recipients
    to: `${process.env.MAIL_TO_NAME} <${process.env.MAIL_TO}>`,

    // Subject of the message
    subject: 'test ' + Date.now(),

    // plaintext body
    text: 'Hello test !',
}


function doSend(){
    transport.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }
    
        console.log('Message sent successfully!');
    });
    
}

function doVerify() {
    // verify connection configuration
    transport.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    })
}

// doVerify()
doSend()  //Uncomment to send