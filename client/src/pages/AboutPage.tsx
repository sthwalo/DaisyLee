import React from 'react';
import { About } from '../components/sections/About';
import { Categories } from '../components/sections/Categories';

export function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <Categories />
    </div>
  );
}