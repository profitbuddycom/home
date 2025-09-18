import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '../types';

const CTA: React.FC<{onStartFinder: () => void}> = ({ onStartFinder }) => (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-12 not-prose">
        <h3 className="text-xl font-bold text-amber-900 mt-0">Passt diese Strategie zu Ihnen?</h3>
        <p className="text-amber-800 mt-2">Die beste Theorie bringt nichts, wenn die Strategie nicht zu Ihrer Persönlichkeit passt. Unsere Analyse findet in 2 Minuten heraus, welcher Weg für Sie der profitabelste ist.</p>
        <button
            onClick={onStartFinder}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 transition-all transform hover:scale-105"
        >
            Jetzt kostenlose Analyse starten
        </button>
    </div>
);

interface BlogPostDisplayProps {
    post: BlogPost;
    onStartFinder: () => void;
}

const BlogPostDisplay: React.FC<BlogPostDisplayProps> = ({ post, onStartFinder }) => {
    return (
        <article className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-stone-200 max-w-none">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-2">{post.title}</h1>
                <p className="text-sm text-stone-500">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
            </div>

            <img src={post.imageUrl} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-xl mb-10 shadow-lg" />
            
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // This allows us to use <cta /> in markdown
                        cta: () => <CTA onStartFinder={onStartFinder} />,
                         h2: ({node, ...props}) => <h2 className="mt-20 mb-6" {...props} />,
                         p: ({node, ...props}) => <p className="my-8" {...props} />,
                         blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-amber-500 bg-stone-100 p-6 my-12 italic" {...props} />
                    }}
                >
                    {post.body}
                </ReactMarkdown>
            </div>
        </article>
    );
};

export default BlogPostDisplay;
