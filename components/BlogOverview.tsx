import React from 'react';
import { BlogCategory } from '../types';
import CategoryCard from './CategoryCard';

interface BlogOverviewProps {
    categories: Omit<BlogCategory, 'posts'>[];
    onSelectCategory: (id: string) => void;
}

const BlogOverview: React.FC<BlogOverviewProps> = ({ categories, onSelectCategory }) => {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                 <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                    Einblicke in die Welt des Online-Business
                </h1>
                <p className="text-center text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
                   Wähle eine Kategorie, um die passenden Strategien, Analysen und neuesten Trends zu entdecken.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} onClick={onSelectCategory} />
                ))}
            </div>
        </div>
    );
};

export default BlogOverview;