import React from 'react';
import heroImage from "../../assets/heroImage.jpg"

const HeroSection = () => {
    return (
       <section>
        <img src={heroImage} 
        alt="Delicious Food"
        className='absolute insert-0 w-full h-full object-cover'
         />
       </section>
    );
};

export default HeroSection;