
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "5 Essential Tips for Maintaining Healthy Teeth",
      excerpt: "Discover simple daily habits that can keep your teeth and gums healthy for life. From proper brushing techniques to dietary choices.",
      date: "March 15, 2024",
      category: "Oral Care Tips",
      slug: "5-essential-tips-for-maintaining-healthy-teeth"
    },
    {
      title: "Debunking Common Dental Myths",
      excerpt: "Separate fact from fiction as we address the most common misconceptions about dental health and treatments.",
      date: "March 10, 2024",
      category: "Dental Myths"
    },
    {
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Learn why routine dental visits are crucial for preventing serious oral health issues and maintaining your overall health.",
      date: "March 5, 2024",
      category: "Preventive Care"
    },
    {
      title: "Modern Dental Technology: What's New?",
      excerpt: "Explore the latest advancements in dental technology and how they're making treatments more comfortable and effective.",
      date: "February 28, 2024",
      category: "Technology"
    }
  ];

  const handleReadMore = (slug?: string) => {
    if (slug) {
      navigate(`/blog/${slug}`);
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Dental Health Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest dental health tips, treatment information, 
              and oral care advice from our experienced team.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"></div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <button 
                    onClick={() => handleReadMore(post.slug)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with Dental Health Tips
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for the latest dental health advice and clinic updates.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
