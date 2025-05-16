
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="animated-border rounded-lg p-[2px]">
        <button 
          className="flex items-center gap-2 bg-barbarShop-red hover:bg-barbarShop-darkRed transition-colors text-white py-3 px-6 rounded-lg shadow-lg"
        >
          <span className="font-medium">Garantir Vaga</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
