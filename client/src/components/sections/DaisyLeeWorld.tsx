import React from 'react';

export function DaisyLeeWorld() {
  const services = [
    {
      title: "SCHOOL FUN DAYS",
      description: "Bring joy and excitement to your school with our tailored fun day activities! From games and competitions to creative workshops, we ensure a day filled with laughter and teamwork.",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80",
    },
    {
      title: "EDUCATIONAL TRIPS",
      description: "Expand your students' horizons with our enriching educational trips! We offer unique excursions that combine learning with adventure, making education engaging and fun.",
      imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80",
    },
    {
      title: "TEACHERS TEAM BUILDING",
      description: "Strengthen your teaching staff's bond with our dynamic team-building events! We design activities that promote collaboration, communication, and camaraderie among educators.",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-blue-50" id="daisylee-world">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Daisy-Lee World</h2>
          <p className="text-xl text-gray-600">
            Are you ready to elevate your school events to the next level? At Daisy Lee World, we specialize in creating memorable experiences that inspire learning and foster community.
          </p>
          <div className="text-2xl font-bold text-blue-900 mt-4">
            WHERE LEARNING MEETS FUN!
          </div>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-[#cc9c1d] mb-8">FOR A QUOTE</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:0824355370"
              className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              082 435 5370
            </a>
            <a 
              href="tel:0727503843"
              className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              072 750 3843
            </a>
            <a 
              href="mailto:info@daisylee.co.za"
              className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              info@daisylee.co.za
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-600 space-x-2">
            <span>#DaisyLeeWorld</span>
            <span>#DaisyLeeEvents</span>
            <span>#SchoolFunDays</span>
            <span>#SchoolEducationalTrips</span>
            <span>#TeachersTeamBuilding</span>
          </div>
        </div>
      </div>
    </section>
  );
}