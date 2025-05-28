
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DentalKnowHowPost = () => {
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

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🧠</div>
                <h1 className="text-4xl font-bold">Dental Know-How</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Dental Education
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Brain className="mr-4 text-blue-600" />
                Tooth Tales for Kids: Dental Know-How 101!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey there, curious chompers! 😄 Ever wonder what goes on inside your mouth or what the dentist is really doing with all those cool tools? Let's explore the awesome world of teeth!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🦷</span>
                    1. Meet Your Teeth!
                  </h2>
                  <p className="mb-4">You have <strong>32 teeth</strong> as a grown-up—but kids usually have <strong>20 baby teeth</strong> first!</p>
                  <p className="mb-4">Each type has a job to do:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🪥 Incisors (front teeth)</h3>
                      <p>Help you bite</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🐶 Canines</h3>
                      <p>Tear your food</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🍔 Molars</h3>
                      <p>Grind and chew food into tiny pieces</p>
                    </div>
                  </div>
                </section>

                <section className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🕳️</span>
                    2. What's a Cavity, Really?
                  </h2>
                  <p className="mb-4">A <strong>cavity</strong> is a tiny hole in your tooth made by <strong>sugar bugs (bacteria)</strong> that love leftover food.</p>
                  <p className="mb-4">They create <strong>acid</strong> that wears away your enamel (the strong outside layer).</p>
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                    That's why brushing is SO important—it's like giving your teeth a shield! ⚔️
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">💦</span>
                    3. Your Super Saliva
                  </h2>
                  <p className="mb-4">Your spit is more powerful than you think!</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>It <strong>washes away</strong> leftover food</li>
                    <li>It <strong>fights germs</strong></li>
                    <li>It even <strong>helps repair</strong> your enamel (like a mini mouth mechanic!)</li>
                  </ul>
                </section>

                <section className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🔧</span>
                    4. Tools of the Tooth Trade
                  </h2>
                  <p className="mb-4">Let's decode the cool tools at the dentist's office:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🔍 Mirror</h3>
                      <p>To peek behind and between your teeth</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🪛 Explorer (the pokey one!)</h3>
                      <p>Checks for soft spots or cavities</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🌀 Suction Straw</h3>
                      <p>Slurps up water and spit—fun, right?</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold">🌀 Polisher</h3>
                      <p>Like a tooth spa scrubber that makes teeth shiny!</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🪣</span>
                    5. What's a Filling?
                  </h2>
                  <p className="mb-4">If you get a cavity, the dentist will clean it out and fill the hole with <strong>tooth-colored material</strong> to make your tooth strong again.</p>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    It's quick, painless (thanks to numbing gel), and helps save your tooth from bigger trouble!
                  </p>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🦸</span>
                    6. Brushing & Flossing – Your Daily Defense!
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Brush twice a day</strong> with fluoride toothpaste (pea-sized amount)</li>
                    <li><strong>Floss once a day</strong> to chase away food bits hiding between your teeth</li>
                    <li>Use a <strong>soft brush</strong> and gentle circles—it's not a race!</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🧑‍⚕️</span>
                    7. Checkups Are Cool!
                  </h2>
                  <p className="mb-4">Dentists help you:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Catch cavities early</li>
                    <li>Learn better brushing tricks</li>
                    <li>Get sparkly clean teeth (they remove sticky plaque you can't see!)</li>
                  </ul>
                  <p className="text-lg font-semibold">
                    Visit your dentist <strong>every 6 months</strong> to keep your smile shining!
                  </p>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🤓</span>
                    Fun Fact!
                  </h2>
                  <p className="text-xl mb-6">
                    Your <strong>enamel</strong> is the hardest thing in your whole body—even harder than bones! But it can't grow back, so treat it like treasure!
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    Now you're a <strong>Dental Detective!</strong>
                  </p>
                  <p className="text-xl">
                    Magnify those brushing powers, zap those sugar bugs, and keep learning with more Tooth Tales!
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Schedule a Learning Visit
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

export default DentalKnowHowPost;
