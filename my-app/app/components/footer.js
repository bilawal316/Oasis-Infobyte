import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Your E-commerce Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
``
