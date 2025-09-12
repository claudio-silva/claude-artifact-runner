import { FC, memo } from 'react';
import { MediumPost } from '../types';

interface BlogSectionProps {
  posts: MediumPost[];
  isFetching: boolean;
  onRetry: () => void;
}

const BlogSection: FC<BlogSectionProps> = ({ posts, isFetching, onRetry }) => (
  <section className="mb-16 animate-fadeIn">
    <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Medium Blog Posts</h2>
    <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
      Sharing my thoughts on AI, Rust, security, and vibe coding.
    </p>

    {isFetching ? (
      <div className="text-center py-12">
        <div className="spinner border-4 border-gray-300 border-t-cyan-400 rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading my latest thoughts...</p>
      </div>
    ) : posts.length > 0 ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => {
          const date = new Date(post.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          let excerpt = post.description || post.content || '';
          excerpt = excerpt.replace(/<[^>]*>/g, '');
          if (excerpt.length > 150) {
            excerpt = excerpt.substring(0, 150) + '...';
          }

          return (
            <div
              key={index}
              className="blog-card bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group"
            >
              <h3 className="blog-title text-2xl font-bold text-green-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {post.title}
              </h3>
              <div className="blog-date text-gray-400 text-sm mb-4">{date}</div>
              <p className="blog-excerpt text-gray-300 mb-6 leading-relaxed">{excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-bold py-2 px-4 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300 inline-block"
              >
                Read Full Article →
              </a>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No blog posts available at the moment.</p>
        <button
          onClick={onRetry}
          className="mt-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    )}

    <div className="text-center mt-8">
      <a
        href="https://medium.com/@md.abir1203"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
        onClick={onRetry}
      >
        View All Posts on Medium →
      </a>
    </div>
  </section>
);

export default memo(BlogSection);
