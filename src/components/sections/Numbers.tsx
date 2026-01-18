'use client';

import { motion } from 'framer-motion';

const numbers = [
  {
    value: '90%',
    label: 'Faster Deployment',
  },
  {
    value: '100%',
    label: 'Code Ownership',
  },
  {
    value: '24/7',
    label: 'Autonomy',
  },
  {
    value: '0%',
    label: 'Vendor Lock-In',
  },
];

export default function Numbers() {
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
          NUMBERS
        </motion.div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E2130] mb-16">
          {numbers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0B0C10] p-8 text-center"
            >
              <div className="font-manrope text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-2">
                {item.value}
              </div>
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="max-w-4xl"
        >
          <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6">
            RESULT
          </div>
          <p className="font-inter text-lg md:text-xl text-[#F3F4F6] leading-relaxed mb-8">
            Our clients achieve operational autonomy within weeks, not months. By architecting bespoke AI systems that integrate seamlessly with existing infrastructure, we eliminate bottlenecks, reduce costs by up to 60%, and enable infinite scale without scaling headcount.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
