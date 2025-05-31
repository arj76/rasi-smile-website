
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                Best Dentist in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Karur
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience exceptional dental care at Rasi Dental Clinic in Karur with Dr. A. R. Jagadeeshwaran. 
                We provide comprehensive dental solutions including general dentistry, prosthodontics, orthodontics, and dental implants in a comfortable, modern environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Book dental appointment in Karur"
              >
                Book Appointment
              </button>
              <button
                onClick={scrollToAbout}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                aria-label="Meet Dr. A. R. Jagadeeshwaran - Dentist in Karur"
              >
                Meet the Doctor
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5000+</div>
                <div className="text-gray-600 dark:text-gray-300">Happy Patients in Karur</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-white">R</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Rasi Dental Clinic
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Advanced Dental Care in Karur
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-600 rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            aria-label="Scroll to learn more about Rasi Dental Clinic"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
