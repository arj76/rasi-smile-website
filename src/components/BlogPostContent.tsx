
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blogPostsData";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const navigate = useNavigate();

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      {post.content}
      {post.title === "5 Essential Tips for Maintaining Healthy Teeth" && (
        <div className="mt-6">
          <button
            onClick={() => navigate('/#contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Schedule Your Checkup
          </button>
        </div>
      )}
    </article>
  );
};

export default BlogPostContent;
