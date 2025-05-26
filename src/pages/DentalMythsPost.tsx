
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DentalMythsPost = () => {
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
                src="/lovable-uploads/b60f1856-1a5b-441c-9317-cc3ec6690378.png" 
                alt="Debunking Common Dental Myths"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>April 10, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Dental Myths
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Debunking Common Dental Myths: What You Should Really Know
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                When it comes to dental health, there's no shortage of advice — but not all of it is accurate. Misinformation can lead to bad habits, unnecessary fear, or missed opportunities to keep your smile healthy. In this blog post, we're busting some of the most common dental myths and revealing the truth behind them.
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 1: Brushing harder means cleaner teeth
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Brushing too hard can actually harm your teeth and gums. It wears down enamel and causes gum recession. Use a soft-bristled toothbrush and gentle, circular motions for effective cleaning.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 2: If my teeth don't hurt, they're healthy
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Dental problems like cavities or gum disease often start silently without pain. Regular check-ups help catch issues early, before they become painful or more serious.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 3: Sugar is the only cause of cavities
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>While sugar contributes to tooth decay, it's not the only factor. Starchy foods, acidic drinks, poor oral hygiene, and even dry mouth can all increase your risk. The key is how long sugars stay on your teeth — not just how much you consume.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 4: Whitening toothpaste can whiten your teeth significantly
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Whitening toothpastes may remove surface stains, but they can't change the natural color of your teeth. For noticeable results, professional whitening treatments from a dentist are more effective.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 5: You don't need to visit the dentist if you're not in pain
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Preventive care is crucial. Dentists can spot early signs of decay, gum disease, or oral cancer — often before you feel any symptoms. A visit every 6 months is recommended for most people.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 6: Baby teeth don't matter — they're going to fall out anyway
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Healthy baby teeth are essential. They help with proper chewing, speech development, and act as placeholders for permanent teeth. Decay in baby teeth can lead to infections and alignment issues.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Myth 7: Flossing isn't necessary if you brush well
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4">
                    <p className="font-semibold text-red-700 dark:text-red-400 mb-2">Truth:</p>
                    <p>Brushing cleans about 60% of the tooth surface. Flossing removes plaque and food particles between teeth where toothbrushes can't reach. It's essential for healthy gums and preventing cavities between teeth.</p>
                  </div>
                </section>

                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Final Thoughts
                  </h2>
                  <p className="mb-4">
                    Don't let myths get in the way of a healthy smile. Always rely on advice from dental professionals and stay informed with evidence-based information. Taking proper care of your teeth isn't just about looking good — it's a key part of your overall health.
                  </p>
                  <p className="mb-6">
                    Have a question about your dental care? Schedule a check-up with our dentist today!
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

export default DentalMythsPost;
