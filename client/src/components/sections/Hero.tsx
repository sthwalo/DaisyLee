import React from 'react';
import { siteConfig } from '../../config/site';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          WE ARE THE<br />
          <span className="text-[#cc9c1d]">BEST EVENT MANAGEMENT COMPANY</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Daisylee has a capacity of 1,000 people seater.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-[#cc9c1d] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9a7616] transition-colors"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}