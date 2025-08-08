import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it typically take to build a deck?",
      answer: "Most deck projects take 3-7 days depending on size and complexity. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate inspections to ensure your project meets local building codes."
    },
    {
      question: "What materials do you recommend?",
      answer: "We offer various options including pressure-treated lumber, composite decking, and exotic hardwoods. We'll help you choose based on your budget and preferences."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on both materials and workmanship. We offer a 3 year warranty on our new builds. Specific terms may vary by project type."
    },
    {
      question: "Can you work around existing landscaping?",
      answer: "Absolutely! We take great care to preserve your existing landscaping and will work with you to minimize any disruption."
    },
    {
      question: "What's included in your quotes?",
      answer: "Our quotes include all materials, labor, permits, cleanup, and disposal. No hidden fees or surprise charges."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-button-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hero-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our deck and patio building process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-hero-text hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
