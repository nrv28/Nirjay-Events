
import React, { useEffect, useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';

const PartnerDisplay = () => {
  const [showLoading , setshowLoading] = useState(false);
  const [eventOrganizers, setEventOrganizers] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const cityName = location.state?.suggestion;


  useEffect(() => {
    axios.post('/fetchpartnersdata',{city:cityName})
      .then(response => {
        setshowLoading(true);
        setEventOrganizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [cityName]);

  const handleKnowMore = (organizerId) => {
    // navigate(`/individualdisplay/${organizerId}`);
    navigate('/individualdisplay',{ state: { organizerId: organizerId } });
  };

  if(!showLoading){
     return(
      <div className='text-6xl mt-40 text-center text-white'>Loading...</div>
     );
  }

  if(eventOrganizers.length===0){
    return(
      <div className='text-6xl mt-40 text-center text-white'>Currently No Partners in Your Area..</div>
     );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-24">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-10">Event Organizers in {cityName}</h1>
      <div className="flex flex-col gap-6 bg-black">
        {eventOrganizers.map(organizer => (
          <div key={organizer.id} className="flex flex-col md:flex-row p-4 border-4 border-white rounded">
            <img src={`data:image/png;base64,${organizer.image}`} alt={`${organizer.companyName} Logo`} className="w-full md:w-56 h-40 object-cover mb-4 md:mb-0 md:mr-4 rounded" />
            <div className="md:ml-4">
              <h2 className="text-xl font-semibold text-white">{organizer.companyName}</h2>
              <p className="mt-4 text-white">{organizer.address}</p>
              <p className="mt-3 text-yellow-500">{`${'★'.repeat(organizer.stars)} (${organizer.reviewscount} Reviews)`}</p>
              <button onClick={() => handleKnowMore(organizer.id)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerDisplay;
