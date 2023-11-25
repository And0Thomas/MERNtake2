import React, { useState } from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    const handleChange = (e) => {
        updateQuantity(item.id, e.target.value);
    };

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
    const [cartItems, setCartItems] = useState([
        // Sample cart items with coffee theme
        { id: 1, name: 'Coffee Beans - Dark Roast', description: 'Rich and smooth dark roast beans', imageUrl: 'https://via.placeholder.com/150', price: 19.99, quantity: 2 },
        { id: 2, name: 'Coffee Beans - Light Roast', description: 'Aromatic and light, perfect for mornings', imageUrl: 'https://via.placeholder.com/150', price: 24.99, quantity: 1 },
        // Add more items as needed
    ]);

    const updateQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: parseInt(quantity, 10) };
            }
            return item;
        }));
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
                <button className="bg-mocha hover:bg-espresso-dark text-cappuccino-cream font-bold py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;