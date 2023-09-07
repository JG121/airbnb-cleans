import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-hero-image bg-cover bg-center py-16 flex items-center mt-0 md:mt-4 lg:mt-8">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
          Welcome to AirBnb Cleans - Boston
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
          Your Trusted Cleaning Service Provider
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8">
          We provide top-notch cleaning services for your Airbnb properties. Our professional team ensures cleanliness, safety, and a welcoming environment for your guests.
        </p>
        <a
          href="/contact" // Replace with the actual contact page URL
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
