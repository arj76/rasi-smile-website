
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Learn why routine dental visits are crucial for preventing serious oral health issues and maintaining your overall health.",
      date: "March 22, 2025",
      category: "Preventive Care",
      slug: "importance-of-regular-dental-checkups",
      image: "/lovable-uploads/62e85c5b-b4a1-4801-afc2-ffb8310b30dc.png"
    },
    {
      title: "Modern Dental Technology: What's New?",
      excerpt: "Explore the latest advancements in dental technology and how they're making treatments more comfortable and effective.",
      date: "May 6, 2025",
      category: "Technology",
      slug: "modern-dental-technology-whats-new",
      image: "/lovable-uploads/dceedb36-277f-4319-ba96-4288fbbf07eb.png"
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
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
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
        </div>
      </div>
    </section>
  );
};

export default Blog;
