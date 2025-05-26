
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DentalCheckupsPost = () => {
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
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            {/* Hero Image */}
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src="/lovable-uploads/62e85c5b-b4a1-4801-afc2-ffb8310b30dc.png" 
                alt="The Importance of Regular Dental Checkups"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>March 22, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Preventive Care
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                The Importance of Regular Dental Checkups
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                In our fast-paced lives, it's easy to overlook routine appointments, especially those that don't seem immediately critical. Dental checkups often fall into this category. However, dismissing the importance of regular visits to your dentist is a significant oversight, one that can have far-reaching consequences not just for your oral health, but for your entire body.
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Beyond the Surface: Early Detection as a Lifesaver
                  </h2>
                  <p className="mb-4">
                    Think of your dental checkup as a crucial preventative health screening. While you might only notice a cavity when it starts to ache, or gum inflammation when your gums bleed, your dentist possesses the expertise and tools to identify these issues in their nascent stages.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Cavities</h3>
                  <p className="mb-4">
                    What starts as a tiny spot of decay can, if left unaddressed, erode the tooth structure, leading to severe pain, infection, and potentially requiring extensive treatments like root canals or even extraction. Early detection means a simple, quick filling, preserving your natural tooth.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Gum Disease (Gingivitis & Periodontitis)</h3>
                  <p className="mb-4">
                    The insidious nature of gum disease is that it often progresses silently. Gingivitis, the initial stage, presents as mild inflammation and bleeding gums. Without professional intervention, it can escalate to periodontitis, a severe infection that destroys the bone supporting your teeth, ultimately leading to tooth mobility and loss.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Other Oral Conditions</h3>
                  <p className="mb-6">
                    Beyond common issues, dentists are trained to look for signs of oral cancer, precancerous lesions, temporomandibular joint (TMJ) disorders, and even issues related to teeth grinding (bruxism). Early diagnosis of these conditions can dramatically improve treatment outcomes and quality of life.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    The Power of Professional Cleaning: A Deep Dive into Oral Hygiene
                  </h2>
                  <p className="mb-4">
                    No matter how meticulously you brush and floss, there are areas in your mouth that are simply inaccessible to your toothbrush bristles or dental floss. These include tight spaces between teeth, below the gum line, and the rough surfaces of molars.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Plaque</h3>
                  <p className="mb-4">
                    A sticky, colorless film of bacteria that constantly forms on your teeth. If not removed daily, it hardens into tartar.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Tartar (Calculus)</h3>
                  <p className="mb-6">
                    A calcified, rough deposit that adheres firmly to tooth surfaces. Tartar acts as a magnet for more plaque and provides a rough surface that irritates gums and makes them more susceptible to infection. It cannot be removed by brushing or flossing at home.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    The Mouth-Body Connection: Your Oral Health as a Health Barometer
                  </h2>
                  <p className="mb-4">
                    The concept of the "mouth-body connection" is gaining increasing recognition in the medical community. Your oral cavity is not an isolated system; it's an integral part of your overall health.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Cardiovascular Disease</h3>
                      <p>Studies have shown a strong correlation between severe gum disease and an increased risk of heart attack, stroke, and other cardiovascular problems.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Diabetes</h3>
                      <p>There's a bidirectional relationship between diabetes and gum disease. Diabetics are more susceptible to gum disease, and severe gum disease can make it harder to control blood sugar levels.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Respiratory Infections</h3>
                      <p>Bacteria from the mouth can be aspirated into the lungs, potentially leading to respiratory infections like pneumonia.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Pregnancy Complications</h3>
                      <p>Periodontal disease in pregnant women has been linked to adverse pregnancy outcomes, including preterm birth and low birth weight.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Empowering You: Personalized Oral Hygiene Guidance
                  </h2>
                  <p className="mb-4">
                    While general guidelines for brushing and flossing are helpful, a dental professional can offer advice tailored specifically to your needs.
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Technique Refinement:</strong> They can demonstrate the most effective brushing and flossing techniques for your unique oral anatomy.</li>
                    <li><strong>Product Recommendations:</strong> Based on your specific concerns, they can recommend appropriate toothpastes, mouthwashes, and interdental cleaning tools.</li>
                    <li><strong>Dietary Counseling:</strong> Your dentist can discuss how your dietary habits impact your oral health and suggest healthier alternatives.</li>
                    <li><strong>Lifestyle Factors:</strong> They can also advise on the impact of lifestyle choices like smoking or excessive alcohol consumption.</li>
                  </ul>
                </section>

                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    The Ultimate Investment: Prevention Over Cure
                  </h2>
                  <p className="mb-4">
                    Ultimately, regular dental checkups are not an expense; they are an invaluable investment in your health, comfort, and financial well-being. Proactive care significantly reduces the likelihood of experiencing painful dental emergencies, extensive and costly treatments, and the potential systemic health complications linked to poor oral hygiene.
                  </p>
                  <p className="mb-6">
                    By committing to routine dental visits, you are choosing to maintain a healthy, confident smile, preserve your natural teeth for a lifetime, protect your overall health and well-being, and save money on potentially expensive future treatments.
                  </p>
                  <p className="mb-6">
                    Don't wait for pain to be your motivator. Make your next dental checkup a priority and empower yourself with the gift of optimal oral health. Your smile, and your body, will thank you for it.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Schedule Your Checkup
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

export default DentalCheckupsPost;
