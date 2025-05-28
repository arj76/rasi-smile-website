
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TreatmentGuidePost = () => {
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

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚕️</div>
                <h1 className="text-4xl font-bold">Treatment Guide</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                    Treatment Guide
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Heart className="mr-4 text-indigo-600" />
                Tooth Tales: Dental Treatments Made Easy!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey there, smile superheroes! 🦸‍♀️🦸‍♂️ Ever wonder what the dentist does when you sit in that cool chair? Let's zoom into the world of dental treatments—explained just for YOU!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">📋</span>
                    1. The Check-Up Adventure
                  </h2>
                  <p className="mb-4">This is like a <strong>smile check</strong>!</p>
                  <p className="mb-4">Your dentist looks at your teeth, gums, and tongue to make sure everything is clean and healthy.</p>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    🧐 "Say ahhh!" – It's like a mini tooth treasure hunt!
                  </p>
                </section>

                <section className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">✨</span>
                    2. The Cleaning Party
                  </h2>
                  <p className="mb-4">The dental hygienist gives your teeth a <strong>super scrub</strong> to remove sticky stuff called <em>plaque</em>.</p>
                  <p className="mb-4">Then comes the tickly toothbrush and a special <em>gritty paste</em> that makes your teeth shine!</p>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    🎉 It feels like a bubble bath… for your mouth!
                  </p>
                </section>

                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🛡️</span>
                    3. Fluoride Treatment – Your Tooth Shield
                  </h2>
                  <p className="mb-4">Fluoride is like <strong>armor for your teeth</strong>!</p>
                  <p className="mb-4">It helps keep sugar bugs (germs) away and makes enamel strong.</p>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                    It comes in cool flavors like bubblegum or cherry. Yum!
                  </p>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🦷</span>
                    4. Fillings – Fixing Tiny Holes
                  </h2>
                  <p className="mb-4">Sometimes, teeth get little holes called <strong>cavities</strong>.</p>
                  <p className="mb-4">If that happens, the dentist gently cleans it out and fills it with a special material.</p>
                  <p className="mb-4">🎨 It's like patching up a crack with a super-cool paste.</p>
                  <p className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">
                    And don't worry—they'll keep you comfy the whole time!
                  </p>
                </section>

                <section className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🧀</span>
                    5. Dental Sealants – Sticky Sugar Stoppers
                  </h2>
                  <p className="mb-4">Sealants are like <strong>invisible raincoats</strong> for your back teeth.</p>
                  <p className="mb-4">They cover the grooves so food and germs can't hide there.</p>
                  <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    It takes just a few minutes—and it's completely painless!
                  </p>
                </section>

                <section className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">😴</span>
                    6. What's Laughing Gas?
                  </h2>
                  <p className="mb-4">Sometimes, kids feel a little nervous. That's okay!</p>
                  <p className="mb-4">The dentist might use a special gas called <strong>laughing gas</strong> to help you relax.</p>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                    You breathe it in through a funny nose mask—and it makes the visit feel super chill 😌
                  </p>
                </section>

                <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">😬</span>
                    7. What About Braces?
                  </h2>
                  <p className="mb-4">If your teeth are crowded, spaced out, or a bit twisty, the dentist might suggest <strong>braces</strong> or aligners.</p>
                  <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                    They help move teeth into the right place so your smile gets even cooler over time! 🧲🦷
                  </p>
                </section>

                <section className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🦷</span>
                    8. When a Tooth Must Go (Tooth Fairy Time!)
                  </h2>
                  <p className="mb-4">Sometimes a tooth is too wiggly, or it's causing trouble.</p>
                  <p className="mb-4">The dentist might give it a gentle wiggle and pull.</p>
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                    It doesn't hurt, and guess what? The Tooth Fairy might visit you that night! 🧚‍♀️
                  </p>
                </section>

                <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🌟</span>
                    You're the Hero!
                  </h2>
                  <p className="text-xl mb-6">
                    Dentists aren't scary—they're <strong>smile helpers</strong>!
                  </p>
                  <p className="text-lg mb-6">
                    They wear cool gloves and masks and use tiny tools to keep your teeth strong and happy.
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    So next time you visit the dentist, walk in like a <strong>tooth champion</strong>!
                  </p>
                  <p className="text-xl mb-8">
                    You've got this! 💪😁
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Book Your Hero Visit
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

export default TreatmentGuidePost;
