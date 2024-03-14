import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { PiCakeDuotone } from "react-icons/pi";
import { IoIosColorWand } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from "../../assets/rainbow_delight.svg"
import './Navbar.css';
import ModalPopup from '..//ModalPopup/ModalPopup';
// import ProductsData from "../../ProductsData";
import Axios from "../../utils/Axios" 
import { toast } from 'react-toastify';

export default function Navbar({addToCart, countCart,changeCount}) {
    // const [countCart, setCartItemCount] = useState(0 );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For ModalPopup
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (searchTerm.trim()) {
            Axios.get("product/productsSearch/"+searchTerm.trim())
                .then((res)=>{
                    setFilteredSuggestions(res.data);
                })
                .catch((err)=>console.log(err))
        } else {
            setFilteredSuggestions([]);
        }
    }, [searchTerm]);    

    const selectProduct = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

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
        <>
            <nav className="bg-color shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-3 ">
                        <Link to="/" className="flex items-center ">
                            <div className="mx-10">
                            <img src={logo} alt="" className="cursor-pointer logo " />
                            </div>
                            {/* <span className="text-5xl cursor-pointer logo-font font-color">Rainbow Delights</span> */}
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}    
                            />
                            {searchTerm && filteredSuggestions.length > 0 && (
                                    <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                    {filteredSuggestions.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => selectProduct(product)}
                                        >
                                            <img src={product.img} alt={product.name} className="h-10 w-10 object-cover mr-2" />
                                            <span>{product.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}        
                        </div>

                        <div className="flex items-center space-x-4 relative">
                        <Link to="/customize" className="flex items-center font-color relative">
                            <div className="relative">
                                <PiCakeDuotone className="h-6 w-6" />
                                <IoIosColorWand className="absolute top-0 right--1 h-4 w-4 transform translate-x-1/2 -translate-y-2/3" />
                            </div>
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <div onClick={toggleDropdown} className="flex items-center font-color hover:cursor-pointer">
                                <FaUserCircle className="h-6 w-6" />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Login / Sign Up</Link>
                                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Order Summary</Link>
                                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Admin Dashboard</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/cart" className="flex items-center font-color relative">
                            <FaShoppingCart className="h-6 w-6" />
                            {countCart > 0 && (
                                <span className="flex absolute -top-2 -right-2 justify-center items-center bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 font-mono">
                                    {countCart}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        {selectedProduct && (
            <ModalPopup isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)
                setSelectedProduct(null)}} product={selectedProduct} addToCart={addToCart} changeCount={changeCount}/>
        )}
        </>
    );
}