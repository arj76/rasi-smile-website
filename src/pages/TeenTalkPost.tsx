
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeenTalkPost = () => {
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
                <div className="text-6xl mb-4">🧑‍🎓</div>
                <h1 className="text-4xl font-bold">Teen Talk</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-purple-600 dark:text-purple-400" />
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    Teen Oral Care
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Users className="mr-4 text-purple-600" />
                Tooth Tales for Teens: Teen Talk!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey, awesome teens! 😎 Your mouth is going through big changes—think of it like an epic adventure! Let's dive into Teen Talk and learn how to keep your smile star-worthy during these teenage years.
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🌱</span>
                    1. Growing Up, Growing Teeth
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Jaw Changes</strong>: As your face grows, new spaces appear—perfect for adult teeth!</li>
                    <li><strong>Baby Teeth "Hangouts"</strong>: Your last baby teeth may stay put until ages 11–13. Be patient—they're making room for your grown-up grin!</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🤓</span>
                    2. Braces & Aligners 101
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Why You Might Need Them:</h3>
                    <p className="mb-4">Crooked teeth, gaps, or bite issues (like overbite or underbite).</p>
                    
                    <h3 className="text-xl font-bold mb-3">Types:</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold">🏗️ Metal Braces</h4>
                        <p>Classic, super-reliable.</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold">🎨 Ceramic Braces</h4>
                        <p>Tooth-colored, less noticeable.</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold">🛡️ Clear Aligners (e.g., Invisalign)</h4>
                        <p>Removable and nearly invisible!</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">Tips for Brace Care:</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Gentle Brushing</strong> around wires and brackets</li>
                      <li><strong>Flossing with a Floss Threader</strong> to get under the wire</li>
                      <li><strong>Avoid Sticky or Hard Foods</strong> (no caramel apples or popcorn kernels!)</li>
                    </ol>
                  </div>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">👀</span>
                    3. Wisdom Teeth Watch
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">What Are They?</h3>
                      <p>Your "third molars" usually appear around ages 17–21.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Why They Matter:</h3>
                      <p>Sometimes there's not enough room, so they can get stuck (impacted) or cause pain.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Watch for Signs:</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Jaw aches or swelling</li>
                        <li>Pain in the back of your mouth</li>
                        <li>Difficulty opening wide</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Action Plan:</h3>
                      <p>Regular X-rays at the dentist help decide if and when they should come out.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🌊</span>
                    4. Hormones & Gum Health
                  </h2>
                  <p className="mb-4"><strong>Teen Hormones</strong> can make gums extra sensitive and puffy (gingivitis).</p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">What to Do:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Brush Gently</strong> along the gumline to remove plaque</li>
                      <li><strong>Rinse with Saltwater</strong> (½ teaspoon salt in a glass of warm water) if gums feel sore</li>
                      <li><strong>Visit Your Dentist</strong> if you see redness or bleed when brushing</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🍿</span>
                    5. Smart Snacking
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">❌ Avoid:</h3>
                      <p><strong>Energy Drinks & Soda</strong>: High acid and sugar—cavity boosters!</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-600 mb-2">✅ Better Choices:</h3>
                      <ul className="space-y-1">
                        <li><strong>Cheese & Nuts</strong>: Neutralize acid and give calcium</li>
                        <li><strong>Crunchy Veggies</strong>: Clean teeth while you chew</li>
                        <li><strong>Water</strong>: Always your best hydration and mouth rinse</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">⚡</span>
                    6. Tech Tools for Teens
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-bold">🪥 Electric Toothbrushes</h4>
                      <p className="text-sm">Great for thorough cleaning—set a 2-minute timer!</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-bold">💧 Water Flossers</h4>
                      <p className="text-sm">Fun water streams blast away food debris.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-bold">📱 Dental Apps</h4>
                      <p className="text-sm">Timers, reminders, and even gamified brushing challenges</p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🤓</span>
                    Fun Teen Tip!
                  </h2>
                  <p className="text-xl mb-6">
                    Posting your perfect smile on socials? Snap a quick "before and after brushing" story to remind yourself (and friends) how fresh you feel after a good clean!
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    Keep rocking that teenage smile—braces, wisdom teeth, and all! 💪
                  </p>
                  <p className="text-xl">
                    Stay confident, stay clean, and keep flashing those pearly whites! 😁✨
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Book Your Teen Checkup
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

export default TeenTalkPost;
