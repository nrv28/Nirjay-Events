import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="w-full px-4 py-8 bg-opacity-50">
      <div className="max-w-7xl mx-auto pt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl underline text-white decoration-pink-500 font-bold text-center mb-8">
          GET IN TOUCH
        </h2>
        
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-6/12 lg:w-7/12 p-4">
            <form className="bg-white p-8 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Us A Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="mail@example.com"
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-3 border rounded mb-4"
                rows="5"
              />
              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded font-semibold"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="w-full md:w-5/12 lg:w-4/12 p-4">
            <div className="bg-gray-800 text-white p-8 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="mb-4">
                <h1 className='text-yellow-600 text-xl font-bold'>Nirjay Events</h1><br />
                <FaMapMarkerAlt className="inline-block mr-2" />
                10th Cross 1st Stage Pillanna Garden, St Thomas Town Post, Patna-560084
              </p>
              <ul className="mb-4">
                <li className="mb-2">
                  <FaPhone className="inline-block mr-2" />
                  +91 99000 88106
                </li>
                <li className="mb-2">
                  <FaPhone className="inline-block mr-2" />
                  +91 98450 44472
                </li>
                <li className="mb-2">
                  <FaPhone className="inline-block mr-2" />
                  +91 98451 67171
                </li>
                <li className="mb-2">
                  <FaPhone className="inline-block mr-2" />
                  +91 99000 88105
                </li>
              </ul>
              <br />
              <p className="mb-2">
                <FaEnvelope className="inline-block mr-2" />
                info@nirjayevents.com
              </p>
              <p className="mb-4">
                <FaGlobe className="inline-block mr-2" />
                www.nirjayevents.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-64 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0818719457598!2d84.84872167484846!3d25.53564961790994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="IIT Patna"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
