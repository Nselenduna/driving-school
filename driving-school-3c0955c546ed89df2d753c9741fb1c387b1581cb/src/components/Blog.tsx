import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

const sampleBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Essential Tips for Your First Driving Lesson",
    excerpt: "Feeling nervous about your first driving lesson? Here are some tips to help you prepare and make the most of your initial experience behind the wheel.",
    date: "March 15, 2025",
    author: "Melisizwe Sithole",
    category: "Beginner Tips",
    imageUrl: "/instructor theory pic.jpeg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding the New Highway Code Changes",
    excerpt: "Recent updates to the Highway Code have introduced important changes that all drivers need to be aware of. Learn about the key modifications and how they affect you.",
    date: "March 12, 2025",
    author: "Mthokozisi Dube",
    category: "Driving Laws",
    imageUrl: "/highway code.jpeg",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Mastering Parallel Parking: A Step-by-Step Guide",
    excerpt: "Parallel parking can be intimidating, but with the right technique, it becomes second nature. Follow our comprehensive guide to perfect this essential skill.",
    date: "March 10, 2025",
    author: "Bhekisipho Ndlovu",
    category: "Driving Skills",
    imageUrl: "/parking student.jpeg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Preparing for Your Theory Test: Top Study Strategies",
    excerpt: "Get ready to ace your theory test with our proven study methods. We'll cover the best resources, practice techniques, and time management tips.",
    date: "March 8, 2025",
    author: "Melisizwe Zhwane",
    category: "Test Preparation",
    imageUrl: "/theory class picture.jpeg",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Eco-Friendly Driving: Save Fuel and the Environment",
    excerpt: "Learn how to reduce your carbon footprint and save money on fuel with these eco-friendly driving techniques that every responsible driver should know.",
    date: "March 5, 2025",
    author: "Mthokozisi Dube",
    category: "Tips & Tricks",
    imageUrl: "https://picsum.photos/seed/eco-driving/800/450",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Dealing with Driving Anxiety: Expert Advice",
    excerpt: "Nervous about driving? You're not alone. Discover practical strategies and expert tips for overcoming driving anxiety and building confidence on the road.",
    date: "March 3, 2025",
    author: "Bhekisipho Ndlovu",
    category: "Mental Preparation",
    imageUrl: "/driving anxiety.jpeg",
    readTime: "6 min read"
  }
];

export { sampleBlogPosts };

const Blog: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    // Use both methods to ensure scroll to top works on all devices
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="py-12 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Blog</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Latest Driving Tips & News</p>
          <p className="mt-4 text-xl text-gray-500">Stay updated with the latest driving advice, tips, and industry news</p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${sampleBlogPosts[0].id}`} className="block mb-12">
          <div className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={sampleBlogPosts[0].imageUrl}
                alt={sampleBlogPosts[0].title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-full mb-3">
                {sampleBlogPosts[0].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {sampleBlogPosts[0].title}
              </h3>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {sampleBlogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-white">
                <span>{sampleBlogPosts[0].author}</span>
                <span className="mx-2">•</span>
                <span>{sampleBlogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{sampleBlogPosts[0].readTime}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBlogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 