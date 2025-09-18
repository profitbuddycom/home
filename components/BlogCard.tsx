import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
    post: Omit<BlogPost, 'body'>;
    onClick: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => (
    <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col"
        onClick={() => onClick(post.id)}
        aria-label={`Lesen Sie den Artikel: ${post.title}`}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(post.id); }}
    >
        <img src={post.imageUrl} alt={`Vorschaubild für ${post.title}`} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">{post.title}</h3>
            <p className="text-stone-600 text-sm mt-2 flex-grow">{post.description}</p>
            <span className="mt-4 inline-block text-amber-500 font-semibold group-hover:underline self-start">
                Weiterlesen &rarr;
            </span>
        </div>
    </div>
);

export default BlogCard;