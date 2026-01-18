'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'Empowerment',
    description: 'We build systems that augment human capabilities, not replace them. Every solution is designed to empower your team.',
  },
  {
    number: '02',
    title: 'Ownership',
    description: 'You own every line of code we write. No vendor lock-in, complete transparency, full control over your infrastructure.',
  },
  {
    number: '03',
    title: 'Speed',
    description: '90% faster deployment through AI-accelerated development. What takes months takes weeks.',
  },
  {
    number: '04',
    title: 'Care',
    description: 'We care about your success as much as you do. Long-term partnerships, not transactional projects.',
  },
  {
    number: '05',
    title: 'Practice',
    description: 'We practice what we preach. Our own operations run on the same systems we build for you.',
  },
  {
    number: '06',
    title: 'Justice',
    description: 'Fair pricing, transparent processes, honest communication. No hidden fees, no surprises.',
  },
];

export default function Principles() {
  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Labels */}
        <div className="flex gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]"
          >
            PRINCIPLES
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]"
          >
            OUR CULTURE
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2130]">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
            >
              {/* Number */}
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-4">
                {principle.number}
              </div>

              {/* Title */}
              <h3 className="font-manrope text-2xl font-bold text-[#F3F4F6] mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-[#9CA3AF] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
