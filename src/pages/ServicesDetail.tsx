
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesDetail = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // SEO metadata based on service type
  useEffect(() => {
    const titles = {
      'general-dentistry': 'General Dentistry Services in Karur | Rasi Dental Clinic',
      'orthodontics': 'Orthodontics & Braces in Karur | Rasi Dental Clinic',
      'dental-implants': 'Dental Implants in Karur | Rasi Dental Clinic',
      'prosthodontics': 'Prosthodontics Services in Karur | Rasi Dental Clinic'
    };

    const descriptions = {
      'general-dentistry': 'Comprehensive general dentistry services in Karur including cleanings, fillings, root canals. Expert dental care by Dr. A. R. Jagadeeshwaran.',
      'orthodontics': 'Professional orthodontic treatments in Karur including braces and clear aligners. Straighten your teeth with expert orthodontic care.',
      'dental-implants': 'High-quality dental implants in Karur. Permanent tooth replacement solutions that look and feel natural. Expert implant dentistry.',
      'prosthodontics': 'Expert prosthodontic services in Karur including crowns, bridges, dentures. Restore your smile with precision dental care.'
    };

    document.title = titles[serviceType as keyof typeof titles] || 'Dental Services in Karur | Rasi Dental Clinic';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[serviceType as keyof typeof descriptions] || 'Professional dental services in Karur by Dr. A. R. Jagadeeshwaran at Rasi Dental Clinic.');
    }
  }, [serviceType]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const servicesContent = {
    prosthodontics: {
      title: "Prosthodontics in Karur – Restoring Smiles with Precision",
      icon: "👑",
      content: {
        description: "Prosthodontics is the dental specialty focused on restoring and replacing lost or damaged teeth. At Rasi Dental Clinic in Karur, whether it's due to decay, injury, or age, our goal is to help you regain your smile's function, beauty, and comfort.",
        services: [
          "🦷 **Crowns and Bridges in Karur:** Repair damaged teeth or replace missing ones with natural-looking, durable restorations.",
          "😁 **Dentures (Full and Partial) in Karur:** Comfortable and custom-fitted for daily use and confident smiles.",
          "💎 **Veneers in Karur:** Thin shells placed over the front of teeth to improve appearance instantly.",
          "🛠 **Full Mouth Reconstruction in Karur:** Complete restoration tailored to your oral health needs."
        ],
        benefits: [
          "Expert prosthodontic care using the latest technology in Karur",
          "Aesthetic results that look and feel natural",
          "Long-lasting dental solutions with personalized planning"
        ],
        tagline: "Rediscover the power of a perfect smile in Karur. Our prosthodontic care is more than treatment — it's transformation."
      }
    },
    orthodontics: {
      title: "Orthodontics in Karur – Aligning Teeth, Transforming Lives",
      icon: "📐",
      content: {
        description: "Orthodontics deals with correcting irregularities in teeth and jaws, including crowded or crooked teeth, overbites, underbites, and more. Get expert orthodontic treatment in Karur.",
        services: [
          "🎯 **Braces (Metal & Ceramic) in Karur:** Time-tested methods for precise tooth movement",
          "🌟 **Clear Aligners (e.g., Invisalign) in Karur:** Nearly invisible trays for a discreet treatment journey",
          "🔄 **Retainers in Karur:** Maintain alignment after braces or aligners",
          "🧒 **Early Intervention for Kids in Karur:** Prevent orthodontic issues before they become severe"
        ],
        benefits: [
          "Straighter teeth and a more confident smile",
          "Better bite and jaw function",
          "Easier oral hygiene and healthier gums"
        ],
        tagline: "A well-aligned smile is a healthy smile. Let's bring out the best in yours in Karur!"
      }
    },
    "general-dentistry": {
      title: "General Dentistry in Karur – Comprehensive Care for All Ages",
      icon: "🦷",
      content: {
        description: "General dentistry focuses on the prevention, diagnosis, and treatment of a wide range of dental issues. It's the foundation of good oral health for all Karur residents.",
        services: [
          "🧼 **Professional Cleanings and Exams in Karur:** Keep your teeth healthy and detect problems early",
          "🦠 **Cavity Fillings in Karur:** Quick, comfortable treatment to restore your tooth",
          "🔍 **Oral Cancer Screenings in Karur:** Early detection saves lives",
          "🦷 **Root Canal Therapy in Karur:** Pain-relieving treatment for infected teeth",
          "👶 **Pediatric Dentistry in Karur:** Gentle dental care tailored for kids"
        ],
        benefits: [
          "Prevents future dental problems",
          "Saves money and discomfort in the long run",
          "Builds lifelong habits for healthy smiles in Karur"
        ],
        tagline: "Prevention is better than cure. Let's work together for a lifetime of healthy smiles in Karur."
      }
    },
    "dental-implants": {
      title: "Dental Implants in Karur – Permanent Solutions for Missing Teeth",
      icon: "🔧",
      content: {
        description: "Dental implants are artificial tooth roots placed into your jaw to hold a replacement tooth or bridge. They look, feel, and function just like real teeth. Get expert dental implant treatment in Karur.",
        services: [
          "🌟 **Natural Look & Feel:** Matches your natural teeth in both appearance and function",
          "🏋️ **Strong & Durable:** Long-lasting with proper care",
          "🗣 **No Speech Issues:** Unlike dentures, implants won't shift or slip",
          "🍎 **Eat with Confidence:** Enjoy your favorite foods without worry"
        ],
        benefits: [
          "Consultation & Planning – Custom strategy for your unique needs in Karur",
          "Implant Placement – Carried out with precision and care",
          "Crown Restoration – A beautiful tooth is placed on top of the implant"
        ],
        tagline: "Smile Securely, Smile Forever in Karur. Dental implants restore more than teeth — they restore confidence."
      }
    }
  };

  const service = servicesContent[serviceType as keyof typeof servicesContent];

  if (!service) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        <Header />
        <div className="pt-24 text-center bg-white dark:bg-gray-900">
          <h1 className="text-2xl text-gray-800 dark:text-white">Dental Service not found in Karur</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Go Back Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      <Header />
      
      <main className="pt-24 pb-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-300"
              aria-label="Back to dental services in Karur"
            >
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </button>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl" role="img" aria-label={service.title}>{service.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                {service.title}
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Description */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  What is {serviceType === "general-dentistry" ? "General Dentistry" : serviceType === "dental-implants" ? "Dental Implants" : service.title.split(" – ")[0]}?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {service.content.description}
                </p>
              </div>

              {/* Services/Features */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {serviceType === "dental-implants" ? "Why Choose Dental Implants in Karur?" : `Our ${service.title.split(" – ")[0]} Services Include:`}
                </h2>
                <div className="space-y-4">
                  {service.content.services.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p 
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatText(item) }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {serviceType === "dental-implants" ? "Our Implant Procedure in Karur Includes:" : serviceType === "orthodontics" ? "Benefits of Orthodontic Treatment in Karur:" : "Why Choose Rasi Dental Clinic in Karur?"}
                </h2>
                <div className="space-y-3">
                  {service.content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-600 dark:text-green-400 text-xl">✅</span>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  ✨ {service.content.tagline}
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      window.scrollTo(0, 0);
                      navigate("/");
                      setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
                  aria-label={`Book dental consultation in Karur for ${service.title.split(" – ")[0]}`}
                >
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDetail;
