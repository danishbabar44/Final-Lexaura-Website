'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    rating: '5.0',
    quote: 'Lexaura transformed our operations. We reduced response times by 85% and increased lead conversion by 120%. The AI receptionists handle 1,000+ conversations simultaneously.',
    author: 'Sarah Chen',
    company: 'Medical Practice',
    location: 'Vancouver',
  },
  {
    rating: '5.0',
    quote: 'The automation system they built for us is incredible. We went from manual processes to fully autonomous workflows in just 4 weeks. 90% faster than we expected.',
    author: 'Michael Torres',
    company: 'Real Estate Firm',
    location: 'Dubai',
  },
  {
    rating: '5.0',
    quote: 'Full code ownership was a game-changer. We own everything they built, no vendor lock-in. The system scales infinitely without adding headcount.',
    author: 'Emma Wilson',
    company: 'E-Commerce Brand',
    location: 'Toronto',
  },
];

export default function Reviews() {
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
            REVIEWS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]"
          >
            OUR PARTNERS WILL TELL YOU BETTER ABOUT US
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2130]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#F3F4F6]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-inter text-base text-[#F3F4F6] leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[#1E2130] pt-6">
                <div className="font-manrope text-lg font-bold text-[#F3F4F6] mb-1">
                  {testimonial.author}
                </div>
                <div className="font-inter text-sm text-[#9CA3AF] mb-1">
                  {testimonial.company}
                </div>
                <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
