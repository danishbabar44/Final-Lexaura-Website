'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-px bg-[#1E2130]">
          {/* Left Column - Large Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#0B0C10] p-8 lg:col-span-2 flex flex-col justify-center"
          >
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-8">
              LET'S DISCUSS YOUR PROJECT
            </div>

            <Link href="/contact">
              <button className="w-full px-12 py-8 bg-[#F3F4F6] text-[#050507] font-manrope text-2xl md:text-3xl font-extrabold tracking-[-0.04em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300">
                LET'S / DISCUSS
              </button>
            </Link>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0B0C10] p-8 flex flex-col justify-center"
          >
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6">
              CONTACT
            </div>

            <a
              href="mailto:contact@lexaura.ca"
              className="font-manrope text-xl md:text-2xl font-bold text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors duration-300 mb-8"
            >
              contact@lexaura.ca
            </a>

            <div className="space-y-2">
              <div className="font-manrope text-sm text-[#9CA3AF]">
                Vancouver, Canada
              </div>
              <div className="font-manrope text-sm text-[#9CA3AF]">
                Dubai, UAE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
