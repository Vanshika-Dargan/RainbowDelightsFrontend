import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Axios from '../../../utils/Axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/rainbow_delight.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    userType: 'client'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(`userName: ${formData.userName}, Email: ${formData.email}, Password: ${formData.password}, userType: ${formData.userType}`);
    Axios.post('api/signup', formData)
    .then(function (response) {
      toast("Account has been created!", { position: "top-center" });
      console.log(response);
      navigate('/login');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
    <nav className="bg-color shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4 ">
                    <Link to="/" className="flex items-center ">
                        <div className="mx-10">
                        <img src={logo} alt="" className="cursor-pointer logo " />
                        </div>
                        {/* <span className="text-5xl cursor-pointer logo-font font-color">Rainbow Delights</span> */}
                    </Link>
                </div>
            </div>
    </nav>

    <div className="relative mx-auto w-full max-w-md bg-[#FFEBE2] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mb-20 mt-20">
      <ToastContainer />
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-pink-900">Sign Up</h1>
        <p className="mt-2 font-semibold text-pink-900">Create your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label htmlFor="userName" className="block font-medium text-gray-700 focus:text-pink-900">Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            required
            className="mt-1 w-full bg-[#FFEBE2] border-b-2 border-[#F6D6D6] px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.userName}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="name" className="block font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 w-full bg-[#FFEBE2] border-b-2 border-[#F6D6D6] px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 w-full bg-[#FFEBE2] border-b-2 border-[#F6D6D6] px-0 py-1 focus:border-pink-900 focus:outline-none"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="w-full rounded-md bg-pink-900 px-4 py-4 text-white hover:bg-pink-700 focus:outline-none"
          >
            Create Account
          </button>
        </div>
        <p className="text-center text-sm text-pink-900">Already have an Account?&nbsp;
          <Link to="/login"
                className="font-extrabold text-pink-900 hover:underline focus:text-rose-800 focus:outline-none">Log In
          </Link>
          .
        </p>
      </form>
    </div>
    </>
  );
};

export default Signup;
