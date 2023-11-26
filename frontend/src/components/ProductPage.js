import React, { useState } from 'react';
import Ucf from '../assets/ucf.svg';
import Stability from '../assets/stability.svg';
import Determination from '../assets/determination.svg';
import Confidence from '../assets/confidence.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.svg';
import Bag from '../assets/bag.svg';

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
        const Pr1 = localStorage.getItem("P1");
        const Pr2 = localStorage.getItem("P2");
        const Pr3 = localStorage.getItem("P3");
        const Pr4 = localStorage.getItem("P4");

        if (product.id === 1) {
            localStorage.setItem("P1", Number(quantity) + Number(Pr1));
        } else if (product.id === 2) {
            localStorage.setItem("P2", Number(quantity) + Number(Pr2));
        } else if (product.id === 3) {
            localStorage.setItem("P3", Number(quantity) + Number(Pr3));
        } else if (product.id === 4) {
            localStorage.setItem("P4", Number(quantity) + Number(Pr4));
        }

        const Prod1 = localStorage.getItem("P1");
        const Prod2 = localStorage.getItem("P2");
        const Prod3 = localStorage.getItem("P3");
        const Prod4 = localStorage.getItem("P4");

        console.log("New Test");
        console.log(product.id);
        console.log(Prod1);
        console.log(Prod2);
        console.log(Prod3);
        console.log(Prod4);
        onAddToCart(product.name);
        setTimeout(() => setIsPressed(false), 200); // Reset button state after 200ms
    };

    return (
        <div className="relative max-w-sm rounded-lg overflow-hidden shadow-neumorphic p-6 m-4 bg-neumorphic-background z-0">
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
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

    const cart = (message) => {
    window.location.href = '/Cart';
    };
    const productz = (message) => {
    //window.alert(message);
    window.location.href = '/products';
    };

    const contacts = (message) => {
    //window.alert(message);
    window.location.href = '/contactP';
    };

    const signIn = (message) => {
    //window.alert(message);
    window.location.href = '/signin';
    };

    const logOut = (message) => {
    //window.alert(message);
    localStorage.clear();
    window.location.href = '/';
    };

    const home = (message) => {
    //window.alert(message);
    window.location.href = '/p';
    };

    const handleAddToCart = (productName) => {
        setNotification(`${productName} has been added to your cart`);
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    const products = [
        { id: 1, name: 'UCF - Specialty Roast', description: "A distinctive blend embodying UCF's vibrant spirit, perfect for the passionate supporter.", imageUrl: Ucf, price: 34.99 },
        { id: 2, name: 'Stability - Light Roast', description: "A serene, soft, and balanced light roast for a smooth start to your day.", imageUrl: Stability, price: 32.99 },
        { id: 3, name: 'Determination - Medium Roast', description: "Bold yet smooth, this roast is for the focused and resolute.", imageUrl: Determination, price: 32.99 },
        { id: 4, name: 'Confidence - Dark Roast', description: "A rich, robust dark roast for those who savor intensity and boldness.", imageUrl: Confidence, price: 32.99 }
    ];

    return (
        <div>
         <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-tanker tracking-wider z-10'>
        <img src={Logo} alt='Logo' className='h-16 cursor-pointer' onClick={() => home('Home button clicked')}  />
        <h1 className='w-full text-3xl font-bold text-[#f0f0f0] hidden sm:flex' onClick={() => home('Home button clicked')}>
          Cardinal Coffee
        </h1>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>
            <button className='focus:outline-none' onClick={() => home('Home button clicked')}>Home</button>
          </li>
          <li className='p-4 cursor-pointer'>
            <button className='focus:outline-none' onClick={() => productz('Products button clicked')}>Products</button>
          </li>
          <li className='p-4 cursor-pointer'>
            <button className='focus:outline-none' onClick={() => contacts('Contact button clicked')}>Contact</button>
          </li>
          <li className='whitespace-nowrap p-4 cursor-pointer'>
            <button className='focus:outline-none' onClick={() => logOut('Sign-Up button clicked')}>Log-Out</button>
          </li>
        </ul>
        <img src={Bag} alt='/' className='hidden md:flex p-3 h-11 cursor-pointer' onClick={() => cart('Cart button clicked')}/>
        <div onClick={handleNav} className='block md:hidden cursor-pointer p-4'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-white-900 bg-[#171717] ease-in-out duration-500 md:hidden z-20'
              : 'fixed left-[-100%] z-20'
          }
        >
          <h1 className='w-full text-3xl font-bold text-[#f0f0f0] m-4' onClick={() => home('Home button clicked')}>
            Cardinal Coffee
          </h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b cursor-pointer'>
              <button className='focus:outline-none' onClick={() => home('Home button clicked')}>Home</button>
            </li>
            <li className='p-4 border-b cursor-pointer'>
              <button className='focus:outline-none' onClick={() => productz('Products button clicked')}>Products</button>
            </li>
            <li className='p-4 border-b cursor-pointer'>
              <button className='focus:outline-none' onClick={() => logOut('Sign-In button clicked')}>Log-Out</button>
            </li>
            <li className='p-4 border-b cursor-pointer'>
              <button className='focus:outline-none' onClick={() => cart('Cart button clicked')}>Cart</button>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="min-h-screen bg-neumorphic-background z-0">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center my-8 text-neumorphic-text">Cardinal Coffee's Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} isPopular={index === 0} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
            {notification && <Notification message={notification} />}
        </div>
      </div>
    );
};

export default ProductsPage;