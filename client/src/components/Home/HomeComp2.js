
import React, { useEffect, useRef } from 'react';
import img1 from '../../assets/images/img1.avif';
import img2 from '../../assets/images/img2.avif';
import img3 from '../../assets/images/img3.jpg';

const HomeComp2 = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const elements = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transform-none');
        } else {
          entry.target.classList.remove('transform-none');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (elements) {
        elements.forEach(element => {
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center p-4">
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg text-center max-w-4xl w-full transition-transform duration-1000 ease-in-out transform translate-y-10">
        <h1 className="text-black underline decoration-pink-500 font-semibold mb-10 text-2xl sm:text-4xl md:text-6xl lg:text-6xl">WHAT WE DO</h1>
        <p className="mb-4 italic text-sm sm:text-base md:text-lg lg:text-lg">
          Nirjay Tent House is a trusted 36-year old Tent House Dealer and Tent House Supplier in India.
          Nirjay Tent House supplies chairs, canopies, aluminium tents, shamianas, shamiyana tents, AC tents,
          German tents, Aluminium Hanger tents, pagoda tents, exhibition stalls, Octanorm exhibition stalls,
          super structures, mega hangers, wooden stages, pandals, and waterproof sheds for functions,
          exhibitions, events, conventions, and convention centers in and around Bangalore, Karnataka.
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Tent House Supplier services provided by Nirjay Tent House:</h2>
        <div className="grid grid-cols-1 gap-4">
          <div ref={el => elementsRef.current[0] = el} className="bg-white p-2 rounded flex flex-col md:flex-row transition-transform duration-700 ease-in-out transform -translate-x-10">
            <img src={img1} className="w-full md:w-1/2 object-cover rounded-t md:rounded-l md:rounded-t-none" alt="Tent" />
            <div className="bg-orange-100 p-4 w-full md:w-1/2 rounded-b md:rounded-r md:rounded-b-none flex items-center">
              <ul className="list-disc list-inside font-semibold text-left text-xs sm:text-sm md:text-base lg:text-lg">
                <li>German Tents</li>
                <li>Aluminium Hanger Tents</li>
                <li>Pagoda Tents</li>
                <li>Exhibition Stalls</li>
                <li>Waterproof Sheds</li>
                <li>Octanorm Exhibition Stalls</li>
              </ul>
            </div>
          </div>
          <div ref={el => elementsRef.current[1] = el} className="bg-white p-2 rounded flex flex-col md:flex-row transition-transform duration-700 ease-in-out transform translate-x-10">
            <img src={img2} className="w-full md:w-1/2 object-cover rounded-t md:rounded-l md:rounded-t-none" alt="Tent" />
            <div className="bg-blue-100 p-4 w-full md:w-1/2 rounded-b md:rounded-r md:rounded-b-none flex items-center">
              <ul className="list-disc font-semibold list-inside text-left text-xs sm:text-sm md:text-base lg:text-lg">
                <li>AC Tents</li>
                <li>Super Structures</li>
                <li>Mega Hangers</li>
                <li>Wooden Stages</li>
                <li>Pandals</li>
                <li>Tent House Supplier</li>
                <li>Aluminium Tents</li>
              </ul>
            </div>
          </div>
          <div ref={el => elementsRef.current[2] = el} className="bg-white p-2 rounded flex flex-col md:flex-row transition-transform duration-700 ease-in-out transform -translate-x-10">
            <img src={img3} className="w-full md:w-1/2 object-cover rounded-t md:rounded-l md:rounded-t-none" alt="Tent" />
            <div className="bg-green-100 p-4 w-full md:w-1/2 rounded-b md:rounded-r md:rounded-b-none flex items-center">
              <ul className="list-disc font-semibold list-inside text-left text-xs sm:text-sm md:text-base lg:text-lg">
                <li>Tent House</li>
                <li>Tent House Dealer</li>
                <li>Chairs</li>
                <li>Canopies</li>
                <li>Shamianas</li>
                <li>Shamiyana Tent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp2;








