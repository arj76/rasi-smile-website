
import { BookOpen, Users, Heart, Lightbulb, Baby, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToothTales = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Little Smiles",
      icon: "🧒",
      description: "Fun dental care tips for children and baby teeth milestones.",
      color: "from-pink-500 to-pink-600",
      articles: ["Baby Teeth Care", "First Dental Visit", "Making Brushing Fun"],
      link: "/blog/little-smiles"
    },
    {
      title: "Teen Talk",
      icon: "🧑",
      description: "Braces, wisdom teeth, and oral hygiene during puberty.",
      color: "from-purple-500 to-purple-600",
      articles: ["Braces 101", "Wisdom Teeth Guide", "Teen Oral Care"],
      link: "/blog/teen-talk"
    },
    {
      title: "Family Tips",
      icon: "👨‍👩‍👧",
      description: "Preventive care tips for the whole family.",
      color: "from-green-500 to-green-600",
      articles: ["Family Dental Routine", "Healthy Snacks", "Prevention Tips"],
      link: "/blog/family-tips"
    },
    {
      title: "Dental Know-How",
      icon: "🦷",
      description: "Understanding cavities, gum health, and dental procedures.",
      color: "from-blue-500 to-blue-600",
      articles: ["What are Cavities?", "Gum Disease Prevention", "Root Canal Facts"],
      link: "/blog/dental-know-how"
    },
    {
      title: "Did You Know?",
      icon: "🤔",
      description: "Fun facts and myths vs. facts about oral health.",
      color: "from-yellow-500 to-yellow-600",
      articles: ["Dental Myths Busted", "Amazing Tooth Facts", "Historical Dentistry"],
      link: "/blog/did-you-know"
    },
    {
      title: "Treatment Guide",
      icon: "⚕️",
      description: "What to expect from common dental treatments.",
      color: "from-indigo-500 to-indigo-600",
      articles: ["Filling Process", "Crown Procedure", "Cleaning Benefits"],
      link: "/blog/treatment-guide"
    }
  ];

  const featuredArticles = [
    {
      title: "What Causes Cavities?",
      summary: "Learn about the science behind tooth decay and how to prevent it.",
      image: "🦠",
      readTime: "3 min read",
      link: "/blog/what-causes-cavities"
    },
    {
      title: "Foods That Love Your Teeth",
      summary: "Discover which foods strengthen your teeth and which to avoid.",
      image: "🥕",
      readTime: "4 min read",
      link: "/blog/foods-love-teeth"
    },
    {
      title: "Toothbrush Tips: Manual vs. Electric",
      summary: "Find out which toothbrush is right for you and your family.",
      image: "🪥",
      readTime: "2 min read",
      link: "/blog/toothbrush-tips"
    }
  ];

  const handleArticleClick = (article: any) => {
    if (article.link) {
      navigate(article.link);
    }
  };

  const handleCategoryClick = (category: any) => {
    if (category.link) {
      navigate(category.link);
    }
  };

  return (
    <section id="tooth-tales" className="py-20 bg-gradient-to-br from-blue-50 to-mint-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🦷</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                Welcome to Tooth Tales
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Fun, bite-sized knowledge to keep your smile bright! Your friendly hub for easy-to-understand dental health education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Explore Articles
              </button>
              <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Ask a Question
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 shadow-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Why We Created Tooth Tales
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Rasi Dental Clinic, we believe that educated patients make the best decisions for their oral health. 
              Tooth Tales is our friendly hub created by dental professionals to make oral care knowledge accessible, 
              engaging, and easy to understand for patients of all ages. Empower yourself with the right information 
              to maintain a healthy, confident smile for life.
            </p>
          </div>

          {/* Featured Articles Carousel */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    article.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="text-4xl mb-4 text-center">{article.image}</div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {article.readTime}
                    </span>
                    <button 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArticleClick(article);
                      }}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Sections */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Explore by Category
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl">
                      {category.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{article}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-800 dark:text-white py-2 rounded-xl font-medium transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category);
                    }}
                  >
                    Explore Category
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 mb-16 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Quick Answers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    How often should I visit the dentist?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Every 6 months for regular checkups and cleanings, or as recommended by your dentist.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Are electric toothbrushes better?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Electric toothbrushes can be more effective at removing plaque, especially for people with limited mobility.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    What causes bad breath?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Poor oral hygiene, gum disease, dry mouth, or certain foods. Regular brushing and flossing help prevent it.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    When should kids first visit the dentist?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    By age 1 or within 6 months of their first tooth appearing, whichever comes first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Got a Question About Your Smile?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Our dental experts are here to help with personalized advice and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                  Ask the Dentist
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToothTales;
