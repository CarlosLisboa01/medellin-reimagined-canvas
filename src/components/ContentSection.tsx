
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const contentItems = [
  {
    number: '01',
    title: 'JURÍDICO',
    description: 'Tudo que você precisa saber para manter seu negócio legalizado e protegido.'
  },
  {
    number: '02',
    title: 'CONTABILIDADE',
    description: 'Como organizar as finanças e evitar dores de cabeça com impostos.'
  },
  {
    number: '03',
    title: 'LIDERANÇA',
    description: 'Técnicas para formar, liderar e manter uma equipe de alta performance.'
  },
  {
    number: '04',
    title: 'MARKETING',
    description: 'Posicionamento, redes sociais e estratégias para atrair e fidelizar clientes.'
  },
  {
    number: '05',
    title: 'FINANCEIRO',
    description: 'Controle de caixa, precificação correta e crescimento com segurança.'
  }
];

const ContentSection = () => {
  return (
    <section id="content" className="py-20 bg-barbarShop-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAwdjYwbTMwLTMwSDAnIHN0cm9rZT0icmdiYSgyMjUsMjksNDEsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-normal text-xl mb-2">O QUE</h2>
          <h1 className="font-heading text-5xl md:text-6xl text-barbarShop-red mb-6">
            VOCÊ VAI <span className="text-glow">APRENDER</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Mergulhe em conhecimentos essenciais para transformar sua barbearia em um negócio de sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-dark p-6 rounded-lg border border-white/5 hover:border-barbarShop-red/30 transition-all hover-scale"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-accent rounded-lg p-2 w-14 h-14 flex items-center justify-center shrink-0">
                  <span className="font-heading text-lg">{item.number}</span>
                </div>
                <div>
                  <h3 className="font-heading text-3xl mb-2">{item.title}</h3>
                  <p className="opacity-80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="default" className="bg-barbarShop-red hover:bg-barbarShop-darkRed text-white px-8 py-6 rounded-lg text-lg">
            Quero aprender tudo isso
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
