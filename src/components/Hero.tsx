import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BookStrategyButton from './BookStrategyButton';

const metrics = [
  { value: '500%', label: 'ROI Increase' },
  { value: '80%', label: 'Time Saved' },
  { value: '99.9%', label: 'Uptime' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-clash text-5xl md:text-7xl lg:text-8xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
            Transform Your
            <span className="block text-electric-cyan">Business</span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-slate-grey mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered automation solutions that revolutionize your workflow and accelerate growth
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <BookStrategyButton />
            <button className="group relative px-8 py-4 border border-silver/30 text-silver hover:text-pure-white transition-all rounded-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-2xl p-8"
            >
              <div className="font-clash text-4xl md:text-5xl text-electric-cyan-bright mb-2 font-semibold">
                {metric.value}
              </div>
              <div className="font-inter text-sm text-silver uppercase tracking-[0.2em] font-bold">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
