import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [stars, setStars] = useState(0);
  const navigate = useNavigate(); 
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const partnerId = queryParams.get('partnerId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !content || stars === 0) {
        toast.error('Please fill in all fields');
        return;
      }

      await axios.post('/submitReview', {
        partnerid: partnerId,
        name,
        content,
        stars
      });

      toast.success('Review submitted successfully');
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review');
    }
  };

  const handleClose = () => {
    navigate('/userprofile'); 
  };

  return (
    <>
    <div className='flex justify-center items-center min-h-screen ml-10 mr-10'>
      <div className='bg-white w-full max-w-lg p-6 rounded-lg shadow-lg border-4 border-black'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-black text-xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-bold mb-2 text-black text-xl">
              Review Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write your review here"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="stars" className="block text-sm font-bold mb-2 text-black text-xl">
              Stars Rating
            </label>
            <select
              id="stars"
              value={stars}
              onChange={(e) => setStars(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={0}>Select Stars</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Submit Review
            </button>
            <button
              type="button"
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={handleClose} 
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ReviewForm;
