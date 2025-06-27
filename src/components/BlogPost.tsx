import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface BlogPostProps {
  posts: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    readTime: string;
  }[];
}

const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));

  const handleBackClick = () => {
    navigate('/#blog');
    // Add a small delay to ensure the navigation happens before scrolling
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!post) {
    return (
      <div className="pt-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Blog Post Not Found</h2>
            <p className="mt-4 text-lg text-gray-500">The blog post you're looking for doesn't exist.</p>
            <button
              onClick={handleBackClick}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100 transition-colors duration-300"
        >
          ← Back to Blog
        </button>

        {/* Category */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        {/* Meta Information */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          {/* This is where the full blog post content would go */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Points</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Important point one about driving safety</li>
            <li>Critical information about road rules</li>
            <li>Essential tips for new drivers</li>
            <li>Best practices for confident driving</li>
          </ul>
          <p className="text-gray-600 mt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Share and Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button className="text-red-600 hover:text-red-700">
              ← Previous Post
            </button>
            <button className="text-red-600 hover:text-red-700">
              Next Post →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 