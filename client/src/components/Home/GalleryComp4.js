import React, { useState, useEffect } from 'react';

const GalleryComp4 = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // State to track if the gallery is visible on the screen
  const images = [
    'https://img.freepik.com/premium-photo/indian-stage-decoration-with-multi-color-flowers-props-lights-wedding-stage-decoration-yellow_747653-10869.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481536.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/premium-photo/wedding-ceremony-with-chandelier-flowers_948735-295736.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/premium-photo/colorful-stage-decoration-bride_42422-72.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481466.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/premium-photo/defocused-image-illuminated-lights-night_1048944-8784543.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481515.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481500.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/view-wedding-archway-front_8353-9891.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/premium-photo/stage-decorated-with-couch-pillows-creating-cozy-seating-area-colorful-indian-wedding-with-decorated-mandap-vibrant-flower-garlands-ai-generated_585735-22884.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481480.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user',
    'https://img.freepik.com/premium-photo/flower-vase-table-against-illuminated-wall_1048944-4599362.jpg?size=626&ext=jpg&ga=GA1.1.1339845224.1716058884&semt=ais_user'
  ];

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(images.map(image => {
        return new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.src = image;
        }).catch(error => {
          console.error('Failed to load image:', error);
        });
      }));
      setLoading(false);
    };
  
    preloadImages();
  }, [images]);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOffset = window.innerHeight + window.scrollY;
      const galleryElement = document.getElementById('gallery');
      if (galleryElement) {
        const { top, bottom } = galleryElement.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="gallery" className="w-full px-4 py-8 bg-gray-200 bg-opacity-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl underline decoration-pink-500 font-bold text-center mb-8">GALLERY</h2>
      <div className="text-center mb-4 text-lg sm:text-xl md:text-2xl font-semibold">
        <span className="mx-2 text-blue-600 cursor-pointer">All</span>
        <span className="mx-2 cursor-pointer hover:text-white hover:underline">Events</span>
        <span className="mx-2 cursor-pointer hover:text-white hover:underline">Exhibitions</span>
        <span className="mx-2 cursor-pointer hover:text-white hover:underline">Weddings</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className={`relative border-4 border-gray-300 ${isVisible ? 'animate-slide-in' : ''}`}>
            <img src={image} alt={`Gallery ${index + 1}`} className={`w-full h-auto object-cover ${isVisible ? 'animate-fade-in' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComp4;
