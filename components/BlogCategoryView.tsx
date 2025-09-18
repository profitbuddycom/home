import React from 'react';
import { BlogCategory } from '../types';
import BlogCard from './BlogCard';

interface BlogCategoryViewProps {
    category: BlogCategory;
    onSelectPost: (id: string) => void;
    onBack: () => void;
}

const BlogCategoryView: React.FC<BlogCategoryViewProps> = ({ category, onSelectPost, onBack }) => {
    return (
        <div className="animate-fade-in">
            <button 
                onClick={onBack} 
                className="mb-8 inline-flex items-center text-stone-600 font-semibold hover:text-amber-600 transition-colors"
                aria-label="Zurück zur Kategorie-Übersicht"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Zurück zur Übersicht
            </button>
            <div className="text-center mb-12">
                 <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                    {category.name}
                </h1>
                <p className="text-center text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
                   {category.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.posts.map(post => (
                    <BlogCard key={post.id} post={post} onClick={onSelectPost} />
                ))}
            </div>
        </div>
    );
};

export default BlogCategoryView;