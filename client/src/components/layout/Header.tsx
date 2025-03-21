import  { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-end space-x-6 text-sm mb-2">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center text-gray-600 hover:text-[#cc9c1d]">
            <Phone className="w-4 h-4 mr-2" />
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-gray-600 hover:text-[#cc9c1d]">
            <Mail className="w-4 h-4 mr-2" />
            {siteConfig.contact.email}
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#cc9c1d]">
            {siteConfig.name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/' ? 'text-[#cc9c1d]' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/about' ? 'text-[#cc9c1d]' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/services' ? 'text-[#cc9c1d]' : ''}`}>
              Services
            </Link>
            <Link to="/daisylee-world" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/daisylee-world' ? 'text-[#cc9c1d]' : ''}`}>
              Daisy Lee World
            </Link>
            <Link to="/portfolio" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/portfolio' ? 'text-[#cc9c1d]' : ''}`}>
              Portfolio
            </Link>
            <Link to="/contact" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/contact' ? 'text-[#cc9c1d]' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/' ? 'text-[#cc9c1d]' : ''}`}>
                Home
              </Link>
              <Link to="/services" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/services' ? 'text-[#cc9c1d]' : ''}`}>
                Services
              </Link>
              <Link to="/daisylee-world" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/daisylee-world' ? 'text-[#cc9c1d]' : ''}`}>
                Daisy Lee World
              </Link>
              <Link to="/portfolio" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/portfolio' ? 'text-[#cc9c1d]' : ''}`}>
                Portfolio
              </Link>
              <Link to="/about" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/about' ? 'text-[#cc9c1d]' : ''}`}>
                About
              </Link>
              <Link to="/contact" className={`text-gray-800 hover:text-[#cc9c1d] ${location.pathname === '/contact' ? 'text-[#cc9c1d]' : ''}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}