
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/95 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-heading text-3xl text-white">BARBER<span className="text-barbarShop-red">PRO</span></span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-barbarShop-red"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-barbarShop-red transition-colors">Sobre o curso</a>
          <a href="#content" className="text-white hover:text-barbarShop-red transition-colors">Conteúdo</a>
          <a href="#schedule" className="text-white hover:text-barbarShop-red transition-colors">Cronograma</a>
          <a href="#testimonials" className="text-white hover:text-barbarShop-red transition-colors">Depoimentos</a>
          <Button variant="default" className="bg-barbarShop-red hover:bg-barbarShop-darkRed text-white">
            Garantir Vaga
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-barbarShop-black shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-barbarShop-red transition-colors py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
              Sobre o curso
            </a>
            <a href="#content" className="text-white hover:text-barbarShop-red transition-colors py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
              Conteúdo
            </a>
            <a href="#schedule" className="text-white hover:text-barbarShop-red transition-colors py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
              Cronograma
            </a>
            <a href="#testimonials" className="text-white hover:text-barbarShop-red transition-colors py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
              Depoimentos
            </a>
            <Button variant="default" className="bg-barbarShop-red hover:bg-barbarShop-darkRed text-white w-full" onClick={() => setIsOpen(false)}>
              Garantir Vaga
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
