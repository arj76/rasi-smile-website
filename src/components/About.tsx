import { Award, Users, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const consultants = [
    {
      name: "Dr. Kavin",
      specialization: "Minor Oral Surgeon",
      experience: "20+ years",
      quote: "I was created to create beautiful smiles.",
      image: "/lovable-uploads/aedb9b21-3679-4377-b394-7cc93a6dfc1c.png",
      alt: "Male dentist icon"
    },
    {
      name: "Dr. Bhuveneshwar",
      specialization: "Orthodontist",
      experience: "15+ years",
      quote: "The new life begins with a confident smile.",
      image: "/lovable-uploads/aedb9b21-3679-4377-b394-7cc93a6dfc1c.png",
      alt: "Male dentist icon"
    },
    {
      name: "Dr. Vijaya Raghavan",
      specialization: "Pediatric Dentistry",
      experience: "15+ years",
      quote: "Use your smile to change the world. Don't let the world change your smile.",
      image: "/lovable-uploads/aedb9b21-3679-4377-b394-7cc93a6dfc1c.png",
      alt: "Male dentist icon"
    },
  ];

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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
                  src="/lovable-uploads/31a096fb-4264-4ee8-8ffc-89b485201870.png" 
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

          {/* Meet Our Consultants Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Meet Our Consultants
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our experienced team of dental specialists is dedicated to providing you with the highest quality care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {consultants.map((consultant, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in max-w-sm w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={consultant.image} 
                        alt={consultant.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {consultant.name}
                    </h4>
                    
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      Specialization: {consultant.specialization}
                    </p>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Years of experience: {consultant.experience}
                    </p>
                    
                    <blockquote className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                      "{consultant.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assistant Doctor Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Assistant Doctor
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're proud to have skilled and supportive professionals who ensure every patient receives the best care.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/b27d6f56-197c-47d7-bd8c-04ea5f8dcaf6.png" 
                      alt="Female dentist icon for Dr. Nishita"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    Dr. Nishita
                  </h4>
                  
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
                    Qualification: BDS
                  </p>
                  
                  <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic leading-relaxed border-l-4 border-blue-400 pl-4">
                    "Life is short, smile while you have teeth. If not, call us."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
