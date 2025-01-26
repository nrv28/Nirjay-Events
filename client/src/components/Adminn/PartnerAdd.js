import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cityname: '',
    email: '',
    phone: '',
    photo: null,
    password: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post(`${process.env.BACKEND_URL}/submit`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Data uploaded successfully");
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error("Error uploading data");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col mt-32 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-0">
       <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-8 md:w-1/2 transition-transform duration-700 ease-in-out transform -translate-x-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-5xl font-bold text-orange-300">
            Welcome To Nirjay Events<br/>
            <br/>
              Delighting You with Unforgettable Experiences
           </h1>
           <p className="text-lg text-gray-300 mt-4">
            At Nirjay Events, we specialize in creating magical moments for every occasion. Whether it's a wedding, corporate gala, or private celebration, our passion is to turn your dreams into reality. With attention to detail and a touch of elegance, we ensure that every event is unique and unforgettable. Welcome aboard, and let's create memories together!
          </p>
        </div>

       
        <div className="w-full md:w-1/2 max-w-lg bg-sky-300 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center mb-4">Upload Data</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <label htmlFor="cityname" className="block text-sm font-medium text-gray-700">Cityname:</label>
            <input
              type="text"
              id="cityname"
              name="cityname"
              value={formData.cityname}
              onChange={handleChange}
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 mb-3 w-full"
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 mb-3 p-2 w-full border border-gray-300 rounded-md"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
          </div>
      </div>
    </div>
  );
}

export default UploadForm;
