import React, { useState } from 'react';

const ConfirmationOverlay = ({ confirmationNumber, onReturnHome }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
                <p>Your confirmation number is: <strong>#{confirmationNumber}</strong></p>
                <button onClick={onReturnHome} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Return Home</button>
            </div>
        </div>
    );
};

const CheckoutPage = ({ cartTotal }) => {
    const [checkoutData, setCheckoutData] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationNumber, setConfirmationNumber] = useState('');

    const handleChange = (e) => {
        let { name, value } = e.target;

        // Formatting for credit card number, expiration date, and cvv
        if (name === 'cardNumber') {
            value = value.replace(/\D/g, '').substring(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        } else if (name === 'cvv') {
            value = value.replace(/\D/g, '').substring(0, 4);
        } else if (name === 'expirationDate') {
            value = value.replace(/\D/g, '').substring(0, 4);
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
        }

        setCheckoutData({ ...checkoutData, [name]: value });
    };

    const isEmailValid = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isCardValid = (number) => {
        return /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmailValid(checkoutData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!isCardValid(checkoutData.cardNumber)) {
            alert('Please enter a valid 16 digit credit card number.');
            return;
        }
        
        setConfirmationNumber(Math.floor(Math.random() * 9999) + 1);
        setShowConfirmation(true);
    };

    const handleReturnHome = () => {
        window.location.href = '/p'; // Reloads the current page
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-10 text-center text-white">Checkout</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
            <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={checkoutData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={checkoutData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <input type="text" id="address" name="address" value={checkoutData.address} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={checkoutData.cardNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="1234 5678 9012 3456" required />
                </div>

                <div className="flex space-x-4 mb-6">
                    <div className="flex-1">
                        <label htmlFor="expirationDate" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date</label>
                        <input type="text" id="expirationDate" name="expirationDate" value={checkoutData.expirationDate} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="MM/YY" required />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                        <input type="text" id="cvv" name="cvv" value={checkoutData.cvv} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                </div>

                <div className="text-center font-bold mb-6 text-xl">
                    Total: ${cartTotal}
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-black text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700 transition-colors duration-200">Complete Purchase</button>
                </div>
            </form>
            {showConfirmation && <ConfirmationOverlay confirmationNumber={confirmationNumber} onReturnHome={handleReturnHome} />}
        </div>
    );
};

const App = () => {
    const cartTotal = localStorage.getItem("Total");

    return <CheckoutPage cartTotal={cartTotal} />;
};

export default App;