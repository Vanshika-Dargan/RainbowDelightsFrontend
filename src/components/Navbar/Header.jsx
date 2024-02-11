import React from 'react';
import { FaSearch } from 'react-icons/fa';
import UserIcon from '../../assets/user.png';
import CartIcon from '../../assets/Cart.png';
import './Header.css';

export default function Header() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Website Logo */}
                    <a href="#" className="flex items-center">
                        <span className="text-gray-500 text-5xl cursor-pointer logo-font">Rainbow Delights</span>
                    </a>

                    {/* Search Input */}
                    <div className="flex justify-center items-center relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-500" />
                        </div>
                        <input
                            className="border-2 border-gray-300 bg-white h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            type="search"
                            name="search"
                            placeholder="Find your favorite delight..."
                        />
                    </div>

                    {/* Cart and User Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="flex items-center">
                            <img src={UserIcon} alt="User" className="h-6 w-6" />
                        </a>
                        <a href="#" className="flex items-center">
                            <img src={CartIcon} alt="Cart" className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
