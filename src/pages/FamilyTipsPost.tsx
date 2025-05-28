
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FamilyTipsPost = () => {
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

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                <h1 className="text-4xl font-bold">Family Tips</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-green-600 dark:text-green-400" />
                  <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Family Care
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Users className="mr-4 text-green-600" />
                Tooth Tales: Family Tips for Happy, Healthy Smiles!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey awesome families! Taking care of teeth is a team effort, and the best place to build healthy habits is right at home. Here are some fun, simple tips to make dental care a part of your family's daily routine!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🪥</span>
                    1. Brush Together, Smile Together
                  </h2>
                  <p className="mb-4">Make brushing time <strong>family time</strong>!</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Brush side-by-side for 2 minutes twice a day</li>
                    <li>Use a <strong>toothbrushing song</strong> or set a fun timer ⏲️</li>
                    <li>Let kids pick their own colorful toothbrushes and flavors!</li>
                  </ul>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      💬 "Let's all brush while the song plays – ready, set, sparkle!"
                    </p>
                  </div>
                </section>

                <section className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">⏰</span>
                    2. Create a Smile Schedule
                  </h2>
                  <p className="mb-4">Kids thrive with routine!</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>🦷 Brush teeth after breakfast and before bed</li>
                    <li>🧼 Floss once a day (yes, even kids need to learn!)</li>
                    <li>📅 Mark dentist checkups on a calendar with stickers</li>
                  </ul>
                  <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-lg">
                    <p className="font-semibold">💡 Bonus tip: Make a <strong>toothbrushing chart</strong> and reward streaks!</p>
                  </div>
                </section>

                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🍎</span>
                    3. Pack Smile-Friendly Snacks
                  </h2>
                  <p className="mb-4">Teeth love snacks like:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Great Choices:</h3>
                      <ul className="space-y-1">
                        <li>🧀 Cheese cubes (calcium boost!)</li>
                        <li>🍓 Strawberries and apples (nature's toothbrushes!)</li>
                        <li>🥕 Crunchy veggies</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Avoid:</h3>
                      <p>Sticky candy and sugary drinks—sugar bugs love those!</p>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
                    <p className="font-semibold">💡 Tip: Keep water bottles handy and rinse after sweet treats.</p>
                  </div>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">👩‍⚕️</span>
                    4. Make Dentist Visits a Big Deal—in a Good Way!
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Talk positively about the dentist: "They help keep our teeth shiny!"</li>
                    <li>Play pretend dentist at home to show what it's like</li>
                    <li>Let your child bring a comfort toy to the appointment</li>
                  </ul>
                  <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
                    <p className="font-semibold">🧚‍♀️ Bonus: Celebrate lost baby teeth with a little Tooth Fairy magic!</p>
                  </div>
                </section>

                <section className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">📚</span>
                    5. Make Dental Learning Fun
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Read toothy picture books or watch tooth-care cartoons</li>
                    <li>Try coloring pages about brushing</li>
                    <li>Play "sugar bug chase" with floss and dolls/toys</li>
                  </ul>
                  <div className="bg-pink-100 dark:bg-pink-800 p-4 rounded-lg">
                    <p className="font-semibold">Learning through play = lasting habits! 🎨🎲</p>
                  </div>
                </section>

                <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🦸‍♂️</span>
                    6. Be a Smile Role Model
                  </h2>
                  <p className="mb-4">Little eyes are always watching! 👀</p>
                  <p className="mb-4">When kids see <strong>parents brushing and flossing</strong>, they'll want to do it too.</p>
                  <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                    Celebrate <strong>brushing wins</strong> as a team—high-fives all around!
                  </p>
                </section>

                <section className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🏆</span>
                    Family Smile Pledge
                  </h2>
                  <p className="mb-4">Make a family promise to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Brush twice a day</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Floss once a day</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Visit the dentist every 6 months</li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Eat tooth-friendly foods</li>
                      <li className="flex items-center"><span className="text-green-500 mr-2">✔️</span> Keep smiling every day!</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Your whole family's health starts with happy smiles! 😊
                  </h2>
                  <p className="text-xl mb-8">
                    Together, you can build bright habits that last a lifetime.
                  </p>
                  <p className="text-2xl font-bold mb-8">
                    🦷 Keep brushing, keep laughing, and keep shining with Tooth Tales: Family Tips!
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Schedule Family Visit
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

export default FamilyTipsPost;
