'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Restaurants',
    description: 'AI Voice Receptionists for 24/7 orders & reservations',
  },
  {
    name: 'Dental/Medical',
    description: 'Automated booking with HIPAA-compliant systems',
  },
  {
    name: 'Real Estate',
    description: 'WhatsApp lead capture & CRM mapping',
  },
  {
    name: 'Law Firms',
    description: 'Automated client intake & document generation',
  },
  {
    name: 'E-Commerce',
    description: 'Content distribution for 10+ platforms',
  },
  {
    name: 'Field Services',
    description: 'Voice AI dispatching for technicians',
  },
  {
    name: 'SaaS Startups',
    description: '0-day onboarding & automated enrichment',
  },
  {
    name: 'Retail Chains',
    description: 'Unified dashboards for 50+ locations',
  },
  {
    name: 'Marketing Agencies',
    description: 'Workflow automation from payment to delivery',
  },
  {
    name: 'Finance Firms',
    description: 'Reconciliation engines for 100% tax accuracy',
  },
  {
    name: 'Your Industry',
    description: 'Don\'t fit into a box? Neither do we. Whether you are a solo founder or a Fortune 500, we architect custom AI solutions for your specific bottlenecks.',
  },
];

export default function Industries() {
  return (
    <section className="bg-[#020410] border-b border-[#6366f1]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Labels */}
        <div className="flex gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0]"
          >
            INDUSTRIES
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0]"
          >
            WE SPECIALIZE
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#6366f1]">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0A0A0B] p-8 hover:bg-[#1a1a2e] transition-colors duration-300"
            >
              <h3 className="font-manrope text-xl font-bold text-[#FFFFFF] mb-3">
                {industry.name}
              </h3>
              <p className="font-inter text-sm text-[#E2E8F0] leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
