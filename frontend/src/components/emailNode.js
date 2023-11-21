import React from 'react';


function emailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var userId = ud.id;
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
return(
<div id="loggedInDiv">
<span id="userName">Logged In As {firstName} {lastName} {email}</span><br />
</div>
);
};

export default emailNode;