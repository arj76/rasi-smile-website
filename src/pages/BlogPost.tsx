
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import BlogPostHeader from "@/components/BlogPostHeader";
import BlogPostContent from "@/components/BlogPostContent";
import { blogPostsData } from "@/data/blogPostsData";

const BlogPost = () => {
  const { slug } = useParams();
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

  const currentPost = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Blog Post Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      <Header />
      
      <main className="pt-24 pb-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            {/* Hero Image */}
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <BlogPostHeader post={currentPost} />
            <BlogPostContent post={currentPost} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
