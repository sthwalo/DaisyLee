import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    {
      title: "Corporate Commitment",
      description: "Daisy Lee Events is a full service, lifestyle based, professional event planning company that specializes in corporate events, dinner galas, fundraisers, long service awards, grand openings, conferences and private events"
    },
    {
      title: "Complete Coordination",
      description: "We remove the burden of running up and down coordinating an event for our clients because we are pioneers in events coordination and we want our clients to enjoy their event"
    },
    {
      title: "Attention to Detail",
      description: "We love details! And our commitment is to see each event through from start to finish while keeping the goals, vision, budget and client's needs in mind at all times. We are committed to following through on every detail so you don't have to"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Daisy Lee Events</h2>
          <p className="text-xl text-gray-600">
            Have peace of mind, as you countdown to your next event, as you let us remove the burden of running up and down coordinating your next event
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <CheckCircle className="w-12 h-12 text-[#cc9c1d] mb-4" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}