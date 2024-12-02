import React from 'react';

const FooterComp = () => {
  return (
    <div className="mt-20 min-h-screen p-8 font-sans bg-transparent text-black">
      <h1 className="text-6xl font-bold mb-8 text-center text-white underline decoration-pink-500">Contact Us</h1>
      <div className="mt-24 flex flex-col lg:flex-row flex-wrap lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Mobile:</h2>
          <p className="text-lg">99000 88106 / 98450 44472</p>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Phone:</h2>
          <p className="text-lg">98451 67171 / 99000 88105</p>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Landline:</h2>
          <p className="text-lg">080 25479333</p>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Email:</h2>
          <p className="text-lg">info@Nirjayevents.com</p>
        </div>
        <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Locate Us</h2>
          <h3 className="text-xl font-medium mb-1 text-blue-800">Corporate Address:</h3>
          <p className="text-lg">
            Nirjay Tent House,<br />
            No.206, 1st Stage, 2nd Block,<br />
            80ft Road HBR Layout, Kalyan Nagar Post,<br />
            Patna-560084.
          </p>
          <h3 className="text-xl font-medium mt-4 mb-1 text-blue-800">Registered Address:</h3>
          <p className="text-lg">
            #1 10th Cross 1st Stage Pillanna Garden,<br />
            St Thomas Town Post,<br />
            Patna-560084.
          </p>
        </div>
      </div>
      {/* <footer className="mt-20 py-4 border-t border-gray-300 text-center bg-white bg-opacity-75">
        <p className="text-sm text-black">© 2024. Design by Nirjay Web Solutions Pvt Ltd</p>
      </footer> */}
    </div>
  );
}

export default FooterComp;
