'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    kicker: '01',
    title: 'AI Chatbots',
    description: 'Infinite concurrent conversations with 24/7 availability and 90% cost reduction.',
  },
  {
    kicker: '02',
    title: 'AI Receptionists',
    description: 'Zero-latency booking that eliminates busy signals and on-hold frustration.',
  },
  {
    kicker: '03',
    title: 'Workflow Automation',
    description: '100% logical follow-through with perfect accuracy on complex multi-app sequences.',
  },
  {
    kicker: '04',
    title: 'Custom CRMs',
    description: 'Real-time bi-directional integrity ensuring sales and fulfillment never out of sync.',
  },
  {
    kicker: '05',
    title: 'Lead Gen Agents',
    description: '60-second lead response that validates data and starts conversations instantly.',
  },
  {
    kicker: '06',
    title: 'High Performance Web Development',
    description: 'Lightning-fast, scalable web applications built for optimal user experience and conversion.',
  },
];

export default function Services() {
  return (
    <section className="bg-[#020410] border-b border-[#6366f1]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-12"
        >
          SOLUTIONS
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#6366f1]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0A0A0B] p-8 hover:bg-[#1a1a2e] transition-colors duration-300 group"
            >
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-4">
                {service.kicker}
              </div>
              <h3 className="font-manrope text-xl font-bold text-[#FFFFFF] mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-[#E2E8F0] leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href="/services">
                <button className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#FFFFFF] hover:text-[#E2E8F0] transition-colors duration-300">
                  See If You're Ready
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
