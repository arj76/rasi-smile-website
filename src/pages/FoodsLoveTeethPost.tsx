
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Calendar, Tag, Apple } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FoodsLoveTeethPost = () => {
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
                <div className="text-6xl mb-4">🥕🧀</div>
                <h1 className="text-4xl font-bold">Foods That Your Teeth Love!</h1>
              </div>
            </div>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>December 18, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-green-600 dark:text-green-400" />
                  <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Healthy Foods
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Apple className="mr-4 text-green-600" />
                Tooth Tales: Foods That Your Teeth Love!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey there, bright smiles! 😃 Did you know that some yummy foods can actually help your teeth stay strong and healthy? Let's explore the tooth-friendly menu and find out what treats make your grin sparkle! ✨
              </p>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🥕</span>
                    1. Crunchy Veggie Heroes
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Carrots 🥕:</strong> Crunching carrots is like giving your teeth a mini brushing—they scrub away plaque!</li>
                    <li><strong>Celery 🌿:</strong> Its stringy texture helps clean between teeth and gums as you munch.</li>
                  </ul>
                </section>

                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🧀</span>
                    2. Dairy Delights
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cheese 🧀:</strong> Packed with calcium and phosphates, cheese strengthens enamel and neutralizes acid after meals.</li>
                    <li><strong>Yogurt 🥛:</strong> Look for plain, unsweetened yogurt—its probiotics fight off cavity-causing bacteria!</li>
                  </ul>
                </section>

                <section className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🍎</span>
                    3. Fabulous Fruits
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Apples 🍎:</strong> The "nature's toothbrush"—crunchy and juicy, apples stimulate saliva, which washes away food bits and acid.</li>
                    <li><strong>Strawberries 🍓:</strong> Full of vitamin C for healthy gums, but eat them plain (not dipped in sugar)!</li>
                  </ul>
                </section>

                <section className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🥜</span>
                    4. Nutty Bites
                  </h2>
                  <p><strong>Almonds & Walnuts 🥜:</strong> Full of calcium, protein, and healthy fats—great for strong teeth and jaws. Just eat plain, not honey-coated!</p>
                </section>

                <section className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">💪</span>
                    5. Protein Power
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Eggs 🥚:</strong> Loaded with vitamin D, which helps your body absorb calcium for rock-hard enamel.</li>
                    <li><strong>Lean Meats & Fish 🍗🐟:</strong> Chicken, turkey, and salmon give your teeth the minerals they need. Fish like salmon also have vitamin D!</li>
                  </ul>
                </section>

                <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🥗</span>
                    6. Super Salads
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Leafy Greens 🥬:</strong> Spinach and kale bring calcium, folic acid, and lots of vitamins for healthy gums.</li>
                    <li><strong>Tomatoes 🍅:</strong> Rich in vitamin C—helps keep your gums pink and perky!</li>
                  </ul>
                </section>

                <section className="bg-cyan-50 dark:bg-cyan-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🌊</span>
                    7. Sip Smart
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Water 💧:</strong> The best drink for your teeth! It rinses away sugar and keeps your mouth hydrated.</li>
                    <li><strong>Milk 🥛:</strong> Another calcium superstar that's better than sugary sodas or juices.</li>
                  </ul>
                </section>

                <section className="bg-pink-50 dark:bg-pink-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🍫</span>
                    8. Sweet Treats—With a Twist
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Dark Chocolate 🍫</strong> (in small amounts): Contains compounds that may stop bacteria from sticking to your teeth. Just don't go overboard!</li>
                    <li><strong>Sugar-Free Gum 🍬:</strong> Chewing sugar-free gum after snacks stimulates saliva and keeps teeth happy.</li>
                  </ul>
                </section>

                <section className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="text-4xl mr-3">🌟</span>
                    Tips for a Tooth-Loving Diet
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Snack Wisely:</strong> Choose tooth-friendly snacks between meals instead of candy or chips.</li>
                    <li><strong>Rinse or Brush:</strong> After eating, swish with water or brush when you can.</li>
                    <li><strong>Balance is Key:</strong> It's okay to enjoy sweets—just pair them with tooth-loving foods and practice good brushing!</li>
                  </ul>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3">🤓</span>
                    Fun Fact!
                  </h2>
                  <p className="text-xl mb-6">
                    <strong>Saliva</strong> is your mouth's superhero—it fights germs, washes away food, and helps repair early enamel damage!
                  </p>
                  <p className="text-2xl font-bold mb-4">
                    Keep munching on these tooth-loving foods, and your smile will stay bright and strong! 😁🌈
                  </p>
                  <p className="text-xl">
                    Want more fun Tooth Tales? Dive into our other articles for playful tips and tricks to keep your teeth happy!
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/#contact')}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
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

export default FoodsLoveTeethPost;
