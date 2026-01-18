'use client';

import { motion } from 'framer-motion';

const industries = [
  { name: 'Healthcare', description: 'Automated patient scheduling, billing, and record management' },
  { name: 'Finance', description: 'Compliance automation and intelligent transaction processing' },
  { name: 'E-Commerce', description: 'Order fulfillment and inventory management automation' },
  { name: 'Real Estate', description: 'Lead qualification and property management workflows' },
  { name: 'Manufacturing', description: 'Supply chain optimization and production scheduling' },
  { name: 'Legal', description: 'Document automation and case management systems' },
];

export default function IndustrySolutions() {
  return (
    <section className="relative py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
            Industry Solutions
          </h2>
          <p className="font-inter text-lg text-slate-grey max-w-2xl mx-auto tracking-[0.4em] uppercase text-xs font-bold">
            Tailored automation for your sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(34, 211, 238, 0.8)',
              }}
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-2xl p-8 relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="font-clash text-2xl text-pure-white mb-4 tracking-[-0.04em] font-semibold">
                  {industry.name}
                </h3>
                <p className="font-inter text-base text-slate-grey leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
