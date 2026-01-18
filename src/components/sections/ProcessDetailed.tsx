'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Target, Layers, Zap, BarChart } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'STRATEGY',
    bullets: [
      'Comprehensive operational audit',
      'Bottleneck identification',
      'KPI definition and measurement',
    ],
    description: 'We begin with a deep dive into your current operations, identifying inefficiencies and opportunities for automation. We define clear KPIs and success metrics to ensure measurable outcomes.',
    icon: Target,
  },
  {
    number: '02',
    title: 'ARCHITECTURE',
    bullets: [
      'System design and data mapping',
      'Tool selection and integration planning',
      'Workflow optimization',
    ],
    description: 'Our architects design bespoke automation systems tailored to your specific needs. We map data flows, select optimal tools, and create detailed technical specifications.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'INTEGRATION',
    bullets: [
      'API development and configuration',
      'Automation deployment',
      'Testing and quality assurance',
    ],
    description: 'We build and deploy your AI infrastructure, integrating seamlessly with your existing tech stack. Rigorous testing ensures reliability and performance.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'OPTIMIZATION',
    bullets: [
      'Performance monitoring',
      'Continuous improvement',
      'Feedback loops and iteration',
    ],
    description: 'Post-deployment, we continuously monitor and optimize your systems. We implement feedback loops and iterate based on real-world performance data.',
    icon: BarChart,
  },
];

export default function ProcessDetailed() {
  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Labels */}
        <div className="flex gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold"
          >
            TECHNOLOGY
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold"
          >
            OUR APPROACH
          </motion.div>
        </div>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="font-clash text-4xl md:text-5xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
            Four Steps to Intelligent Operations
          </h2>
          <p className="font-inter text-xl text-slate-grey max-w-3xl mx-auto leading-relaxed">
            Our proven methodology transforms your business through systematic automation and continuous optimization
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#0B0C10] border-2 border-[#6366f1] flex items-center justify-center group-hover:bg-[#6366f1] transition-all duration-300">
                      <step.icon className="w-6 h-6 text-[#6366f1] group-hover:text-[#050507] transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#0B0C10] border border-[#1E2130] p-8 hover:border-[#6366f1] transition-all duration-300">
                  {/* Title */}
                  <h3 className="font-clash text-2xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
                    {step.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="font-inter text-sm text-slate-grey flex items-start gap-3"
                      >
                        <ChevronRight className="w-4 h-4 text-[#6366f1] flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p className="font-inter text-sm text-slate-grey leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (hidden on mobile, shown on desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <ChevronRight className="w-6 h-6 text-[#6366f1]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <button className="px-8 py-4 bg-electric-cyan hover:bg-electric-cyan/90 text-obsidian font-semibold transition-colors font-inter text-center tracking-[0.4em] uppercase text-xs font-bold">
              Book Strategy Session
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
