import React from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

export default function Header() {
    // State for the cart item count
    const [cartItemCount, setCartItemCount] = React.useState(15);

    return (
        <nav className="bg-color shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Website Logo */}
                    <a href="#" className="flex items-center">
                        <span className="text-5xl cursor-pointer logo-font font-color">Rainbow Delights</span>
                    </a>

                    {/* Search Input */}
                    <div className="flex justify-center items-center relative w-full max-w-xs font-color">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-color" />
                        </div>
                        <input
                            className="border-2 bg-color h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none w-full border-color placeholder-pink-900"
                            type="search"
                            name="search"
                            placeholder="Find your favorite delight..."
                        />
                    </div>

                    {/* Cart and User Icons */}
                    <div className="flex items-center space-x-4 relative">
                        <a href="#" className="flex items-center font-color">
                            <FaUserCircle className="h-6 w-6" />
                        </a>
                        <a href="#" className="flex items-center font-color relative">
                            <FaShoppingCart className="h-6 w-6" />
                            {/* Conditionally render this element */}
                            {cartItemCount > 0 && (
                                <span className="flex absolute -top-2 -right-2 justify-center items-center bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 font-mono">
                                    {cartItemCount}
                                </span>
                            )}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
