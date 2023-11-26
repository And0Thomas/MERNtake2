import React, { useState } from 'react';

const Notification = ({ message }) => {
    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow">
            {message}
        </div>
    );
};

const ProductCard = ({ product, isPopular, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isPressed, setIsPressed] = useState(false);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCart = () => {
        setIsPressed(true);
        onAddToCart(product.name);
        setTimeout(() => setIsPressed(false), 200); // Reset button state after 200ms
    };

    return (
        <div className="relative max-w-sm rounded-lg overflow-hidden shadow-neumorphic p-6 m-4 bg-neumorphic-background">
            {isPopular && (
                <div className="absolute top-0 right-0 bg-brown-600 text-cream py-1 px-3 text-sm font-bold rounded-bl">
                    Most Popular
                </div>
            )}
            <img className="w-full h-48 object-cover mb-4" src={product.imageUrl} alt={product.name} />
            <div className="text-center">
                <div className="font-bold text-xl mb-2 text-neumorphic-text">{product.name}</div>
                <p className="text-gray-700 text-base">
                    {product.description}
                </p>
                <div className="text-lg text-neumorphic-text font-bold my-2">
                    ${product.price}
                </div>
                <div className="mt-4">
                    <label htmlFor={`quantity-${product.id}`} className="block text-neumorphic-text text-sm font-bold mb-2">Quantity:</label>
                    <input type="number" id={`quantity-${product.id}`} name="quantity" min="1" value={quantity} onChange={handleQuantityChange} className="neumorphic-input"/>
                </div>
                <button 
                    className={`neumorphic-button mt-4 ${isPressed ? 'bg-gray-400' : 'bg-gray-200'}`}
                    onMouseDown={handleAddToCart}
                    onMouseUp={() => setIsPressed(false)}
                    onMouseLeave={() => setIsPressed(false)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    const [notification, setNotification] = useState('');

    const handleAddToCart = (productName) => {
        setNotification(`${productName} has been added to your cart`);
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    const products = [
        { id: 1, name: 'UCF - Specialty Roast', description: "A distinctive blend embodying UCF's vibrant spirit, perfect for the passionate supporter.", imageUrl: 'src/assets/ucf.png', price: 34.99 },
        { id: 2, name: 'Stability - Light Roast', description: "A serene, soft, and balanced light roast for a smooth start to your day.", imageUrl: 'src/assets/stability.png', price: 32.99 },
        { id: 3, name: 'Determination - Medium Roast', description: "Bold yet smooth, this roast is for the focused and resolute.", imageUrl: 'src/assets/determination.png', price: 32.99 },
        { id: 4, name: 'Confidence - Dark Roast', description: "A rich, robust dark roast for those who savor intensity and boldness.", imageUrl: 'src/assets/confidence.png', price: 32.99 }
    ];

    return (
        <div className="min-h-screen bg-neumorphic-background">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center my-8 text-neumorphic-text">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} isPopular={index === 0} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
            {notification && <Notification message={notification} />}
        </div>
    );
};

export default ProductsPage;