'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const heroCases = [
  {
    category: 'AI Receptionists',
    title: 'Voice AI for Medical Practice',
    metrics: '85% reduction in missed appointments',
    timeframe: '2024',
  },
  {
    category: 'Real Estate',
    title: 'WhatsApp Lead Automation',
    metrics: '300% increase in lead response rate',
    timeframe: '2024',
  },
  {
    category: 'E-Commerce',
    title: 'Multi-Platform Content Distribution',
    metrics: '90% faster content deployment',
    timeframe: '2024',
  },
];

export default function HeroCases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroCases.length) % heroCases.length);
  };

  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[#1E2130] hover:border-[#F3F4F6] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#F3F4F6]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[#1E2130] hover:border-[#F3F4F6] transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#F3F4F6]" />
          </button>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2130]">
            {heroCases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300 cursor-pointer"
              >
                <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4">
                  {item.category}
                </div>
                <div className="font-manrope text-sm text-[#9CA3AF] mb-6">
                  {item.timeframe}
                </div>
                <h3 className="font-manrope text-xl font-bold text-[#F3F4F6] mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="font-manrope text-sm text-[#9CA3AF]">
                  {item.metrics}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {heroCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#F3F4F6]' : 'bg-[#1E2130]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
