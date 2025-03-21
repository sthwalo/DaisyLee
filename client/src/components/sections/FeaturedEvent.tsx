import React from 'react';

export function FeaturedEvent() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Networking Gala dinner with Vusi Thembekwayo
            </h2>
            <p className="text-xl mb-8">
              On the 25th of November 2023, we will be at Emnotweni Arena, where we will be hosting Vusi Thembekwayo.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-[#cc9c1d] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9a7616] transition-colors"
            >
              Book Now
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
              alt="Gala Dinner"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}