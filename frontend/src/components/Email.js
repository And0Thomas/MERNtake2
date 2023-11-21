import React from 'react';

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'CARDINALCCVerify@gmail.com',
        pass: 'fegs wvih dqtd ccev'
    }
});

function EmailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
let vernum = Math.floor(Math.random() * 100000);


const doLogout = event =>
{
event.preventDefault();
localStorage.removeItem("user_data")
window.location.href = '/';
};

var message = {
    from: "Cardinal Coffee Co" , // sender address
to: email, // list of receivers
subject: "Welcome Letter", // Subject line
html: `
<div>
<p>Verification code ${vernum}</p>
</div>
`}
transporter.sendMail(message);

return(
<div id="loggedInDiv">
<span id="userName">Logged In As {firstName} {lastName} {email}</span><br />
<button type="button" id="logoutButton" class="buttons"
onClick={doLogout}> Log Out </button>
</div>
);
};

export default EmailNode;