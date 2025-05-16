
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-gradient-dark relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxjaXJjbGUgZmlsbD0icmdiYSgyMjUsMjksNDEsMC4xKSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-barbarShop-red mb-6">
            CRONOGRAMA DO EVENTO
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Um dia intensivo de conhecimento para transformar a gestão da sua barbearia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Event details */}
          <div className="space-y-8">
            <div className="bg-barbarShop-black p-6 rounded-lg border border-white/10">
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-barbarShop-red rounded-full p-2">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-4xl text-barbarShop-red">23/06</h3>
                  <p className="text-sm opacity-60">Domingo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">8:00 às 8:30</div>
                    <div className="font-medium">Coffee break</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">8:30 às 9:00</div>
                    <div className="font-medium">Apresentação</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">9:00 às 10:00</div>
                    <div className="font-medium">Jurídico</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">10:00 às 11:00</div>
                    <div className="font-medium">Contabilidade</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">11:00 às 12:00</div>
                    <div className="font-medium">Liderança</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">12:00 às 13:00</div>
                    <div className="font-medium">Almoço</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">13:00 às 15:00</div>
                    <div className="font-medium">Gestão financeira</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">15:00 às 17:00</div>
                    <div className="font-medium">Marketing</div>
                  </div>
                  
                  <div className="border-l-2 border-barbarShop-red pl-4">
                    <div className="text-sm text-barbarShop-red">17:00 às 18:00</div>
                    <div className="font-medium">Encerramento</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-barbarShop-black p-6 rounded-lg border border-white/10">
              <h3 className="font-heading text-2xl mb-4">LOCAL</h3>
              <p className="opacity-80 mb-2">
                Av. Dr. José Cesário Monteiro da Silva, 150 - Jardim Nova Aliança, Ribeirão Preto - SP | 14026-600
              </p>
              <div className="h-48 bg-barbarShop-darkGray rounded-lg mt-4 overflow-hidden">
                {/* This would be a Google Maps embed */}
                <div className="w-full h-full bg-barbarShop-darkGray flex items-center justify-center">
                  <span className="text-white/50">Mapa da localização</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Pricing */}
          <div className="bg-barbarShop-black p-8 rounded-lg border border-white/10">
            <h3 className="font-heading text-3xl mb-6">INVESTIMENTO</h3>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6 hover:border-barbarShop-red/30 transition-all hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-heading text-xl text-barbarShop-red">INGRESSO INDIVIDUAL</h4>
                  </div>
                  <div className="bg-barbarShop-red/20 rounded-full px-3 py-1 text-xs">
                    Mais Popular
                  </div>
                </div>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="font-heading text-4xl">R$ 797,00</span>
                  <span className="text-xs opacity-60 mb-1">em até 10x no cartão</span>
                </div>
                
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-heading text-3xl text-barbarShop-red">R$ 697,00</span>
                  <span className="text-xs opacity-60 mb-1">à vista ou parcelado no PIX (válido até 15/06)</span>
                </div>
                
                <button className="w-full bg-barbarShop-red hover:bg-barbarShop-darkRed transition-colors text-white py-3 rounded-lg font-medium">
                  Garantir vaga
                </button>
              </div>
              
              <div className="border border-white/10 rounded-lg p-6 hover:border-barbarShop-red/30 transition-all hover-scale">
                <div>
                  <h4 className="font-heading text-xl text-barbarShop-red mb-4">INGRESSO DUPLO</h4>
                  <p className="text-xs opacity-60 mb-4">*Apenas para casais ou sócios da mesma barbearia</p>
                </div>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="font-heading text-4xl">R$ 1.297,00</span>
                  <span className="text-xs opacity-60 mb-1">em até 10x no cartão</span>
                </div>
                
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-heading text-3xl text-barbarShop-red">R$ 1.097,00</span>
                  <span className="text-xs opacity-60 mb-1">à vista ou parcelado no PIX (válido até 15/06)</span>
                </div>
                
                <button className="w-full bg-barbarShop-red hover:bg-barbarShop-darkRed transition-colors text-white py-3 rounded-lg font-medium">
                  Garantir vaga
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm opacity-60">
                AS VAGAS SÃO LIMITADAS
              </p>
              <h4 className="font-heading text-2xl mt-2">GARANTA SUA VAGA</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
