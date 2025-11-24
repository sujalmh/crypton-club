import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useData } from '../context/DataContext';
import TerminalCard from '../components/TerminalCard';
import { ArrowLeft, Calendar, User, Hash } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogPosts } = useData();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <TerminalCard title="error.log" glowing>
           <h1 className="text-2xl text-red-500 font-bold mb-4">Error 404: Intel Not Found</h1>
           <p className="text-gray-400 mb-6">The requested log file has been corrupted or does not exist.</p>
           <Link to="/blog" className="text-cyber-neon hover:underline">Return to Index</Link>
        </TerminalCard>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-cyber-neon mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to Intel Index
      </Link>

      <TerminalCard title={`${post.id}.md`} glowing={true} className="min-h-[60vh]">
        <header className="mb-8 border-b border-cyber-dim pb-6">
          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
                <span key={tag} className="flex items-center text-xs bg-cyber-dim/30 text-cyber-neon px-2 py-1 rounded">
                    <Hash size={10} className="mr-1"/> {tag}
                </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-mono">
            <div className="flex items-center gap-2">
                <User size={16} className="text-cyber-neon" />
                {post.author}
            </div>
            <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cyber-neon" />
                {post.date}
            </div>
          </div>
        </header>

        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </TerminalCard>
    </div>
  );
};

export default BlogPost;