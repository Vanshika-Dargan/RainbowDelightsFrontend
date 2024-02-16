import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="bg-color shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <Link to="/" className="flex items-center">
                        <span className="text-5xl cursor-pointer logo-font font-color">Rainbow Delights</span>
                    </Link>

                    <div className="flex justify-center items-center relative w-full max-w-xs">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-color font-color" />
                        </div>
                        <input
                            className="border-2 bg-color h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none w-full border-color placeholder-pink-900"
                            type="search"
                            name="search"
                            placeholder="Find your favorite delight..."
                        />
                    </div>

                    <div className="flex items-center space-x-4 relative">
                        <div className="relative" ref={dropdownRef}>
                            <div onClick={toggleDropdown} className="flex items-center font-color hover:cursor-pointer">
                                <FaUserCircle className="h-6 w-6" />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>User Profile</Link>
                                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Order Summary</Link>
                                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Admin Dashboard</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/cart" className="flex items-center font-color relative">
                            <FaShoppingCart className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="flex absolute -top-2 -right-2 justify-center items-center bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 font-mono">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}