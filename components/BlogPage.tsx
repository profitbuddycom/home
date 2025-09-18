import React, { useState, useEffect } from 'react';
import BlogOverview from './BlogOverview';
import BlogCategoryView from './BlogCategoryView';
import BlogPostDisplay from './BlogPostDisplay';
import { BlogPost, BlogCategory } from '../types';

interface BlogPageProps {
    onStartFinder: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onStartFinder }) => {
    const [view, setView] = useState<'overview' | 'category' | 'post'>('overview');
    const [blogData, setBlogData] = useState<BlogCategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // By default, fetch invalidates cache. Add a cache-busting query param for development.
                const response = await fetch(`/content/blog.json?v=${new Date().getTime()}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogData(data.categories || []);
            } catch (e: any) {
                setError('Die Blog-Inhalte konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
                console.error("Failed to fetch blog content:", e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContent();
    }, []);


    const handleSelectCategory = (categoryId: string) => {
        const category = blogData.find(c => c.id === categoryId);
        if (category) {
            setSelectedCategory(category);
            setView('category');
            window.scrollTo(0, 0);
        }
    };

    const handleSelectPost = (postId: string) => {
        const post = selectedCategory?.posts.find(p => p.id === postId);
        if (post) {
            setSelectedPost(post);
            setView('post');
            window.scrollTo(0, 0);
        }
    };
    
    const handleBack = () => {
        if (view === 'post') {
            setView('category');
            setSelectedPost(null);
        } else if (view === 'category') {
            setView('overview');
            setSelectedCategory(null);
        }
        window.scrollTo(0, 0);
    };

    const renderContent = () => {
        if (isLoading) {
            return <div className="text-center p-10">Lade Magazin...</div>;
        }

        if (error) {
            return <div className="text-center p-10 bg-red-50 text-red-700 rounded-lg">{error}</div>;
        }

        if (view === 'post' && selectedPost) {
            return (
                <div className="animate-fade-in">
                   <button 
                        onClick={handleBack} 
                        className="mb-8 inline-flex items-center text-stone-600 font-semibold hover:text-amber-600 transition-colors"
                        aria-label="Zurück zur Kategorie-Übersicht"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Zurück zu "{selectedCategory?.name}"
                    </button>
                    <BlogPostDisplay post={selectedPost} onStartFinder={onStartFinder} />
                </div>
            );
        }

        if (view === 'category' && selectedCategory) {
            return <BlogCategoryView category={selectedCategory} onSelectPost={handleSelectPost} onBack={handleBack} />;
        }

        return <BlogOverview categories={blogData} onSelectCategory={handleSelectCategory} />;
    }

    return <div>{renderContent()}</div>;
};

export default BlogPage;