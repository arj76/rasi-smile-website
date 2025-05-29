
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ModernTechPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // SEO optimization for blog post
  useEffect(() => {
    document.title = "Modern Dental Technology: What's New? | Rasi Dental Clinic Karur";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Discover the latest modern dental technology trends in Karur. From digital impressions to AI dentistry - learn what\'s new at Rasi Dental Clinic.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://rasi-dental-clinic.lovable.app/blog/modern-dental-technology-whats-new');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark/Light Mode Toggle */}
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
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-300"
              aria-label="Back to Rasi Dental Clinic homepage"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            {/* Hero Image */}
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src="/lovable-uploads/dceedb36-277f-4319-ba96-4288fbbf07eb.png" 
                alt="Modern dental technology equipment at Rasi Dental Clinic in Karur - digital impressions, 3D scanning, laser dentistry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <time dateTime="2025-05-06">May 6, 2025</time>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Technology
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Modern Dental Technology: What's New in Karur?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Dentistry has come a long way from the days of uncomfortable chairs, loud drills, and long recovery times. Today, dental technology is rapidly evolving, making visits to the dentist in Karur more comfortable, accurate, and efficient than ever before. But what exactly is new in the world of modern dental care?
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    1. Digital Impressions and 3D Scanning in Karur
                  </h2>
                  <p className="mb-6">
                    Say goodbye to the old gooey impression molds. At Rasi Dental Clinic in Karur, with intraoral scanners, dentists can now take highly accurate digital impressions of your teeth. These scans are quicker, more comfortable, and more precise. They are often used for crowns, bridges, and Invisalign treatments.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    2. Teledentistry Services
                  </h2>
                  <p className="mb-6">
                    Teledentistry became popular during the COVID-19 pandemic and is here to stay. It allows patients in Karur to consult dentists virtually for minor issues, post-op checkups, and second opinions. This saves time and makes dental care more accessible, especially in rural areas around Karur.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    3. Laser Dentistry in Karur
                  </h2>
                  <p className="mb-6">
                    Lasers are revolutionizing many dental procedures in Karur. They can be used for gum reshaping, cavity removal, teeth whitening, and even treating oral infections. Laser dentistry is minimally invasive, causes less pain, and promotes faster healing.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    4. 3D Printing in Dentistry
                  </h2>
                  <p className="mb-6">
                    3D printing is changing how dentists in Karur create crowns, dentures, night guards, and aligners. It significantly cuts down waiting times and allows for same-day restorations. This means fewer visits and faster treatment for patients.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    5. AI and Machine Learning in Dental Diagnosis
                  </h2>
                  <p className="mb-6">
                    Artificial Intelligence is starting to play a role in diagnosing dental problems. AI can analyze X-rays, detect cavities, and even suggest treatment plans. This helps dentists in Karur make more accurate and timely decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    6. Cone Beam CT Scans (CBCT)
                  </h2>
                  <p className="mb-6">
                    CBCT provides 3D images of your teeth, jaw, and nerves. It's extremely helpful in implant planning, orthodontics, and detecting complex dental issues that traditional X-rays might miss. Available at advanced dental clinics in Karur.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    7. Smart Toothbrushes and Dental Apps
                  </h2>
                  <p className="mb-6">
                    Technology is coming home too! Smart toothbrushes track brushing habits, give feedback, and connect to mobile apps to help users improve their oral hygiene. Some even use AI to detect missed spots.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    8. Robotic Dental Surgery
                  </h2>
                  <p className="mb-6">
                    Though still in its early stages, robot-assisted dental surgeries are beginning to appear in specialized clinics. Robots can help in placing implants with extreme precision, reducing the chance of human error.
                  </p>
                </section>

                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Experience Modern Dentistry in Karur
                  </h2>
                  <p className="mb-4">
                    The future of dentistry is bright, high-tech, and patient-friendly. From digital scans to AI-powered diagnoses, modern dental technology is making procedures faster, safer, and more comfortable. Whether you're due for a check-up or planning a cosmetic procedure in Karur, you'll likely experience some of these innovations at your next visit.
                  </p>
                  <p className="mb-6">
                    So the next time you walk into Rasi Dental Clinic in Karur, don't be surprised if it feels more like a tech lab than a traditional clinic—because the future of dentistry is already here!
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                      aria-label="Experience modern dentistry at Rasi Dental Clinic in Karur"
                    >
                      Experience Modern Dentistry in Karur
                    </button>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModernTechPost;
