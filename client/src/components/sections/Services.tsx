import React from 'react';
import { services } from '../../data/services';
import * as Icons from 'lucide-react';

export function Services() {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('')];
    return Icon ? <Icon className="w-12 h-12 text-[#cc9c1d] mb-4" /> : null;
  };

  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We specialize in corporate events & meeting planning, conferences, symposiums & destination meetings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {getIcon(service.icon)}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <Icons.Check className="w-5 h-5 text-[#cc9c1d] mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}