
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "General Dentistry in Karur",
      icon: "🦷",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments for all ages in Karur.",
      features: ["Regular Dental Cleanings", "Cavity Fillings", "Root Canal Treatment", "Tooth Extractions"],
      slug: "general-dentistry"
    },
    {
      title: "Orthodontics in Karur",
      icon: "📐",
      description: "Straighten your teeth with modern orthodontic solutions including braces and clear aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
      slug: "orthodontics"
    },
    {
      title: "Dental Implants in Karur",
      icon: "🔧",
      description: "Permanent tooth replacement solutions that look and feel natural, available in Karur.",
      features: ["Single Implants", "Multiple Implants", "Implant-Supported Dentures", "Bone Grafting"],
      slug: "dental-implants"
    },
    {
      title: "Prosthodontics in Karur",
      icon: "👑",
      description: "Specialized care for replacing and restoring teeth with crowns, bridges, and dentures in Karur.",
      features: ["Dental Crowns", "Bridges", "Complete Dentures", "Partial Dentures"],
      slug: "prosthodontics"
    }
  ];

  const handleLearnMore = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Dental Services in Karur
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of dental services in Karur to meet all your oral health needs, 
              from routine cleanings to advanced treatments including prosthodontics and orthodontics.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleLearnMore(service.slug)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Smile in Karur?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Schedule your consultation today at Rasi Dental Clinic and take the first step towards optimal oral health.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
                aria-label="Book dental appointment in Karur"
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
