
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-dark overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0yIDBIMzZWMzBoLTF2LTRoLTF2LTJoM3YxaC0xdjVoMnYyaC0xdjFoLTF2LTEuNXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoNHY0aC00di00ek0zNCAyOGgxdjFoLTF2LTF6bTEtMmgxdjFoLTF2LTF6bS0xIDBoMXYxaC0xdi0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      {/* Red diagonal shape */}
      <div className="absolute right-0 top-0 w-2/3 h-full bg-barbarShop-red opacity-10 clip-diagonal"></div>
      
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="font-normal text-xl mb-2">PRA QUEM É</h2>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-barbarShop-red mb-6 leading-none">
                ESSE CURSO
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-8 max-w-xl"
            >
              Um curso completo de gestão pensado especialmente para <span className="font-semibold">donos de barbearia e profissionais de beleza</span> que atuam sob a Lei do Salão Parceiro e querem dominar a parte administrativa, jurídica e financeira de seus negócios.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="default" className="bg-barbarShop-red hover:bg-barbarShop-darkRed text-white px-8 py-6 rounded-lg text-lg">
                Garantir minha vaga agora
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-barbarShop-black p-6 rounded-lg shadow-2xl border border-barbarShop-red/20">
              <h3 className="font-heading text-3xl mb-6">PARA QUEM É</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start animated-border hover-scale p-4 rounded-lg">
                  <div className="font-heading text-4xl text-barbarShop-red">01</div>
                  <div>
                    <h4 className="text-lg font-medium">Donos de barbearia que querem profissionalizar a gestão</h4>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start animated-border hover-scale p-4 rounded-lg">
                  <div className="font-heading text-4xl text-barbarShop-red">02</div>
                  <div>
                    <h4 className="text-lg font-medium">Profissionais que querem abrir o próprio negócio</h4>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start animated-border hover-scale p-4 rounded-lg">
                  <div className="font-heading text-4xl text-barbarShop-red">03</div>
                  <div>
                    <h4 className="text-lg font-medium">Quem quer mais visão estratégica e segurança pra crescer</h4>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-barbarShop-red/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-8 w-24 h-24 bg-barbarShop-red/15 rounded-full blur-xl animate-float"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E11D1D" fillOpacity="0.1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,218.7C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
