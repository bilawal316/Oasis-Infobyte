import React from 'react';
import Image from "next/image";

const Pencil = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
     <div className="w-full h-64 relative">
     <Image src="/pencil1.jpg" objectFit="cover" width={500} height={300} />
</div>
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">Premium Pencil</h2>
        <p className="text-gray-600 mb-4">
          Introducing our premium pencil, perfect for all your writing needs.
          Crafted with precision and designed for comfort, this pencil is an
          essential tool for students, artists, and professionals alike.
        </p>
        <ul className="text-sm text-gray-500">
          <li className="mb-1 flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l5 5L19 7"></path>
            </svg>
            High-Quality Material
          </li>
          <li className="mb-1 flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l5 5L19 7"></path>
            </svg>
            Comfortable Grip
          </li>
          {/* Add more features as needed */}
        </ul>
        <p className="text-gray-700 font-bold mt-4">PKR 150.00</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Pencil;