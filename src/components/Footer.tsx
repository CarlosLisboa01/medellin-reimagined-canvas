
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-2xl mb-6">BARBER<span className="text-barbarShop-red">PRO</span></h3>
            <p className="text-white/60 mb-6">
              O curso mais completo de gestão para donos de barbearia e profissionais de beleza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-barbarShop-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-barbarShop-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-barbarShop-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-barbarShop-red transition-colors">Sobre o curso</a></li>
              <li><a href="#content" className="text-white/60 hover:text-barbarShop-red transition-colors">Conteúdo</a></li>
              <li><a href="#schedule" className="text-white/60 hover:text-barbarShop-red transition-colors">Cronograma</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-barbarShop-red transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-barbarShop-red" />
                <span className="text-white/60">contato@barberpro.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-barbarShop-red" />
                <span className="text-white/60">(16) 99999-9999</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Newsletter</h4>
            <p className="text-white/60 mb-4">
              Receba dicas e novidades sobre gestão de barbearias
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-barbarShop-black border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-barbarShop-red"
              />
              <button 
                type="submit" 
                className="bg-barbarShop-red hover:bg-barbarShop-darkRed transition-colors text-white py-2 px-4 rounded-r-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BarberPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-barbarShop-red text-sm">Termos de Uso</a>
              <a href="#" className="text-white/40 hover:text-barbarShop-red text-sm">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
