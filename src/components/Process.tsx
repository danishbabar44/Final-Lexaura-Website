'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BookStrategyButton from './BookStrategyButton';

const steps = [
  { title: 'Strategy', desc: 'View architecture into your workflows, pain points, and growth objectives.' },
  { title: 'Architecture', desc: 'Design bespoke automation blueprints tailored to your ecosystem.' },
  { title: 'Integration', desc: 'Seamlessly connect your tools with intelligent, scalable systems.' },
  { title: 'Optimization', desc: 'Monitor, optimize, and expand as your business evolves.' },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pulseY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pulseOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const pulseScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section className="relative py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
            Our Process
          </h2>
          <p className="font-inter text-lg text-slate-grey max-w-2xl mx-auto tracking-[0.4em] uppercase text-xs font-bold">
            A proven methodology for transforming your operations
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-cyan/20 hidden md:block"></div>
          <motion.div
            style={{
              y: pulseY,
              opacity: pulseOpacity,
              scale: pulseScale
            }}
            className="hidden md:flex absolute left-[25px] top-0 w-4 h-4 rounded-full bg-electric-cyan-bright shadow-[0_0_30px_rgba(34,211,238,0.8),0_0_60px_rgba(34,211,238,0.4)] z-10"
          />
          <div className="space-y-24 md:pl-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="hidden md:flex absolute left-[-52px] top-0 w-4 h-4 rounded-full bg-deep-slate border-2 border-electric-cyan/30"></div>
                <div className="absolute left-[-80px] top-0 w-16 h-16 bg-electric-cyan/10 rounded-full blur-xl pointer-events-none hidden md:block"></div>
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 rounded-full bg-electric-cyan-bright shadow-[0_0_20px_rgba(34,211,238,0.6)]"></div>
                  <span className="font-clash text-3xl text-electric-cyan-bright tracking-[-0.04em] font-semibold">
                    0{index + 1}
                  </span>
                </div>
                <div className="md:hidden font-clash text-2xl text-ghost-white mb-2 tracking-[-0.04em] font-semibold">
                  {step.title}
                </div>
                <div className="hidden md:block">
                  <span className="font-clash text-5xl text-electric-cyan/20 absolute -top-16 -left-4 tracking-[-0.04em] font-semibold">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="hidden md:block font-clash text-3xl text-ghost-white mb-4 tracking-[-0.04em] font-semibold">
                  {step.title}
                </h3>
                <p className="font-inter text-lg text-slate-grey leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <BookStrategyButton className="text-xs px-4 py-2" />
        </div>
      </div>
    </section>
  );
}
