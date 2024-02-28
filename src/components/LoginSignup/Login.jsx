import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
    // Here you can also implement login logic
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mb-20 mt-20">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-pink-900">Log In</h1>
          <p className="mt-2 text-pink-900">Log In below to access your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-pink-900 focus:outline-none"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
              />
              <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-900 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-pink-900">Email Address</label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-pink-900 focus:outline-none"
                onChange={handleChange}
                value={formData.password}
              />
              <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-900 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-pink-900">Password</label>
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
  );
}

export default Login;
