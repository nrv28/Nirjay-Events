import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPartner, setIsPartner] = useState(false);
  const navigate = useNavigate();

  // we can params also instead of useLocation
  const location = useLocation();
  const redirectTo = location.state?.redirectTo;
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const route = isPartner ? `${process.env.REACT_APP_BACKEND_URL}/partnerlogin` :  `${process.env.REACT_APP_BACKEND_URL}/loginroute` ;
      const response = await axios.post(route, {
        email,
        password,
      });
      toast.success(response.data.message);

     if(redirectTo==="profile" || !redirectTo){
      if(!isPartner){
        navigate('/userprofile');
      }
      else{
        navigate('/partnerprofile');
      }
     }  

     else if(redirectTo==='individualdisplay'){
      const id = location.state?.id;
      navigate('/individualdisplay',{ state: { organizerId: id } });
     }
  
    } catch (error) {
      toast.error(error.response.data.message);
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
          <div className="flex items-center justify-between">
            <label htmlFor="isPartner" className="flex items-center">
              <input
                id="isPartner"
                name="isPartner"
                type="checkbox"
                checked={isPartner}
                onChange={() => setIsPartner(!isPartner)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Sign in as Partner</span>
            </label>
          </div>
          <div className="text-sm text-center mt-4">
            <Link to="/forgotpassword" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
