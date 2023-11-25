import React, { useState } from 'react'

const SignIn = () => {

var loginName;
var loginPassword;
const [message,setMessage] = useState('');

const doSignUp = () =>
{
    window.alert("sign up");
    window.location.href = '/signin';
    return;
};


const doLogin = async event =>
{
    const app_name = 'www.cardinalcoffee.co/'
    
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production')
        {
            console.log("ONElogin")
            return 'https://' + app_name  + route;
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
            window.alert('User/Password combination incorrect');
        }
        else
        {
            var user =
            {firstName:res.firstName,lastName:res.lastName,email:res.email}
            console.log(user)
            localStorage.setItem('user_data', JSON.stringify(user));
            setMessage('');
            window.location.href = '/products';
        }
    }
    catch(e)
    {
        alert(e.toString());
        return;
    }
};
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded">
                <h2 className="text-lg font-semibold text-coffee-800 mb-4">Welcome Back!</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="email">
                            Login
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email"ref={(c) => loginName = c}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" ref={(c) => loginPassword = c}/>
                        <p className="text-coffee-600 text-xs italic">Forgot your password?</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-coffee-500 hover:bg-coffee-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={doLogin}>
                            Sign In
                        </button>
                        <button className="bg-coffee-500 hover:bg-coffee-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onclick={doSignUp}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;