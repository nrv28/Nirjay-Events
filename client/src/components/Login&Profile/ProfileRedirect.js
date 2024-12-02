import React, {useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLoggedUserData = async () => {
          try {
            const userResponse = await axios.get('/giveloggeduserdata');
            if (userResponse.data) {
              navigate('/userprofile');
            }
          } catch (error) {
            try {
              const partnerResponse = await axios.get('/giveloggedpartnerdata');
              if (partnerResponse.data) {
                navigate('/partnerprofile');
              }
            } catch (error) {
              console.error('Error fetching partner details:', error);
              navigate('/login',{ state: { redirectTo: 'profile' } });
            }
          }
        };
    
        fetchLoggedUserData();
      });


  return (
    <div></div>
  )
}

export default ProfileRedirect