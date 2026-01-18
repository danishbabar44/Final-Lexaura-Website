'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 via-transparent to-electric-cyan/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-clash text-5xl md:text-7xl lg:text-8xl text-pure-white mb-8 font-semibold"
            >
              Lean Team. Unlimited Scale.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter text-3xl text-pure-white max-w-3xl mx-auto leading-relaxed font-bold"
            >
              We bridge the gap between Dubai ambition and Canadian precision
            </motion.p>
          </div>
        </section>

        <section className="relative py-48 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-clash text-3xl md:text-4xl text-ghost-white mb-12 tracking-[-0.04em] font-semibold text-center">
                Our Philosophy
              </h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-clash text-5xl md:text-6xl lg:text-7xl text-ghost-white mb-8 tracking-[-0.04em] font-semibold text-center leading-tight"
              >
                Empowerment, not Replacement.
              </motion.p>
              <p className="font-inter text-xl md:text-2xl text-silver leading-relaxed max-w-4xl mx-auto text-center">
                We build the intelligent infrastructure that handles the busywork, giving your experts the freedom to focus on strategy. Every solution we architect is designed to remove friction from your operations while preserving the human judgment and creativity that drives your business forward.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative py-48 px-6 bg-deep-slate/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-clash text-3xl md:text-4xl text-ghost-white mb-12 tracking-[-0.04em] font-semibold text-center"
            >
              The Dubai-Canada Bridge
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-clash text-2xl md:text-3xl text-ghost-white mb-4 tracking-[-0.04em] font-semibold">
                    Dubai: Ambition & Execution
                  </h3>
                  <p className="font-inter text-lg text-slate-grey leading-relaxed">
                    Our Dubai headquarters operates at the intersection of rapid innovation and global ambition. The Middle East's dynamic business environment has taught us to move fast, think big, and execute with precision. We bring this energy to every project, delivering solutions that scale at the pace of your growth.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-deep-indigo/10  blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-clash text-2xl md:text-3xl text-ghost-white mb-4 tracking-[-0.04em] font-semibold">
                    Canada: Precision & Engineering
                  </h3>
                  <p className="font-inter text-lg text-slate-grey leading-relaxed">
                    Our Canadian operations channel North America's tradition of engineering excellence and methodical precision. This foundation ensures that every solution we build is architected for reliability, security, and long-term maintainability. We bring this rigor to every line of code we write.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
}
