import React from 'react';


function emailNode()
{
var _ud = localStorage.getItem('user_data');
var ud = JSON.parse(_ud);
var firstName = ud.firstName;
var lastName = ud.lastName;
var email = ud.email;
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

export default emailNode;