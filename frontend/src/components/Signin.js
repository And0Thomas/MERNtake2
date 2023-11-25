import React from 'react';

const SignIn = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded">
                <h2 className="text-lg font-semibold text-coffee-800 mb-4">Welcome Back!</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
                        <p className="text-coffee-600 text-xs italic">Forgot your password?</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-coffee-500 hover:bg-coffee-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <button className="bg-coffee-500 hover:bg-coffee-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;