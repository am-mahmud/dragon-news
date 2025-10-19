import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-3'>
            <p className='text-base-100 bg-secondary p-3'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, odio, quisquam ullam ratione expedita nihil maiores laboriosam sint, sapiente alias blanditiis dolorum praesentium earum neque? Neque recusandae voluptate nesciunt odio?</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;