import React from 'react';

const HeroSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    margin: '100px',
  };

  return (
    <div style={sectionStyle}>
      <h1>Welcome to 
        <span className='text-red-500 font-bold tracking-[3px]'> Dukandar Shandar </span></h1>
      <p>Amazing Products are waiting for you!</p>
    </div>
  );
};

export default HeroSection;
