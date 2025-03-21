import React from 'react';
import { siteConfig } from '../../config/site';
import { Users, Calendar, Clock } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: siteConfig.stats.happyClients,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: Calendar,
      value: siteConfig.stats.eventsHosted,
      label: "Events Hosted",
      suffix: "+"
    },
    {
      icon: Clock,
      value: siteConfig.stats.yearsInBusiness,
      label: "Years in business",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 bg-[#cc9c1d]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}