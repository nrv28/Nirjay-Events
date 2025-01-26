import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signuproute`, {
        email,
        password,
        phone,
        address,
        name,
      });
  
      if (response.status === 200) {
        toast.success('Account Created Successfully');
        navigate('/login');
      } else {
        toast.error('Failed to create account');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-6">
      <div className="text-center mb-8 mt-16">
        <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white">Welcome to Nrv Events</h1>
        <p className="text-lg sm:text-xl font-Helvetica text-white">"Where moments turn into memories."</p>
      </div>

      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="address" className="sr-only">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone"
            />
          </div>
        
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;


