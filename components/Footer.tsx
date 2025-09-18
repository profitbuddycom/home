
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-stone-200">
      <div className="container mx-auto px-4 py-6 text-center text-stone-500">
        <div className="max-w-3xl mx-auto">
            <p className="text-xs text-stone-400 mb-4">
                *Profit-Pilot AI ist Teilnehmer von Partnerprogrammen. Wenn Sie über Links auf unserer Seite kaufen, erhalten wir möglicherweise eine Provision, ohne dass für Sie zusätzliche Kosten entstehen. Dies hilft uns, diesen kostenlosen Service zu betreiben. Wir empfehlen nur Produkte, von denen wir überzeugt sind.
            </p>
            <p>&copy; {new Date().getFullYear()} Profit-Pilot AI. Alle Rechte vorbehalten.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-amber-500 transition-colors">Impressum</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Datenschutz</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Kontakt</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;