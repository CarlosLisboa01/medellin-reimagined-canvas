
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quem pode participar do curso?",
    answer: "O curso é destinado a donos de barbearia, profissionais de beleza e empreendedores que desejam aprimorar suas habilidades de gestão. Não é necessária experiência prévia em administração."
  },
  {
    question: "O curso é presencial ou online?",
    answer: "Este é um curso 100% presencial que acontece em um dia intensivo de treinamento. Acreditamos que o networking e a troca de experiências ao vivo são fundamentais para o aprendizado."
  },
  {
    question: "Recebo algum certificado?",
    answer: "Sim, todos os participantes recebem um certificado digital de conclusão que pode ser compartilhado em redes profissionais."
  },
  {
    question: "O que preciso levar para o curso?",
    answer: "Recomendamos trazer um caderno para anotações e, se preferir, um notebook ou tablet para registrar as informações. Materiais complementares serão disponibilizados."
  },
  {
    question: "Posso parcelar a inscrição?",
    answer: "Sim, oferecemos parcelamento em até 10x no cartão de crédito. Também temos desconto especial para pagamento à vista via PIX."
  },
  {
    question: "Se eu não puder ir, posso transferir minha inscrição?",
    answer: "Sim, a transferência de inscrição pode ser realizada até 7 dias antes do evento, mediante comunicação prévia à nossa equipe."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0yIDBIMzZWMzBoLTF2LTRoLTF2LTJoM3YxaC0xdjVoMnYyaC0xdjFoLTF2LTEuNXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoNHY0aC00di00ek0zNCAyOGgxdjFoLTF2LTF6bTEtMmgxdjFoLTF2LTF6bS0xIDBoMXYxaC0xdi0xeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-barbarShop-red mb-6">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Tire suas dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-barbarShop-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
