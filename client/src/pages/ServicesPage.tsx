import React from 'react';
import { Services } from '../components/sections/Services';
import { Stats } from '../components/sections/Stats';

export function ServicesPage() {
  return (
    <div className="pt-24">
      <Services />
      <Stats />
    </div>
  );
}