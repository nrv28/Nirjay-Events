import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { FaSmile, FaClipboardCheck, FaRegBuilding } from 'react-icons/fa';

const StatsBannerComp3 = () => {
  const [startCount, setStartCount] = useState([false, false, false, false]);
  const statsRef = useRef([]);

  useEffect(() => {
    const elements = statsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setStartCount((prev) => {
            const newStartCount = [...prev];
            newStartCount[index] = true;
            return newStartCount;
          });
        } else {
          setStartCount((prev) => {
            const newStartCount = [...prev];
            newStartCount[index] = false;
            return newStartCount;
          });
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (elements) {
        elements.forEach((element) => {
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, []);

  const stats = [
    { id: 1, icon: <FaClipboardCheck className="text-3xl md:text-5xl" />, end: 145, label: 'Exhibitions Completed' },
    { id: 2, icon: <FaRegBuilding className="text-3xl md:text-5xl" />, end: 500, label: 'Marriages Arranged' },
    { id: 3, icon: <FaClipboardCheck className="text-3xl md:text-5xl" />, end: 1015, label: 'Events Completed' },
    { id: 4, icon: <FaSmile className="text-3xl md:text-5xl" />, end: 2500, label: 'Happy Customers' },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="bg-gray-900 bg-opacity-70 p-4 md:p-8 rounded-lg text-white max-w-6xl w-full mt-24 md:mt-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-8">Our Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.id} ref={el => statsRef.current[index] = el} className="flex flex-col items-center text-center">
                <div className="mb-2 md:mb-4">{stat.icon}</div>
                {startCount[index] ? (
                  <CountUp end={stat.end} duration={3} className="text-xl md:text-3xl font-bold text-blue-400" />
                ) : (
                  <span className="text-xl md:text-3xl font-bold text-blue-400">0</span>
                )}
                <p className="mt-1 md:mt-2 text-sm md:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBannerComp3;



// import React, { useEffect, useRef, useState } from 'react';
// import CountUp from 'react-countup';
// import homeblur from '../assets/images/homeblur.jpg';
// import { FaSmile, FaClipboardCheck, FaRegBuilding } from 'react-icons/fa';

// const StatsBannerComp3 = () => {
//   const [startCount, setStartCount] = useState([false, false, false, false]);
//   const statsRef = useRef([]);

//   useEffect(() => {
//     const elements = statsRef.current;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//           setStartCount((prev) => {
//             const newStartCount = [...prev];
//             newStartCount[index] = true;
//             return newStartCount;
//           });
//         } else {
//           setStartCount((prev) => {
//             const newStartCount = [...prev];
//             newStartCount[index] = false;
//             return newStartCount;
//           });
//         }
//       });
//     }, {
//       threshold: 0.1,
//     });

//     elements.forEach((element) => {
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       if (elements) {
//         elements.forEach((element) => {
//           if (element) {
//             observer.unobserve(element);
//           }
//         });
//       }
//     };
//   }, []);

//   const stats = [
//     { id: 1, icon: <FaClipboardCheck size={48} />, end: 145, label: 'Exhibitions Completed' },
//     { id: 2, icon: <FaRegBuilding size={48} />, end: 500, label: 'Marriage Arranged' },
//     { id: 3, icon: <FaClipboardCheck size={48} />, end: 1015, label: 'Events Completed' },
//     { id: 4, icon: <FaSmile size={48} />, end: 2500, label: 'Happy Customers' },
//   ];

//   return (
//     <div className="relative w-full min-h-screen">
//       <img src={homeblur} className="w-full h-full object-cover blur-sm" alt="Background" />
//       <div className="absolute inset-0 flex flex-col justify-center items-center">
//         <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg text-white max-w-4xl w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Our Statistics</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={stat.id} ref={el => statsRef.current[index] = el} className="flex flex-col items-center text-center">
//                 <div className="mb-4">{stat.icon}</div>
//                 {startCount[index] ? (
//                   <CountUp end={stat.end} duration={3} className="text-2xl md:text-3xl font-bold text-blue-400" />
//                 ) : (
//                   <span className="text-2xl md:text-3xl font-bold text-blue-400">0</span>
//                 )}
//                 <p className="mt-2 text-lg">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsBannerComp3;


