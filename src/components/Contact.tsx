
import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Visit Our Clinic
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Rasi Dental Clinic<br />
                        Tiruchy, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Call Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="tel:+919789382834" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                          +91 97893 82834
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Email Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="mailto:arjagadeeshwaran@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                          arjagadeeshwaran@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Operating Hours
                      </h4>
                      <div className="text-gray-600 dark:text-gray-300 space-y-1">
                        <p>Monday - Sunday: 10:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Book an Appointment
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="Tell us about your dental concerns or preferred appointment time"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
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
