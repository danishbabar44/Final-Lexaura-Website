'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    category: 'Operations',
    title: 'How AI Receptionists Are Transforming Medical Practices',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
  },
  {
    category: 'Automation',
    title: 'The Future of Workflow Automation in Real Estate',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
  },
  {
    category: 'Strategy',
    title: 'Building AI Infrastructure That Scales Without Scaling Headcount',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
  },
];

export default function Articles() {
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
            ARTICLES
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]"
          >
            PRACTICAL BLOG
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2130] mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
            >
              {/* Category */}
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-4">
                {article.category}
              </div>

              {/* Title */}
              <h3 className="font-manrope text-xl font-bold text-[#F3F4F6] mb-4 leading-tight">
                {article.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 font-inter text-sm text-[#9CA3AF]">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href="/blog">
            <button className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors duration-300">
              VIEW ALL INSIGHTS
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
