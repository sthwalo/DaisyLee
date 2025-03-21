import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Let us help you to plan your event to become the best it can be
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#cc9c1d] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">{siteConfig.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#cc9c1d] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">{siteConfig.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#cc9c1d] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#cc9c1d] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#cc9c1d] focus:border-[#cc9c1d]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#cc9c1d] focus:border-[#cc9c1d]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#cc9c1d] focus:border-[#cc9c1d]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#cc9c1d] text-white px-6 py-3 rounded-md hover:bg-[#9a7616] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}