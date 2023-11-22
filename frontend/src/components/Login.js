import React, { useState } from 'react'

function Login()
{

var loginName;
var loginPassword;
var fName;
var lName;
var login;
var password;
var email;
const [message,setMessage] = useState('');


const doLogin = async event =>
{
    const app_name = 'http://cardinalcofffee.co'
    
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production')
        {
            console.log("ONElogin")
            return 'https://' + app_name + '.herokuapp.com/' + route;
        }
        else
        {
            console.log("TWOlogin")
            console.log(route)
            return 'http://localhost:5000/' + route;
        }
    }

    event.preventDefault();
    var obj = {login:loginName.value,password:loginPassword.value};
    var js = JSON.stringify(obj);

    try
    {
        console.log("sEEEand!\n")
        const response = await fetch(buildPath('api/login'), {
            method: 'POST',
            body: js,
            headers: { 'Content-Type': 'application/json' }
          });
        console.log("wich")

        var res = JSON.parse(await response.text());
        if( res.id <= 0 )
        {
            setMessage('User/Password combination incorrect');
        }
        else
        {
            var user =
            {firstName:res.firstName,lastName:res.lastName,email:res.email}
            console.log(user)
            localStorage.setItem('user_data', JSON.stringify(user));
            setMessage('');
            window.location.href = '/verification';
        }
    }
    catch(e)
    {
        alert(e.toString());
        return;
    }
};

const signup = async event =>
    {
        const app_name = 'http://cardinalcofffee.co'
    
        function buildPath(route)
        {
            if (process.env.NODE_ENV === 'production')
            {
                console.log("ONElogin")
                return 'https://' + app_name + '.herokuapp.com/' + route;
            }
            else
            {
                console.log("TWOlogin")
                console.log(route)
                return 'http://localhost:5000/' + route;
            }
        }

        event.preventDefault();
        var obj = {login:login.value,password:password.value,FirstName:fName.value,LastName:lName.value,email:email.value};
        var js = JSON.stringify(obj);
        try
        {
            const response = await fetch(buildPath('api/signup'), {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' }
              });

            var txt = await response.text();
            var res = JSON.parse(txt);
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                setMessage('Account has been added');
            }
        }

        catch(e)
        {
            //console.log(e.toString());
        }
    };


return(
<div id="loginDiv">
<form onSubmit={doLogin}>
<span id="inner-title">PLEASE LOG IN!</span><br />

<input type="text" id="loginName" placeholder="Username"
ref={(c) => loginName = c} /><br />
<input type="password" id="loginPassword" placeholder="Password"
ref={(c) => loginPassword = c} /><br />

<input type="submit" id="loginButton" class="buttons" value = "Do It"
onClick={doLogin} />
<br />
<input type="text" id="fName" placeholder="First Name"
ref={(c) => fName = c} /><br />
<input type="text" id="Last Name" placeholder="Last Name"
ref={(c) => lName = c} /><br />
<input type="text" id="Email" placeholder="Email"
ref={(c) => email = c} /><br />
<input type="text" id="loginName" placeholder="Username"
ref={(c) => login = c} /><br />
<input type="text" id="loginPassword" placeholder="Password"
ref={(c) => password = c} /><br />

<input type="submit" id="loginButton" class="buttons" value = "Do It"
onClick={signup} />
</form>
<span id="loginResult">{message}</span>
</div>
);


};
export default Login;