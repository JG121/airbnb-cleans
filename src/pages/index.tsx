import { UserButton } from "@clerk/nextjs";
import Navigation from '../components/Navigation';
import React from 'react';
import Header from '../components/Header';
import Hero from "../components/Hero";
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4">
        {/* Left-Right Layout */}
        <div className="flex flex-col md:flex-row items-center py-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <section className="bg-gray-100 p-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About Us
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                We are your trusted cleaning service provider in Boston. Our mission is to ensure your Airbnb properties are immaculately clean, creating a welcoming environment for your guests.
              </p>
              <Link href="/about">
                <div className="text-blue-500 hover:underline">Learn More...</div>
              </Link>
            </section>
          </div>

          {/* Spacer */}
          <div className="w-full md:w-1/12"></div>

          {/* Right Content */}
          <div className="w-full md:w-5/12">
            <section className="py-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                One of our featured services is <strong>AirBnb Cleaning</strong>. We provide thorough cleaning to ensure your property is ready for the next guest.
              </p>
              <Link href="/services">
                <div className="text-blue-500 hover:underline">View All Services...</div>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
