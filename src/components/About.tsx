
import { Award, Users, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Dr. A. R. Jagadeeshwaran - Top Dentist in Karur
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated to providing exceptional dental care in Karur with a personal touch, 
              combining years of expertise in general dentistry and prosthodontics with the latest dental technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Your Trusted Dental Care Partner in Karur
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Dr. A. R. Jagadeeshwaran brings extensive experience in <strong>General and Prosthodontics</strong> to Karur, 
                  ensuring comprehensive dental care for patients of all ages. As a leading dentist in Karur, he combines 
                  expertise with patient comfort, making every treatment tailored to meet individual needs.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At Rasi Dental Clinic in Karur, we believe that a healthy smile is the foundation of 
                  confidence and overall well-being. Our state-of-the-art dental facility and 
                  compassionate approach make dental care a comfortable experience for all Karur residents.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Expert Dental Care in Karur
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Years of specialized training and continuous education in modern dental practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Patient-Centered Approach
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Every treatment plan is customized to address individual patient needs and concerns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Compassionate Dental Care
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Creating a comfortable, anxiety-free environment for all dental procedures in Karur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Modern Dental Technology
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Utilizing the latest dental technologies for precise and efficient treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor's Photo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-3xl overflow-hidden">
                <img 
                  src="/lovable-uploads/7467c5c7-85c2-4f97-88f0-aa7e5dff6231.png" 
                  alt="Dr. A. R. Jagadeeshwaran - Best Dentist in Karur, Tamil Nadu specializing in General Dentistry and Prosthodontics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  Dr. A. R. Jagadeeshwaran
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  General and Prosthodontics Specialist
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-700 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-800 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
