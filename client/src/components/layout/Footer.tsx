import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#cc9c1d] mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-6">{siteConfig.description}</p>
            <div className="flex space-x-4">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} className="text-gray-400 hover:text-[#cc9c1d]">
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} className="text-gray-400 hover:text-[#cc9c1d]">
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-[#cc9c1d]">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center text-gray-400 hover:text-[#cc9c1d]">
                <Phone className="w-5 h-5 mr-3" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-gray-400 hover:text-[#cc9c1d]">
                <Mail className="w-5 h-5 mr-3" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#cc9c1d]">Our Services</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-[#cc9c1d]">Portfolio</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#cc9c1d]">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#cc9c1d]">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Global Hope Consortium All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}