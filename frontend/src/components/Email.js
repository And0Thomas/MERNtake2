import React from 'react';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        service: 'gmail', // e.g., 'Gmail', 'SendGrid'
        auth: 
        {
          user: 'CARDINALCCVerify@example.com',
          pass: 'COP4331-14',
        },
    });

    const mailOptions = 
{
    from: 'CARDINALCCVerify',
    to: email,
    subject: 'Email Verification Code',
    text: `Your verification code is: ${vernum}`,
 };


function EmailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
const vernum = Math.floor(Math.random() * 100000);

async function sendEmail() {
    let transporter = nodemailer.createTransport(
        {
            service: 'gmail', // e.g., 'Gmail', 'SendGrid'
            auth: 
            {
              user: 'CARDINALCCVerify@example.com',
              pass: 'COP4331-14',
            },
        });

        const mailOptions = 
        {
            from: 'CARDINALCCVerify',
            to: email,
            subject: 'Email Verification Code',
            text: `Your verification code is: ${vernum}`,
         };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}
sendEmail();


const doLogout = event =>
{
event.preventDefault();
localStorage.removeItem("user_data")
window.location.href = '/';
};


return(
<div id="loggedInDiv">
<span id="userName">Logged In As {firstName} {lastName} {email} ${vernum}</span><br />
<button type="button" id="logoutButton" class="buttons"
onClick={doLogout}> Log Out </button>
</div>
);
};

export default EmailNode;