import React from 'react';

function emailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
console.log({email});
return(
<div id="loggedInDiv">
<span id="userName">Logged {email} In As {firstName} {email} {lastName} {email}</span><br />
</div>
);
};

export default emailNode;