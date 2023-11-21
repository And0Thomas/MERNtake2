import React from 'react';




function EmailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
let vernum = Math.floor(Math.random() * 100000);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "CARDINALCCVerify@gmail.com",
      pass: "COP4331-14",
    },
  });

  const mailOptions = {
    from: {
        name: "Cardinal Coffee Co",
        address: "CARDINALCCVerify@gmail.com"
    },
    to: {email},
    subject: "Email Verification CCC",
    text: "Your Verification code is "
  }

  const sendMail = async () => {
    try{
        await transport.sendMail()
        console.log("email been sent");
    } catch (error) {
        console.error(error)
    }
  }

  sendMail(transporter, mailOptions);

const doLogout = event =>
{
event.preventDefault();
localStorage.removeItem("user_data")
window.location.href = '/';
};

return(
<div id="loggedInDiv">
<span id="userName">Logged In As {firstName} {lastName} {email}</span><br />
<button type="button" id="logoutButton" class="buttons"
onClick={doLogout}> Log Out </button>
</div>
);
};

export default EmailNode;