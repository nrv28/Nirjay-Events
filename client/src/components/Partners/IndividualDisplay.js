import React, { useEffect, useState} from 'react';
import { useParams ,useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import {toast } from 'react-toastify';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const img1 = "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481534.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img2 = "https://img.freepik.com/premium-photo/wedding-reception-was-held-heart-city_948735-25346.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img3 = "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481466.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img4 = "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_865967-1033038.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img5 = "https://img.freepik.com/free-photo/loving-wife-feeding-her-husband-wedding-ceremony-night_8353-12245.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img6 = "https://img.freepik.com/premium-photo/table-set-wedding-with-candles-flowers_948735-25520.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img7 = "https://img.freepik.com/free-photo/view-wedding-archway-front_8353-9891.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img8 = "https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";
const img9 = "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_1070043-224820.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user";

const CompanyDisplay = () => {
    // const { id } = useParams();
    const [user, setUser] = useState(null);
    const [company, setCompany] = useState(null);
    // const [partnerReviews, setPartnerReviews] = useState(null);

    const navigate = useNavigate();

    const location = useLocation();
    const id = location.state?.organizerId;

    useEffect(() => {
        axios.post('/fetchpartnerdata',{id : id})
            .then(response => {
                setCompany(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);


    const handleBooking = async (price, name) => {
    
        try {
            // Get logged-in user data
            const userResponse = await axios.get('/giveloggeduserdata');
            const userId = userResponse.data._id;
    
            // Create the payment order
            const response = await axios.post('/payment', { Amount: price });
            const order = response.data;
    
            // Razorpay options
            var options = {
                "key": "rzp_test_Pdq10JpbN741gx", // Enter the Key ID generated from the Dashboard
                "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": order.currency,
                "name": "Nrv Events", // Your business name
                "description": "Test Transaction",
                "image": "../../assets/icons/dummy-icon.png",
                "order_id": order.id,
                "handler": async (response) => {
                    const data = {
                        Name: name,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
    
                    await axios.post('/paymentverification', data);
                    toast.success("Payment Successful");
    
                    await axios.post('/booking', { id, userId, price, name });
                    toast.success("Order Booked");

                    await axios.post('/mail',{company,userResponse});
                    toast.success("Mail Sent");
                },
                "prefill": {
                    "name": "Nirjay Kumar",
                    "email": "nirjaykumargupta@gmail.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
    
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
            });
    
            rzp1.open();
            // e.preventDefault();
        } catch (error) {
            if (error.response && error.response.status === 500) {
                // If the error response status is 401, navigate to login
                navigate('/login',{ state: { redirectTo: 'individualdisplay' , id : id} });
            } else {
                toast.error('Payment error: ' + error.message);
            }
        }
    };


    if (!company) {
        return <div className="text-white text-center text-2xl mt-20">Loading...</div>;
    }

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const reviewscount = company.reviewscount || 0;
    const stars = company.stars || 0;

    const rentalServices = [{
        name: "Wedding Package",
        price: "430000",
    },
    {
        name: "Birthday Package",
        price: "175000",
    },
    {
        name: "Custom Package",
        price: "20000",
    }];

    return (
        <div className="min-h-screen text-white p-6 mt-20">
            <div className="max-w-7xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6 flex flex-wrap">
                <div className="w-full lg:w-2/3 pr-6">
                    <h2 className="text-4xl text-yellow-400 font-bold text-center mb-6">{company.name}</h2>
                    <div className="flex flex-col items-center mb-8 ">
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="max-w-md mx-auto mb-8 mt-2 shadow-2xl shadow-yellow-500/100">
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Carousel ${index + 1}`} className="h-54 object-cover rounded-lg " />
                                </div>
                            ))}
                        </Carousel>
                        <p className="text-center text-white font-serif text-xl">{company.address}</p>
                    </div>
                    <h3 className="text-2xl text-pink-600 font-semibold mb-4 text-center border-4 border-pink-500">Our Services</h3>
                    <div className="flex flex-wrap justify-center gap-6 ">
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <img src={image} alt={`Display ${index + 1}`} className="w-full h-64 object-cover border border-gray-300 rounded-md mb-2 shadow-xl shadow-blue-600/70" />
                            </div>
                        ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4 text-center mt-10 border-4 border-pink-500">Tent House Supplier Services</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full  text-white text-sm">
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">German Tents for rent</td>
                                    <td className="border px-4 py-2">Pagoda Tents for rent</td>
                                    <td className="border px-4 py-2">Air Conditioners of various tonnes for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Aluminium Tents for rent</td>
                                    <td className="border px-4 py-2">Exhibition Stalls for rent</td>
                                    <td className="border px-4 py-2">Waterproof Plywood Platforms for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Metal barricading for rent / for hire</td>
                                    <td className="border px-4 py-2">Chairs for rent</td>
                                    <td className="border px-4 py-2">Transparent German Hangers for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Shamianas for rent</td>
                                    <td className="border px-4 py-2">Shamiyana Tent for rent</td>
                                    <td className="border px-4 py-2">Golden Queue Stands with Red Ribbons for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Tent House for rent</td>
                                    <td className="border px-4 py-2">Aluminium Hanger Tents for rent</td>
                                    <td className="border px-4 py-2">Single Seater Leather Sofas for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Tent House Dealer</td>
                                    <td className="border px-4 py-2">Canopies for rent</td>
                                    <td className="border px-4 py-2">Plastic Chairs with covers for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Octanorm Exhibition Stalls for rent</td>
                                    <td className="border px-4 py-2">Super Structures for rent</td>
                                    <td className="border px-4 py-2">Plastic Chairs without covers for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Mega Hangers for rent</td>
                                    <td className="border px-4 py-2">AC Tents for rent</td>
                                    <td className="border px-4 py-2">Round Tables with cloth covering for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Wooden Stages for rent</td>
                                    <td className="border px-4 py-2">Pandals for rent</td>
                                    <td className="border px-4 py-2">Round Tables without cloth covering for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Waterproof Sheds for rent</td>
                                    <td className="border px-4 py-2">German Hangers for rent / for hire</td>
                                    <td className="border px-4 py-2">Long Tables with cloth covering for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">AC German Hangers for rent / for hire</td>
                                    <td className="border px-4 py-2">VIP Chairs for rent / for hire</td>
                                    <td className="border px-4 py-2">Long Tables without cloth covering for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Air Coolers for rent / for hire</td>
                                    <td className="border px-4 py-2">Waterproof Pandals for rent / for hire</td>
                                    <td className="border px-4 py-2">Generators and Generator Sets for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Industrial Sheds for rent / for hire</td>
                                    <td className="border px-4 py-2">Tent House Supplier</td>
                                    <td className="border px-4 py-2">Bronze chain barricading for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Banquet Chairs for rent / for hire</td>
                                    <td className="border px-4 py-2">VVIP Chairs for rent / for hire</td>
                                    <td className="border px-4 py-2">Synthetic carpets of various colours for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Steel Cots for rent / for hire</td>
                                    <td className="border px-4 py-2">Stages for rent / for hire</td>
                                    <td className="border px-4 py-2">Two Seater Leather Sofas for rent / for hire</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Mattresses for rent / for hire</td>
                                    <td className="border px-4 py-2">Podiums for rent / for hire</td>
                                    <td className="border px-4 py-2">Maharaja Chairs for rent / for hire</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className="text-2xl text-pink-600 font-semibold mb-4 text-center mt-5 border-4 border-pink-500">Reviews</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {company && company.reviews.length > 0 ? (
                            company.reviews.map((review, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-lg font-serif font-semibold">{review.reviewerName}</p>
                                    <p className="text-yellow-400">{'★'.repeat(review.reviewStars)}</p>
                                    <p className="mt-2">{review.reviewContent}</p>
                                    <p className="text-gray-400 text-sm">{new Date(review.reviewDate).toLocaleDateString()}</p>
                                </div>
                            ))
                        ) : (
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-white font-serif text-lg">Be the first One to review</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="bg-gray-800 p-4 rounded-lg mb-6 shadow-xl shadow-yellow-600/100 mt-4">
                        <h3 className="text-2xl text-pink-600 font-semibold mb-4">Contact Details</h3>
                        <p className="mb-2"><strong>Address:</strong>{company.address}</p>
                        <p className="mb-2"><strong>Phone:</strong> +91 {company.phone}</p>
                        <p className="mb-2"><strong>Email:</strong> {company.email}</p>
                        <p className="text-yellow-400 mb-2">Rating: {'★'.repeat(stars)}</p>
                        <p className="mb-2">Reviews: {reviewscount}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-xl shadow-yellow-500/40 mt-6">
                        <h3 className="text-2xl text-pink-600 font-semibold mb-4">Rental Services</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {rentalServices && rentalServices.length > 0 ? (
                                rentalServices.map((service, index) => (
                                    <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
                                        <h4 className="text-xl text-yellow-400 font-semibold mb-2">{service.name}</h4>
                                        <p className="text-white mb-2"><strong>Price:</strong> ₹{service.price}</p>
                                        <div className="flex justify-between">
                                            <button onClick={ () => handleBooking(service.price,service.name)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-3" type="button">Buy Package</button>
                                            <button 
                                                className="bg-green-500 text-white px-4 py-2 rounded" 
                                                type="button"
                                                onClick={() => window.open(service.pdfUrl, "_blank")}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-white">No rental services available.</p>
                            )}
                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-xl shadow-yellow-500/40">
                        <h3 className="text-2xl text-pink-600 font-semibold mb-4">Enquiry Form</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-white mb-2" htmlFor="name">Name</label>
                                <input className="w-full p-2 rounded bg-gray-700 text-white" type="text" id="name" name="name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2" htmlFor="email">Email</label>
                                <input className="w-full p-2 rounded bg-gray-700 text-white" type="email" id="email" name="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2" htmlFor="message">Message</label>
                                <textarea className="w-full p-2 rounded bg-gray-700 text-white" id="message" name="message" rows="4"></textarea>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDisplay;








