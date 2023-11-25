import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentErrors = {};

        if (!validateEmail(formData.email)) {
            currentErrors.email = 'Invalid email address';
        }

        if (formData.password !== formData.confirmPassword) {
            currentErrors.password = 'Passwords do not match';
        }

        setErrors(currentErrors);

        if (Object.keys(currentErrors).length === 0) {
            // Submit form logic here
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded">
                <h2 className="text-lg font-semibold text-coffee-800 mb-4">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" name="name" type="text" placeholder="Your name" onChange={handleChange}/>
                    </div>
                    
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" name="email" type="email" placeholder="Your email" onChange={handleChange}/>
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    
                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" name="password" type="password" placeholder="Password" onChange={handleChange}/>
                    </div>
                    
                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label className="block text-coffee-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange}/>
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>

                    {/* Sign Up Button */}
                    <div className="flex items-center justify-center">
                        <button className="bg-coffee-500 hover:bg-coffee-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;