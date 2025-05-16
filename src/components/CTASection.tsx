
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-32 bg-barbarShop-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-barbarShop-red opacity-5 clip-diagonal"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-3/4 bg-barbarShop-red opacity-5 clip-diagonal-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
            TRANSFORME SUA BARBEARIA EM UM <span className="text-barbarShop-red text-glow">NEGÓCIO DE SUCESSO</span>
          </h2>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80">
            Garanta sua vaga agora para o treinamento mais completo de gestão para donos de barbearia
          </p>
          
          <div className="animated-border inline-block rounded-lg p-[2px]">
            <Button variant="default" className="bg-barbarShop-red hover:bg-barbarShop-darkRed text-white px-8 py-8 rounded-lg text-xl">
              Garantir minha vaga com desconto
              <ArrowRight className="ml-2" strokeWidth={3} />
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-60">
            Vagas limitadas • Desconto válido até 15/06
          </p>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E11D1D" fillOpacity="0.1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
