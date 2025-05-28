
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DidYouKnowPost = () => {
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
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🤔</div>
                <h1 className="text-4xl font-bold">Did You Know?</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-yellow-600 dark:text-yellow-400" />
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    Fun Facts
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Lightbulb className="mr-4 text-yellow-600" />
                Tooth Tales: Did You Know? Fun Tooth Facts for Curious Kids!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey little explorers! Get ready to WOW your friends and family with these super cool and surprising facts about teeth. Let's jump in!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <div className="grid gap-6">
                  <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🦷</span>
                      1. Your Teeth Are Super Strong!
                    </h2>
                    <p className="mb-3">Did you know your teeth are <strong>harder than your bones</strong>?</p>
                    <p>The outside part, called <strong>enamel</strong>, is like a super shield. But even superheroes need care—so don't skip brushing!</p>
                  </section>

                  <section className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🍼</span>
                      2. Babies Are Born With Teeth... Hiding!
                    </h2>
                    <p>Even though babies don't <em>look</em> like they have teeth, they're already growing <em>under the gums</em> before birth. Surprise!</p>
                  </section>

                  <section className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🧚</span>
                      3. The Tooth Fairy Has a Big Job!
                    </h2>
                    <p>Some kids say the Tooth Fairy collects <strong>millions of teeth</strong> every night!</p>
                    <p>That's a lot of flying and glitter dust!</p>
                  </section>

                  <section className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🐊</span>
                      4. Crocodiles Don't Brush—But They Get Help!
                    </h2>
                    <p className="mb-3">Crocodiles have a special friend called the <strong>"cleaner bird"</strong> that picks food out of their teeth.</p>
                    <p>No need to try this at home—just use your toothbrush!</p>
                  </section>

                  <section className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🕵️</span>
                      5. No Two Smiles Are the Same!
                    </h2>
                    <p className="mb-3">Just like your fingerprints, your teeth are <strong>unique</strong>.</p>
                    <p>No one else has your exact tooth pattern—not even your twin!</p>
                  </section>

                  <section className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">⏳</span>
                      6. Teeth Can Last a Lifetime
                    </h2>
                    <p className="mb-3">With good brushing, healthy food, and regular dentist visits, your grown-up teeth can stay strong <strong>forever</strong>!</p>
                    <p>It's like keeping a treasure chest safe!</p>
                  </section>

                  <section className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🪥</span>
                      7. Toothbrushes Were Once Made from... Animal Hair?!
                    </h2>
                    <p className="mb-3">Before plastic brushes, people used <strong>boar bristles</strong> (that's pig hair!)</p>
                    <p>Yuck! Today's brushes are much softer and safer!</p>
                  </section>

                  <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🧀</span>
                      8. Cheese = Tooth Hero!
                    </h2>
                    <p className="mb-3">Cheese helps protect your teeth from acid attacks.</p>
                    <p>It's true—your teeth LOVE cheese!</p>
                  </section>

                  <section className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🍬</span>
                      9. Sugar Bugs Are Real (Kind Of!)
                    </h2>
                    <p className="mb-3">Tiny bacteria in your mouth love sugar.</p>
                    <p className="mb-3">They make <strong>acid</strong> that hurts teeth.</p>
                    <p>Brushing = chasing away the sugar bugs!</p>
                  </section>

                  <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="text-3xl mr-3">🦷</span>
                      10. You Only Get Two Sets of Teeth!
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 mb-3">
                      <li>First: Your <strong>baby teeth</strong> (20 total)</li>
                      <li>Then: Your <strong>adult teeth</strong> (32 total)</li>
                    </ul>
                    <p>No do-overs—so take care of them!</p>
                  </section>
                </div>

                <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    That's a wrap, smile stars! ⭐
                  </h2>
                  <p className="text-xl mb-6">
                    The more you know, the better you can take care of your <strong>awesome teeth</strong>. Keep brushing, keep learning, and remember—your smile is <em>magical!</em>
                  </p>
                  <p className="text-lg mb-8">
                    Want more cool tooth facts? Come back soon for another Tooth Tale!
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Ask Us More Questions
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

export default DidYouKnowPost;
