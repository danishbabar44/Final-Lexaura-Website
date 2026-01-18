'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    week: 'WEEK 1',
    title: 'Strategy',
    description: 'Mapping operational bottlenecks and defining KPIs',
  },
  {
    week: 'WEEK 2',
    title: 'Architecture',
    description: 'Designing bespoke automation logic and data flows',
  },
  {
    week: 'WEEK 3',
    title: 'Integration',
    description: 'Connecting APIs and deploying automation systems',
  },
  {
    week: 'WEEK 4',
    title: 'Optimization',
    description: 'Continuous algorithmic improvement and iteration',
  },
];

export default function ProcessShort() {
  return (
    <section className="bg-[#050507] border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Steps List */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-8">
              THE WAY WE WORK
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-16">
                    <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]">
                      {step.week}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-manrope text-xl font-bold text-[#F3F4F6] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-[#9CA3AF]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Mini Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#0B0C10] border border-[#1E2130] p-8">
              <h3 className="font-manrope text-2xl font-bold text-[#F3F4F6] mb-6">
                Ready to discuss your project?
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-2">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 bg-[#050507] border border-[#1E2130] font-inter text-sm text-[#F3F4F6] focus:outline-none focus:border-[#9CA3AF] transition-colors">
                    <option value="">Select your industry</option>
                    <option value="restaurants">Restaurants</option>
                    <option value="medical">Dental/Medical</option>
                    <option value="realestate">Real Estate</option>
                    <option value="law">Law Firms</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="field">Field Services</option>
                    <option value="saas">SaaS Startups</option>
                    <option value="retail">Retail Chains</option>
                    <option value="marketing">Marketing Agencies</option>
                    <option value="finance">Finance Firms</option>
                  </select>
                </div>

                <div>
                  <label className="block font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#050507] border border-[#1E2130] font-inter text-sm text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
