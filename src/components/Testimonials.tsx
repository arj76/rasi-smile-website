
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Dr. Jagadeeshwaran is an exceptional dentist! The clinic is clean, modern, and the staff is incredibly friendly. My dental implant procedure was painless and the results are amazing.",
      treatment: "Dental Implants"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "I was scared of dentists for years, but Dr. Jagadeeshwaran made me feel so comfortable. The clinic has a calming atmosphere and the treatment was gentle. Highly recommended!",
      treatment: "Root Canal Treatment"
    },
    {
      name: "Anita Reddy",
      rating: 5,
      review: "Excellent service and professional care. My teeth whitening results exceeded my expectations. The entire team at Rasi Dental Clinic is top-notch!",
      treatment: "Teeth Whitening"
    },
    {
      name: "Suresh Patel",
      rating: 5,
      review: "My family has been coming here for years. Dr. Jagadeeshwaran is great with kids and adults alike. The clinic uses the latest technology and maintains high hygiene standards.",
      treatment: "Family Dentistry"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Read testimonials from our satisfied patients who have experienced 
              exceptional dental care at Rasi Dental Clinic.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
