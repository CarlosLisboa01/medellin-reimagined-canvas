
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Proprietário da Barbearia Vintage',
    content: 'O curso transformou minha visão sobre gestão de barbearia. Consegui organizar minhas finanças e agora tenho um controle muito melhor do meu negócio.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcos Oliveira',
    role: 'Barbeiro e empreendedor',
    content: 'Excelente conteúdo! As dicas de marketing me ajudaram a aumentar meu fluxo de clientes em mais de 30% no primeiro mês após implementação.',
    rating: 5
  },
  {
    id: 3,
    name: 'Juliana Costa',
    role: 'Proprietária do Espaço Beleza',
    content: 'A parte jurídica e contábil era um mistério para mim. Agora sinto segurança para tomar decisões importantes no meu negócio.',
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-barbarShop-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0yIDBIMzZWMzBoLTF2LTRoLTF2LTJoM3YxaC0xdjVoMnYyaC0xdjFoLTF2LTEuNXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoNHY0aC00di00ek0zNCAyOGgxdjFoLTF2LTF6bTEtMmgxdjFoLTF2LTF6bS0xIDBoMXYxaC0xdi0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-barbarShop-red mb-6">
            DEPOIMENTOS
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Veja o que dizem os profissionais que já participaram dos nossos treinamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-dark p-6 rounded-lg border border-white/5 hover:border-barbarShop-red/30 transition-all hover:shadow-lg hover:shadow-barbarShop-red/5 hover-scale"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={i < testimonial.rating ? "text-barbarShop-red" : "text-gray-600"}
                    fill={i < testimonial.rating ? "#E11D1D" : "none"}
                    size={16}
                  />
                ))}
              </div>
              
              <p className="mb-6 italic opacity-80">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-barbarShop-red/20 flex items-center justify-center">
                  <span className="text-barbarShop-red font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-xs opacity-60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
