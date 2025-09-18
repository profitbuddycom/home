import React from 'react';
import { BlogCategory } from '../types';

interface CategoryCardProps {
    category: Omit<BlogCategory, 'posts'>;
    onClick: (id: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => (
    <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col"
        onClick={() => onClick(category.id)}
        aria-label={`Artikel in der Kategorie ansehen: ${category.name}`}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(category.id); }}
    >
        <img src={category.imageUrl} alt={`Vorschaubild für ${category.name}`} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">{category.name}</h3>
            <p className="text-stone-600 text-sm mt-2 flex-grow">{category.description}</p>
            <span className="mt-4 inline-block text-amber-500 font-semibold group-hover:underline self-start">
                Artikel ansehen &rarr;
            </span>
        </div>
    </div>
);

export default CategoryCard;