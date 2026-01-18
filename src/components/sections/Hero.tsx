'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const heroSectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 0 });
  const subheadRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.1, delay: 200 });
  const ctaRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 300 });
  const trustRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1, delay: 400 });

  const heroLines = [
    'YOUR BUSINESS',
    'SCALED',
    'WITHOUT',
    'MORE',
    'HEADCOUNT',
  ];

  return (
    <section ref={heroSectionRef} className="pt-[70px] min-h-screen bg-[#020410] border-b border-[#6366f1] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#6366f1]/5 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#6366f1]/5 blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16 md:pt-16 md:pb-20 relative z-10">
        <div className="text-center mb-8">
          {/* Animated Gradient Text */}
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] uppercase text-[#FFFFFF] leading-tight text-center"
            >
              YOUR BUSINESS SCALED WITHOUT MORE HEADCOUNT
            </motion.h1>
          </div>

          {/* Subhead */}
          <motion.p
            ref={subheadRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-inter text-xl md:text-2xl lg:text-3xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Transform your business with intelligent automation solutions that scale exponentially while maintaining operational excellence
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-[#6366f1] hover:bg-[#5558E3] text-[#FFFFFF] font-inter text-center tracking-[0.4em] uppercase text-xs font-bold transition-all duration-300 shadow-lg shadow-[#6366f1]/25 hover:shadow-xl hover:shadow-[#6366f1]/35">
                Start Transformation
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 bg-transparent border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-[#FFFFFF] font-inter text-center tracking-[0.4em] uppercase text-xs font-bold transition-all duration-300">
                View Solutions
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={trustRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center group">
            <div className="font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300">10x</div>
            <div className="font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]">Potential</div>
          </div>
          <div className="text-center group">
            <div className="font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300">99.9%</div>
            <div className="font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]">Uptime</div>
          </div>
          <div className="text-center group">
            <div className="font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300">24/7</div>
            <div className="font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]">Support</div>
          </div>
          <div className="text-center group">
            <div className="font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300">10x</div>
            <div className="font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]">ROI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
