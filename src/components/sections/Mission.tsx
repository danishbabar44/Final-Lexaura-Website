'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="bg-[#020410] border-b border-[#6366f1]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-6">
            OUR MISSION
          </div>

          <p className="font-inter text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-8">
            We believe in empowerment, not replacement. Our mission is to build AI infrastructure that augments human capabilities, enabling businesses to scale operations without scaling headcount.
          </p>

          <p className="font-inter text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-12">
            We don't sell AI wrappers. We sell Growth, Speed, and Infrastructure. Every system we build is owned entirely by you—no vendor lock-in, complete code ownership.
          </p>

          {/* Badges */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-manrope text-xl font-bold text-[#FFFFFF] mb-2">
                  High-Velocity Deployment
                </h3>
                <p className="font-inter text-sm text-[#E2E8F0]">
                  90% faster than traditional development cycles
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-manrope text-xl font-bold text-[#FFFFFF] mb-2">
                  Full Ownership
                </h3>
                <p className="font-inter text-sm text-[#E2E8F0]">
                  Complete code ownership with zero vendor lock-in
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-manrope text-xl font-bold text-[#FFFFFF] mb-2">
                  24/7 Autonomy
                </h3>
                <p className="font-inter text-sm text-[#E2E8F0]">
                  Infinite scale with zero human latency
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
