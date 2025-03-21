import React from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Excellence in Service",
      description: "With over 8 years of experience, we deliver exceptional event management services that exceed expectations."
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description: "We pride ourselves on punctual delivery and meticulous attention to every timeline and deadline."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Our professional team brings creativity, expertise, and passion to every event we manage."
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Join our growing family of 126+ satisfied clients who trust us with their most important events."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            We bring your vision to life with professionalism, creativity, and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <reason.icon className="w-12 h-12 text-[#cc9c1d] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}