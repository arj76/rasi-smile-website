
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to schedule your appointment? Get in touch with us today. 
              We're here to answer your questions and provide exceptional dental care.
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Get in Touch
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Visit Our Clinic
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Rasi Dental Clinic<br />
                  Karur, Tamil Nadu
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Call Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="tel:+918148444798" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    +91 81484 44798
                  </a>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Email Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="mailto:arjagadeeshwaran@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    arjagadeeshwaran@gmail.com
                  </a>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Operating Hours
                </h4>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>Monday - Sunday<br />10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.006077441837!2d78.0764973!3d10.962913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fafd500c6f1%3A0xa1813e02c86df9a0!2sRASI%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1748236306681!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
