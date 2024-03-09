import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from './../../utils/Axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/rainbow_delight.svg";

const Login = () => {
  const navigate = useNavigate();
  // Initialize state for email and password
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(`Email: ${formData.email}, Password: ${formData.password}`);
    Axios.post('api/login', formData,{
      withCredentials: true}
    )
    .then(function (response) {
      console.log(response);
      navigate("/")
    })
    .catch(function (error) {
      console.log(error);
    });
    // Here you can also implement login logic
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

    <div className="relative mx-auto bg-[#FFEBE2] w-full max-w-md px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mb-20 mt-20">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-pink-900">Log In</h1>
          <p className="mt-2 font-semibold text-pink-900">Log In below to access your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
            <label htmlFor="email" className="block font-medium text-gray-700 focus:text-pink-900">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="peer mt-1 w-full bg-[#FFEBE2] border-b-2 border-[#F6D6D6] px-0 py-1 placeholder:text-transparent focus:border-pink-900 focus:outline-none"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
              />
            
            </div>
            <div className="relative mt-6">
            <label htmlFor="password" className="block font-medium text-gray-700 focus:text-pink-900">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="peer mt-1 w-full bg-[#FFEBE2] border-b-2 border-[#F6D6D6] px-0 py-1 placeholder:text-transparent focus:border-pink-900 focus:outline-none"
                onChange={handleChange}
                value={formData.password}
              />
             
            </div>
            <div>
              <Link to='/profile' className="float-right text-pink-900 hover:underline focus:text-rose-800 focus:outline-none mt-5 mb-5 font-semibold">Forgot Password?</Link>
            </div>
            <div className="my-6">
              <button type="submit" className="w-full rounded-md bg-pink-900 px-3 py-4 text-white hover:bg-rose-800 focus:outline-none">Log In</button>
            </div>
            <p className="text-center text-sm text-pink-900">Don't have an account yet?&nbsp;
              <Link to="/signup" className="font-extrabold text-pink-900 hover:underline focus:text-rose-800 focus:outline-none">Sign up</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
