
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhatCausesCavitiesPost = () => {
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

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>May 27, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Kids Education
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                🦷 Tooth Tales for Kids: What Causes Cavities?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey there, little smile champions! 👋 Ever wondered why sometimes your teeth get tiny holes called cavities? Let's dive into the story of cavities and learn how to keep them away!
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-12 text-gray-700 dark:text-gray-300">
                {/* Meet the Sugar Bugs Section */}
                <section className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">🐛</span>
                    1. Meet the Sugar Bugs
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What are they?</h3>
                        <p className="text-lg leading-relaxed">
                          Tiny, invisible bugs (we call them "plaque bacteria") love to live on your teeth.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What do they eat?</h3>
                        <p className="text-lg leading-relaxed">
                          All the sweet and starchy bits left behind after you snack—like candy, cookies, chips, and even fruity juice!
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/d5557d12-86dd-407f-b703-f9319a7596eb.png" 
                        alt="Colorful candies and sweets"
                        className="w-full max-w-sm rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* Acid Attack Section */}
                <section className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">⚔️</span>
                    2. The Acid Attack
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed">
                        • When sugar bugs munch on those food bits, they make acid, a kind of tooth-etching juice.
                      </p>
                      <p className="text-lg leading-relaxed">
                        • This acid slowly "eats away" your shiny tooth enamel (the hard, outer shell).
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/fdf0a459-d87b-4877-bffc-f8ac1681ac11.png" 
                        alt="Tooth anatomy diagram showing enamel, dentin, and pulp"
                        className="w-full max-w-sm rounded-2xl shadow-lg bg-white p-4"
                      />
                    </div>
                  </div>
                </section>

                {/* Starting the Cavity Section */}
                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">🚪</span>
                    3. Starting the Cavity
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Stage 1: White Spot</h3>
                        <p className="text-lg leading-relaxed">
                          At first, you might see a tiny white spot where enamel is losing strength.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Stage 2: Tiny Hole</h3>
                        <p className="text-lg leading-relaxed">
                          If the acid attack continues, that spot turns into a small hole—a cavity!
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/991e1f2e-ced5-4c2d-8664-376be0754f1e.png" 
                        alt="Teeth with cavities showing decay"
                        className="w-full max-w-sm rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* Why Cavities Are No Fun Section */}
                <section className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">😖</span>
                    4. Why Cavities Are No Fun
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed">
                        • You might feel a sharp or tingly pain when you eat or drink.
                      </p>
                      <p className="text-lg leading-relaxed">
                        • Cavities can grow bigger and make your whole tooth hurt.
                      </p>
                      <p className="text-lg leading-relaxed">
                        • If they get really big, you might need a filling or even a visit to the dentist's "tooth hospital."
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/9fb30cc7-6103-4235-b982-e27537a0462e.png" 
                        alt="Boy with tooth pain holding his cheek"
                        className="w-full max-w-sm rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* How to Stop Cavities Section */}
                <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">🚀</span>
                    5. How to Stop Cavities in Their Tracks!
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">1. Brush Twice a Day</h3>
                        <p className="text-lg">Morning and night with fluoride toothpaste.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">2. Floss Daily</h3>
                        <p className="text-lg">To get the sugar bugs hiding between your teeth.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">3. Rinse with Water</h3>
                        <p className="text-lg">After yummy treats, a quick swish helps wash away food bits.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">4. Choose Tooth-Friendly Snacks</h3>
                        <p className="text-lg">Crunchy apples, cheese sticks, and carrots are cavity-fighters!</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">5. Visit the Dentist Regularly</h3>
                        <p className="text-lg">Your dentist can spot tiny white spots before they become big holes.</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/001c3876-fcb0-4b03-88b6-541011590617.png" 
                        alt="Woman brushing her teeth and smiling"
                        className="w-full max-w-sm rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* Fun Fact Corner Section */}
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="text-4xl mr-3">🤓</span>
                    6. Fun Fact Corner
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Did you know?</strong> Enamel is the hardest part of your body—stronger than bones! But once it's gone, your body can't make more.
                      </p>
                      <div className="mt-8 text-center">
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          Keep brushing, flossing, and smiling! 😁
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/f49feb92-4963-4f8e-9930-a43dc0450f18.png" 
                        alt="Beautiful healthy smile showing white teeth"
                        className="w-full max-w-sm rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
                  <h3 className="text-3xl font-bold mb-4">
                    Ready to Fight Cavities Like a Hero? 🦸‍♀️🦸‍♂️
                  </h3>
                  <p className="text-xl mb-8 opacity-90">
                    Visit our dental team for tips, checkups, and to keep your smile super strong!
                  </p>
                  <button
                    onClick={() => navigate('/#contact')}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                  >
                    Schedule Your Visit
                  </button>
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

export default WhatCausesCavitiesPost;
