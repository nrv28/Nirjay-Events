
import React, { useEffect, useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import rightImage from '../../assets/images/hanging1.png'; // Add your new image here

const HomeComp1 = () => {
  const elementsRef = useRef([]);
  const navigate = useNavigate(); 

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


  const handleexplore = () =>{
    navigate('/PartnerSearch');
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4">
        <div ref={el => elementsRef.current[0] = el} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-8 md:w-1/2 transition-transform duration-700 ease-in-out transform -translate-x-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white">
            Nirjay Events
          </h1>
          <p className="text-sm font-semibold md:text-xl lg:text-xl xl:text-xl text-white max-w-2xl">
            "Welcome to Nirjay Events! We specialize in creating unforgettable experiences for all your special occasions. Whether it's a wedding, corporate event, or private party, we bring your vision to life with elegance and style."
          </p>
          <button type="button" onClick={handleexplore} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Explore More
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          <button type="button" onClick={()=>{navigate('/PartnerAdd')}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Join as Partner
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
        <div ref={el => elementsRef.current[1] = el} className="md:w-1/2 flex items-start justify-center md:justify-end mt-4 md:mt-0 transition-transform duration-700 ease-in-out transform translate-x-10">
          <img src={rightImage} className="w-full md:w-auto h-auto object-cover" alt="Event" />
        </div>
      </div>
    </div>
  );
}

export default HomeComp1;












// import React, { useEffect, useRef } from 'react';
// import homeblur from '../assets/images/homeblur.jpg';
// import rightImage from '../assets/images/hanging1.png'; // Add your new image here

// const HomeComp1 = () => {
//   const elementsRef = useRef([]);

//   useEffect(() => {
//     const elements = elementsRef.current;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('transform-none');
//         } else {
//           entry.target.classList.remove('transform-none');
//         }
//       });
//     }, {
//       threshold: 0.1
//     });

//     elements.forEach(element => {
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       if (elements) {
//         elements.forEach(element => {
//           if (element) {
//             observer.unobserve(element);
//           }
//         });
//       }
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <img src={homeblur} className="w-full h-full object-cover blur-sm transition-transform duration-1000 ease-in-out" alt="Background" />
//       <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4">
//         <div ref={el => elementsRef.current[0] = el} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-8 md:w-1/2 transition-transform duration-700 ease-in-out transform -translate-x-10">
//           <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white">
//             Nirjay Events
//           </h1>
//           <p className="text-sm font-semibold md:text-xl lg:text-2xl xl:text-3xl text-white max-w-2xl">
//             Welcome to Nirjay Events! We specialize in creating unforgettable experiences for all your special occasions. Whether it's a wedding, corporate event, or private party, we bring your vision to life with elegance and style.
//           </p>
//           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
//             Explore More
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//           </button>
//         </div>
//         <div ref={el => elementsRef.current[1] = el} className="md:w-1/2 flex items-start justify-center md:justify-end mt-4 md:mt-0 transition-transform duration-700 ease-in-out transform translate-x-10">
//           <img src={rightImage} className="w-full md:w-auto h-auto object-cover" alt="Event" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeComp1;


