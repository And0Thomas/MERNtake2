import React, { useState } from 'react';
import Ucf from '../assets/ucf.svg';
import Stability from '../assets/stability.svg';
import Determination from '../assets/determination.svg';
import Confidence from '../assets/confidence.svg';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    const handleChange = (e) => {
        updateQuantity(item.id, e.target.value);
    };
    if(item.quantity === 0)
    {
        return null;
    }

    return (
        <div className="flex items-center justify-between p-4 border-b border-mocha">
            <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover mr-4" />
                <div>
                    <div className="font-bold text-mocha">{item.name}</div>
                    <div className="text-sm text-latte-light">{item.description}</div>
                </div>
            </div>
            <div className="flex items-center">
                <input 
                    type="number" 
                    className="mx-2 border rounded py-1 px-2 text-center w-16 text-mocha" 
                    value={item.quantity} 
                    onChange={handleChange} 
                    min="1" 
                />
                <span className="font-bold mx-2 text-mocha">${item.price.toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                    Remove
                </button>
            </div>
        </div>
    );
};

const CartPage = () => {
    const Pr1 = localStorage.getItem("P1");
    const Pr2 = localStorage.getItem("P2");
    const Pr3 = localStorage.getItem("P3");
    const Pr4 = localStorage.getItem("P4");
    const [cartItems, setCartItems] = useState([
        // Sample cart items with coffee theme
        { id: 1, name: 'UCF - Specialty Roast', description: "A distinctive blend embodying UCF's vibrant spirit, perfect for the passionate supporter.", imageUrl: Ucf, price: 34.99, quantity: Number(Pr1) },
        { id: 2, name: 'Stability - Light Roast', description: "A serene, soft, and balanced light roast for a smooth start to your day.", imageUrl: Stability, price: 32.99, quantity: Number(Pr2) },
        { id: 3, name: 'Determination - Medium Roast', description: "Bold yet smooth, this roast is for the focused and resolute.", imageUrl: Determination, price: 32.99, quantity: Number(Pr3) },
        { id: 4, name: 'Confidence - Dark Roast', description: "A rich, robust dark roast for those who savor intensity and boldness.", imageUrl: Confidence, price: 32.99, quantity: Number(Pr4) },
        // Add more items as needed
    ]);

    const updateQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item => {
            if (item.id === itemId) {
                if (itemId === 1)
                {
                    localStorage.setItem("P1", Number(quantity));
                }
                if (itemId === 2)
                {
                    localStorage.setItem("P2", Number(quantity));
                }
                if (itemId=== 3)
                {
                    localStorage.setItem("P3", Number(quantity));
                }
                if (itemId === 4)
                {
                    localStorage.setItem("P4", Number(quantity));
                }
                return { ...item, quantity: parseInt(quantity, 10) };
            }
            return item;
        }));
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
        if (itemId === 1)
        {
            localStorage.setItem("P1", 0);
        }
        if (itemId === 2)
        {
            localStorage.setItem("P2", 0);
        }
        if (itemId === 3)
        {
            localStorage.setItem("P3", 0);
        }
        if (itemId === 4)
        {
            localStorage.setItem("P4", 0);
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    const handleProceedToCheckout = () => {
        var total = totalPrice.toFixed(2);
        localStorage.setItem("Total", total);
        window.location.href = '/Checkout';
    };

    return (
        <div className="container mx-auto p-6 bg-cappuccino-cream">
            <h1 className="text-2xl font-bold mb-4 text-mocha">Shopping Cart</h1>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
                ))}
            </div>
            <div className="text-right font-bold mt-4 text-mocha">
                Total: ${totalPrice.toFixed(2)}
            </div>
            <div className="text-right mt-6">
                <button className="bg-mocha hover:bg-espresso-dark text-cappuccino-cream font-bold py-2 px-4 rounded" onClick={handleProceedToCheckout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;