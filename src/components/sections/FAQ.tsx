'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most implementations are completed within 4-6 weeks. Our AI-accelerated development process allows us to deploy enterprise-grade infrastructure 90% faster than traditional development cycles.',
  },
  {
    question: 'What is the pricing structure?',
    answer: 'We offer flexible pricing based on project scope and complexity. We provide transparent quotes with no hidden fees. Contact us for a custom quote tailored to your specific needs.',
  },
  {
    question: 'Which tools do you integrate with?',
    answer: 'We integrate with 44+ platforms including Salesforce, HubSpot, Stripe, Shopify, WhatsApp, Slack, Twilio, and many more. If your software has an API, we can orchestrate it.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We follow industry best practices for data security and compliance. All integrations are built with security-first architecture, and we never share your data with third parties.',
  },
  {
    question: 'Do I own the code?',
    answer: 'Yes, you own every line of code we write. There is no vendor lock-in. You have complete control over your infrastructure and can modify or extend it as needed.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive support including initial training, documentation, and ongoing maintenance packages. We also offer optimization services to continuously improve your systems.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-12"
        >
          FAQ
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-px bg-[#1E2130]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0B0C10]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#0F1015] transition-colors duration-300"
              >
                <span className="font-manrope text-lg font-bold text-[#F3F4F6]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F3F4F6]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#F3F4F6]" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="font-inter text-base text-[#9CA3AF] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
