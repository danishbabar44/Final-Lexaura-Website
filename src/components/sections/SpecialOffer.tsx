'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SpecialOffer() {
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
          SPECIAL OFFER
        </motion.div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2130]">
          {/* Card 1 - Architecture Audit */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
          >
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4">
              Architecture Audit
            </div>

            <div className="font-manrope text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-6">
              $250
            </div>

            <ul className="space-y-3 mb-8">
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2" />
                Complete operational audit
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2" />
                Bottleneck identification
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2" />
                Automation roadmap
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2" />
                ROI projection
              </li>
            </ul>

            <Link href="/contact">
              <button className="w-full px-6 py-4 border border-[#1E2130] text-[#F3F4F6] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#F3F4F6] hover:text-[#050507] transition-colors duration-300">
                Book Architecture Audit
              </button>
            </Link>
          </motion.div>

          {/* Card 2 - Strategy Session */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#0B0C10] text-[#F3F4F6] p-8 hover:bg-[#0F1015] transition-colors duration-300"
          >
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4">
              Strategy Session
            </div>

            <div className="font-manrope text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
              FREE
            </div>

            <ul className="space-y-3 mb-8">
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2" />
                60-minute strategy call
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2" />
                Custom automation blueprint
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2" />
                Implementation timeline
              </li>
              <li className="font-inter text-sm text-[#9CA3AF] flex items-start gap-2">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2" />
                No obligation
              </li>
            </ul>

            <Link href="/contact">
              <button className="w-full px-6 py-4 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300">
                Book Strategy Session
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
