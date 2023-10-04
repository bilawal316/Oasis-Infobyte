import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div>
        <div>
            <ul className="p-10 justify-end flex space-x-4">
        <Link href="/">
        <li className='navButton'>
            Home
        </li>
        </Link>
        <Link href="/">
        <li className='navButton'>
            About
        </li>
        </Link>
        <Link href="/">
        <li className='navButton'>
            Contact Us
        </li>
        </Link>
    </ul>
    </div>
    </div>
  );
};

export default Navbar;