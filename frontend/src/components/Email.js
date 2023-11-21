import React from 'react';

const msg = {
    to: email,
    from: "CARDINALCCVerify@gmail.com",
    subject: "Verification",
    html: `<p>1001</p>`,
};

const sendMail = async()=> {
    try{
        await sgMail.send(msg);
    } catch (error)  {
        console.error(error);

        if (error.response){
            console.error(error.response.body)
        }
    }
}

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

sendMail();


return(
<div id="loggedInDiv">
<span id="userName">Hello {firstName} {lastName} {email}</span><br />
<button type="button" id="logoutButton" class="buttons"
onClick={doLogout}> Log Out </button>
</div>
);
};

export default EmailNode;