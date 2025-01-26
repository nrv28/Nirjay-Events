import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/icons/dummy-icon.png';
import {toast} from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 


const PartnerProfileComp = () => {
  const [partner, setPartner] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/giveloggedpartnerdata`);
        setPartner(response.data);
      } catch (error) {
        console.error('Error fetching partner details:', error);
        navigate('/login');
      }
    };

    const fetchPartnerOrders = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/partnerorder`);
        if (response.data && Array.isArray(response.data)) {
          setOrders(response.data);
        }
      } catch (error) {
        console.error('Error fetching partner orders:', error);
      }
    };

    fetchPartnerDetails();
    fetchPartnerOrders();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`);
      toast.success("Logout Successful");
      navigate('/login');
    } catch (error) {
      toast.error("Logout Failed");
      // console.error('Error logging out:', error);
    }
  };

  const markOrderComplete = async (orderId) => {
    confirmAlert({
      title: 'Confirm to complete',
      message: 'Are you sure you want to mark this order as complete?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await axios.put(`${process.env.REACT_APP_BACKEND_URL}/partnerordercomplete`, { orderId, partnerid: partner._id });
              toast.success('Order marked as complete');
              window.location.reload();
            } catch (error) {
              console.error('Error marking order as complete:', error);
              toast.error('Failed to mark order as complete');
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  const cancelorder = async (orderId) => {
    confirmAlert({
      title: 'Confirm to cancel order',
      message: 'Are you sure you want to cancel this order?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await axios.put(`${process.env.REACT_APP_BACKEND_URL}/partnerordercancel`,{ orderId, partnerId: partner._id }
              );
              toast.success('Order cancelled successfully');
              window.location.reload();
            } catch (error) {
              console.error('Error cancelling order:', error);
              toast.error(error.response.data);
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  if (!partner) {
    return <div className='text-6xl text-white m-20'>Loading...</div>;
  }

  return (
    <section className="pt-16 bg-blueGray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 bg-orange-300 border-8 border-black break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative p-5">
                      <img
                        alt="..."
                        src={logo}
                        className="w-32 h-auto rounded-full shadow-xl border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Name : {partner.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Address : {partner.address}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                    Phone : {partner.phone}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                    Email : {partner.email}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-blue-100 border-8 border-black w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Current Orders
                  </h3>
                  {orders.length > 0 ? (
                    <ul className="list-none">
                      {orders.map((order, index) => (
                        <li key={index} className="mb-4 p-4 border-b border-blueGray-200">
                          {/* <p><strong>MY ID:</strong>{order.partnerid}</p> */}
                          <p className='text-xl'><strong>Order No. {index+1}</strong></p>
                          <p><strong>CLIENT ID:</strong> {order.clientid}</p>
                          <p><strong>ORDER ID:</strong> {order._id}</p>
                          <p><strong>Package Amount: ₹</strong>{order.packageamount}</p>
                          <p><strong>Package Type:</strong> {order.packagetype}</p>
                          <p className={`text-xl ${order.status === '-1' ? 'text-red-500' : order.status === '1' ? 'text-green-500' : 'text-yellow-500'}`}>
                            <strong>Progress: </strong> 
                            {order.status === '-1' ? 'Order Cancelled' : order.status === '1' ? 'Order Complete' : 'In Process'}
                          </p>
                          {order.status === '0' && (
                            <button
                              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              onClick={() => markOrderComplete(order._id)}
                            >
                              Mark as Complete
                            </button>
                          )}
                          {order.status === '0' && (
                          <button
                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => cancelorder(order._id)}
                          >
                            Cancel Order
                          </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No current orders</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProfileComp;
