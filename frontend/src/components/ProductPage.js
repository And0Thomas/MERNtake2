import React, { useState } from 'react';

const ProductCard = ({ product, isPopular}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCartClick = () => {
        const Pr1 = localStorage.getItem("P1");
        const Pr2 = localStorage.getItem("P2");
        const Pr3 = localStorage.getItem("P3");
        const Pr4 = localStorage.getItem("P4");

        if (product.Id === 1) {
            Pr1 = Pr1 + quantity;
            localStorage.setItem("P1", quantity);
        } else if (product.Id === 2) {
            Pr2= Pr2 + quantity;
            localStorage.setItem("P2", quantity);
        } else if (product.Id === 3) {
            Pr3 = Pr3 + quantity;
            localStorage.setItem("P3", quantity);
        } else if (product.Id === 4) {
            Pr4 = Pr3 + quantity;
            localStorage.setItem("P4", quantity);
        }

        const Prod1 = localStorage.getItem("P1");
        const Prod2 = localStorage.getItem("P2");
        const Prod3 = localStorage.getItem("P3");
        const Prod4 = localStorage.getItem("P4");

        console.log(Prod1);
        console.log(Prod2);
        console.log(Prod3);
        console.log(Prod4);
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
                <button className="neumorphic-button mt-4" onClick={handleAddToCartClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description for product 1', imageUrl: 'https://via.placeholder.com/150', price: 24.99 },
        { id: 2, name: 'Product 2', description: 'Description for product 2', imageUrl: 'https://via.placeholder.com/150', price: 33.99 },
        { id: 3, name: 'Product 3', description: 'Description for product 3', imageUrl: 'https://via.placeholder.com/150', price: 19.99 },
        { id: 4, name: 'Product 4', description: 'Description for product 4', imageUrl: 'https://via.placeholder.com/150', price: 24.99 }
    ];

    return (
        <div className="container mx-auto px-4 bg-neumorphic-background">
            <h1 className="text-3xl font-bold text-center my-8 text-neumorphic-text">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} isPopular={index === 0} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;