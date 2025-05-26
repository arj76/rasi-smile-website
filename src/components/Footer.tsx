
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rasi Dental Clinic</h3>
                  <p className="text-gray-400 text-sm">Dr. A. R. Jagadeeshwaran</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Providing exceptional dental care with a personal touch. 
                Dr. A. R. Jagadeeshwaran combines years of expertise with the latest dental technologies 
                to ensure your optimal oral health.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-blue-400" />
                  <span className="text-gray-300">Rasi Dental Clinic, Karur, Tamil Nadu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-400" />
                  <span className="text-gray-300">+91 97893 82834</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-gray-300">arjagadeeshwaran@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("#home")}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#about")}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#testimonials")}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Operating Hours</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-blue-400" />
                  <span className="text-gray-300">Schedule</span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p>Monday - Sunday: 10:00 AM - 8:00 PM</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-blue-400 font-semibold">Emergency Care Available</p>
                  <p className="text-gray-300 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Rasi Dental Clinic. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
