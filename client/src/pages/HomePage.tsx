import React from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { FeaturedEvent } from '../components/sections/FeaturedEvent';
import { Stats } from '../components/sections/Stats';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedEvent />
      <Stats />
    </>
  );
}