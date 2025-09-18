
import React, { useState, useEffect } from 'react';

const CompassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.485-6.485l-1.414 1.414M6.929 17.071l-1.414 1.414m11.57-1.414l-1.414-1.414M5.515 5.515l1.414 1.414" />
    </svg>
);


interface HeaderProps {
    currentPage: 'finder' | 'blog';
    onNavigate: (page: 'finder' | 'blog') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (page: 'finder' | 'blog') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navLinkClasses = (page: 'finder' | 'blog', isMobile: boolean = false) => {
      if (isMobile) {
          return `block w-full text-left px-4 py-3 text-lg rounded-md font-medium transition-colors ${
            currentPage === page 
            ? 'bg-amber-600 text-white' 
            : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
          }`;
      }
      return `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page 
        ? 'bg-amber-600 text-white shadow-sm' 
        : 'text-stone-600 hover:bg-stone-200 hover:text-stone-800'
      }`;
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <CompassIcon />
                <span className="text-2xl font-bold text-stone-800 tracking-tight">Profit-Pilot AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
                 <div className="flex items-center space-x-2 p-1 bg-stone-100 rounded-lg">
                    <button onClick={() => handleNavigation('finder')} className={navLinkClasses('finder')}>
                        KI-Analyse
                    </button>
                    <button onClick={() => handleNavigation('blog')} className={navLinkClasses('blog')}>
                        Magazin
                    </button>
                 </div>
                 <a href="/admin/index.html" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-stone-500 hover:text-amber-600 transition-colors">
                    Login
                 </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md text-stone-600 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Menü öffnen"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
        </div>
      </div>

       {/* Mobile Menu Panel */}
       <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu */}
        <div 
          style={{ backgroundColor: '#ffffff' }}
          className={`fixed top-0 right-0 h-full w-full max-w-sm border-l border-stone-200 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
               <span className="text-xl font-bold text-stone-800">Menü</span>
               <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Menü schließen"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            </div>
            <nav className="flex flex-col space-y-3">
              <button onClick={() => handleNavigation('finder')} className={navLinkClasses('finder', true)}>
                  KI-Analyse
              </button>
              <button onClick={() => handleNavigation('blog')} className={navLinkClasses('blog', true)}>
                  Magazin
              </button>
              <div className="border-t border-stone-200 my-3 !mt-6 !mb-3"></div>
              <a href="/admin/index.html" target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-3 text-lg rounded-md font-medium text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors">
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
