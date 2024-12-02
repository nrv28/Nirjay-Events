import React from 'react';
import { Carousel } from 'react-responsive-carousel';
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

const ServicesComp = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];


    return (
        <div className="min-h-screen text-white p-6 mt-20">
            <div className="max-w-7xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6 flex justify-around">
                <div className="w-full lg:w-2/3 pr-6">
                  <h1 className='text-center text-6xl font-bold underline decoration-pink-500'>Nirjay Events</h1>
                    <div className="flex flex-col items-center mb-8 mt-8">
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="max-w-md mx-auto mb-8 mt-2 shadow-2xl shadow-yellow-500/100">
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Carousel ${index + 1}`} className="h-54 object-cover rounded-lg " />
                                </div>
                            ))}
                        </Carousel>
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
                </div>
            </div>
        </div>
    );
};

export default ServicesComp;








