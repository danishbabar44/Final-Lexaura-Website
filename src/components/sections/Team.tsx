'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Danish Babar',
    role: 'Founder & Lead Architect',
    description: 'Architecting intelligent operations for modern business.',
  },
  {
    name: 'Alex Chen',
    role: 'AI Engineer',
    description: 'Building autonomous systems that scale infinitely.',
  },
  {
    name: 'Sarah Miller',
    role: 'Operations Lead',
    description: 'Ensuring seamless integration and deployment.',
  },
  {
    name: 'James Wilson',
    role: 'Solution Architect',
    description: 'Designing bespoke automation for enterprise clients.',
  },
];

export default function Team() {
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
          OUR TEAM
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E2130]">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
            >
              {/* Photo Placeholder */}
              <div className="w-full aspect-square bg-[#050507] border border-[#1E2130] mb-6 flex items-center justify-center">
                <div className="font-manrope text-sm text-[#9CA3AF]">Photo</div>
              </div>

              {/* Name */}
              <h3 className="font-manrope text-xl font-bold text-[#F3F4F6] mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4">
                {member.role}
              </div>

              {/* Description */}
              <p className="font-inter text-sm text-[#9CA3AF] leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
