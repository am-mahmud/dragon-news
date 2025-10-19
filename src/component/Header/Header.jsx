import React from 'react';
import nameImg from '../../assets/images/logo.png'


const Header = () => {
    // Get current date
    const currentDate = new Date();

    // Format the date like: Sunday, November 27, 2025
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className='flex flex-col space-y-1.5 justify-center items-center'>
            <img src={nameImg} alt="Dragon News" />
            <p className='text-red'>Journalism Without Fear or Favour</p>
            <p>{formattedDate}</p>
        </div>
    );
};

export default Header;