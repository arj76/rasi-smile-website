
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Our Practice
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated to providing exceptional dental care with a personal touch, 
              combining years of expertise with the latest dental technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Doctor Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">DR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Dr. A. R. Jagadeeshwaran
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      MDS, BDS - Lead Dentist
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Education:</strong> MDS and BDS from JKK College
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Specialization:</strong> General and Cosmetic Dentistry
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Experience:</strong> 15+ years of dedicated practice
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Welcome to Rasi Dental Clinic
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  At Rasi Dental Clinic, we believe that every patient deserves personalized, 
                  high-quality dental care. Dr. A. R. Jagadeeshwaran brings years of expertise 
                  and a gentle approach to help you achieve optimal oral health.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Our clinic is equipped with state-of-the-art technology and maintains the 
                  highest standards of sterilization and safety to ensure your comfort and well-being.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Our Mission
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    To provide compassionate, comprehensive dental care that exceeds expectations
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Our Vision
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    To be the trusted dental practice that transforms smiles and lives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
