
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ToothbrushTipsPost = () => {
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

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚡🪥</div>
                <h1 className="text-4xl font-bold">Toothbrush Tips: Manual vs. Electric!</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 18, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-purple-600 dark:text-purple-400" />
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    Brushing Tips
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Zap className="mr-4 text-purple-600" />
                Tooth Tales: Toothbrush Tips – Manual vs. Electric!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey super–smilers! 😁 Ever notice there are two kinds of toothbrushes in the store—manual (the regular kind you move yourself) and electric (the buzzing, whirring kind)? Let's find out which might be best for YOU and how to use them like a pro!
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">👋</span>
                    1. Meet the Toothbrush Team!
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Toothbrush</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">What It Looks Like</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">How It Works</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>Manual</strong> 🪥</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">A simple handle with bristles on top</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>You</strong> move it in gentle circles to clean every tooth</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>Electric</strong> ⚡🪥</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">A handle that needs batteries or charging; the head buzzes or spins</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">The brush <strong>moves on its own</strong>—you just guide it along your teeth</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">✨</span>
                    2. Manual Magic
                  </h2>
                  <h3 className="text-xl font-semibold mb-3">Why Kids Love It:</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Super-light and easy to pack for sleepovers 👜</li>
                    <li>Comes in <strong>cool colors</strong> and cartoon characters 🎨</li>
                    <li>No charging or batteries needed 🔋❌</li>
                  </ul>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Top Manual Tip:</h4>
                    <p>Use <strong>small circles</strong> and count <em>to four</em> on each tooth side—front, back, and chewing tops!</p>
                  </div>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">⚡</span>
                    3. Electric Excitement
                  </h2>
                  <h3 className="text-xl font-semibold mb-3">Why Kids Love It:</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Feels like a mini power-washer for your teeth 🚿</li>
                    <li>Built-in <strong>2-minute timers</strong> (no guessing!) ⏲️</li>
                    <li>Fun buzzing sound makes brushing feel like a game 🕹️</li>
                  </ul>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Top Electric Tip:</h4>
                    <p>Let the <strong>brush head do the work</strong>—just move slowly from tooth to tooth like a train on a track 🚂.</p>
                  </div>
                </section>

                <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🤔</span>
                    4. Which One Cleans Better?
                  </h2>
                  <p className="mb-4">Both can do an <strong>awesome job</strong> if you:</p>
                  <ol className="list-decimal pl-6 space-y-2 mb-4">
                    <li>Brush <strong>2 minutes</strong>, twice a day</li>
                    <li>Use a <strong>soft bristle</strong> head</li>
                    <li>Don't scrub too hard (gentle is best!)</li>
                    <li>Replace the brush or brush head every <strong>3 months</strong> (or after you've been sick) 🔄</li>
                  </ol>
                  <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                    Many dentists say electric brushes <em>can</em> remove a bit more plaque for some kids—but only if you guide them the right way!
                  </p>
                </section>

                <section className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🏆</span>
                    5. Picking YOUR Perfect Brush
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Little Hands?</strong> Try a <strong>kid-size handle</strong> that won't slip.</li>
                    <li><strong>Braces?</strong> Electric brushes with tiny round heads can sneak around brackets.</li>
                    <li><strong>Ticklish?</strong> A quiet manual brush might feel better than a buzzy one.</li>
                    <li><strong>Forget the Timer?</strong> An electric brush with music or lights reminds you when you're done.</li>
                  </ul>
                  <p className="text-lg">Ask your <strong>dentist</strong> which type fits your smile best—they're the real brush experts! 🦸‍♀️🦸‍♂️</p>
                </section>

                <section className="bg-cyan-50 dark:bg-cyan-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🎯</span>
                    6. Brushing Bonus Tips
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Aim for a <strong>pea-sized</strong> dot of fluoride toothpaste 🫛</li>
                    <li>Tilt the bristles toward the gums (like a tiny roof) ⛰️</li>
                    <li>Don't rush the brush—<strong>slow and steady</strong> wins the sparkle!</li>
                    <li>Finish with a quick <strong>tongue brush</strong> or scrape for extra fresh breath 😛</li>
                  </ul>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🤓</span>
                    Fun Fact!
                  </h2>
                  <p className="text-xl mb-6">
                    Early electric toothbrushes were invented in the <strong>1950s</strong>—your grandparents might have brushed with the very first "buzz brushes"! 🕹️
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    <strong>Remember:</strong> No matter which toothbrush you choose, the true power is <strong>YOU</strong>! Brush every morning and night, floss daily, and visit your dentist twice a year. Your smile will shine brighter than a supernova! ✨🌟
                  </p>
                  <p className="text-xl">
                    Keep brushing, keep smiling, and come back for more Tooth Tales!
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Schedule Your Visit
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

export default ToothbrushTipsPost;
