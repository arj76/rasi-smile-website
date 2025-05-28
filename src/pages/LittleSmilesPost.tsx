
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Baby } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LittleSmilesPost = () => {
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

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🍼</div>
                <h1 className="text-4xl font-bold">Little Smiles</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-pink-600 dark:text-pink-400" />
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                    Baby Teeth Care
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Baby className="mr-4 text-pink-600" />
                Tooth Tales: Little Smiles! – Taking Care of Baby Teeth
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello, little superheroes and your amazing grown-ups! Let's talk about baby teeth, also called milk teeth. Even though they're small, they're super important!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🤔</span>
                    1. Why Do We Have Baby Teeth?
                  </h2>
                  <p className="mb-4">Baby teeth help you:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Chew yummy food</strong> like apples and carrots</li>
                    <li><strong>Talk clearly</strong> (try saying "teeth" without teeth!)</li>
                    <li><strong>Save space</strong> for your grown-up teeth later on</li>
                  </ul>
                  <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    They're like little <strong>placeholders</strong> for your big-kid smile!
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">⏰</span>
                    2. When Do They Show Up?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Most kids get their first tooth around <strong>6 months old</strong></li>
                    <li>By age 3, you'll likely have <strong>20 baby teeth</strong></li>
                    <li>Grown-up teeth start coming in around <strong>age 6</strong><br />
                    (That's when wiggly teeth start falling out!)</li>
                  </ul>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🧼</span>
                    3. Why Clean Baby Teeth If They Fall Out Anyway?
                  </h2>
                  <p className="mb-4">Great question!</p>
                  <p className="mb-4">Even though baby teeth are temporary, they can still get <strong>cavities</strong> (tiny holes caused by germs).</p>
                  <p className="mb-4">If they get sick, they can hurt and make it harder to chew or speak.</p>
                  <p className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">
                    <strong>Healthy baby teeth = healthy big teeth later!</strong>
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🪥</span>
                    4. How to Take Care of Little Smiles
                  </h2>
                  <p className="mb-4">Here's a simple daily routine:</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold mb-3">Morning & Night:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use a soft toothbrush</li>
                      <li>A rice-sized dot of <strong>kids' toothpaste</strong> (with fluoride)</li>
                      <li>Brush all the way around — front, back, and chewing sides!</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">Extra Tips:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Grown-ups: Help your little ones brush until age 6–7</li>
                      <li>Try brushing to a fun song or set a 2-minute timer!</li>
                      <li>Wipe baby gums with a soft cloth even before teeth come in</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🍭</span>
                    5. Sweet Snacks? Be Careful!
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Too many sweets</strong> can make teeth sad</li>
                    <li>Try fruits like bananas or apples instead</li>
                    <li>Drink <strong>water</strong> after eating—it helps wash away sugar bugs!</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">👨‍⚕️</span>
                    6. The Dentist is Your Tooth Friend!
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Visit the dentist by your child's <strong>first birthday</strong></li>
                    <li>Go for checkups every <strong>6 months</strong></li>
                    <li>They'll count teeth, clean them, and give high-fives!</li>
                  </ul>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🦸</span>
                    Fun Fact!
                  </h2>
                  <p className="text-xl mb-6">
                    Sharks grow thousands of teeth in their life—but we only get <strong>two sets</strong>! So let's take great care of them!
                  </p>
                  <p className="text-2xl font-bold">
                    That's it, little smile stars! Now you know why <strong>baby teeth matter</strong> and how to <strong>protect them</strong> like a pro.
                  </p>
                  <p className="text-xl mt-4">
                    Keep brushing, keep smiling, and keep learning with more <strong>Tooth Tales!</strong>
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Schedule Your Child's Visit
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

export default LittleSmilesPost;
