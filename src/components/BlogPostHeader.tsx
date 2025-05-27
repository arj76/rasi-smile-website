
import { Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogPostsData";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <header className="mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <Calendar size={16} />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Tag size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        {post.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        Maintaining good oral hygiene is crucial not only for a beautiful smile but also for your overall health. Poor dental habits can lead to cavities, gum disease, and even heart problems. Fortunately, taking care of your teeth is simple if you follow a few essential tips.
      </p>
    </header>
  );
};

export default BlogPostHeader;
