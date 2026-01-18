'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [dubaiTime, setDubaiTime] = useState('');
  const [canadaTime, setCanadaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const dubai = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      const canada = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'America/Vancouver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setDubaiTime(dubai);
      setCanadaTime(canada);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 via-transparent to-electric-cyan/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/20  blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-clash text-5xl md:text-7xl lg:text-8xl text-pure-white mb-8 font-semibold"
            >
              Begin Your Strategy Session.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter text-3xl text-pure-white max-w-3xl mx-auto leading-relaxed font-bold"
            >
              Accepting new partners for Q1 strategy sessions
            </motion.p>
          </div>
        </section>

        <section className="relative py-48 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-clash text-3xl md:text-4xl text-ghost-white mb-8 tracking-[-0.04em] font-semibold">
                  Schedule Your Strategy Session
                </h2>
                <p className="font-inter text-lg text-slate-grey leading-relaxed mb-8">
                  Book a 30-minute discovery call with our senior architects. We'll analyze your current workflows and identify high-impact automation opportunities.
                </p>

                <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3">
                        Current Software Stack
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                        placeholder="e.g., Salesforce, HubSpot, Zapier, Asana..."
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3">
                        Budget Range
                      </label>
                      <select className="w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors">
                        <option value="">Select budget range</option>
                        <option value="1k-5k">$1,000 – $5,000 USD</option>
                        <option value="5k-10k">$5,000 – $10,000 USD</option>
                        <option value="10k-50k">$10,000 – $50,000 USD (Max)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3">
                        Scale Objectives
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                        placeholder="Describe your automation goals and desired outcomes..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-electric-cyan hover:bg-electric-cyan/90 text-obsidian font-semibold  transition-colors font-inter text-center tracking-[0.4em] uppercase text-xs font-bold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-clash text-3xl md:text-4xl text-ghost-white mb-8 tracking-[-0.04em] font-semibold">
                  Our Offices
                </h2>

                <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10  blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-electric-cyan-bright" />
                      <h3 className="font-clash text-2xl text-ghost-white tracking-[-0.04em] font-semibold">
                        Dubai Head Office
                      </h3>
                    </div>
                    <p className="font-inter text-slate-grey mb-4">
                      Business Bay, Dubai, UAE
                    </p>
                    <div className="flex items-center gap-2 text-electric-cyan font-inter text-sm">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{dubaiTime}</span>
                      <span className="text-slate-grey/60">GST</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-deep-indigo/10  blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-electric-cyan-bright" />
                      <h3 className="font-clash text-2xl text-ghost-white tracking-[-0.04em] font-semibold">
                        Canadian Operations
                      </h3>
                    </div>
                    <p className="font-inter text-slate-grey mb-4">
                      Vancouver, British Columbia, Canada
                    </p>
                    <div className="flex items-center gap-2 text-electric-cyan font-inter text-sm">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{canadaTime}</span>
                      <span className="text-slate-grey/60">PST</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8">
                  <h3 className="font-clash text-xl text-ghost-white mb-4 tracking-[-0.04em] font-semibold">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:contact@lexaura.ca"
                      className="block font-inter text-slate-grey hover:text-electric-cyan transition-colors"
                    >
                      contact@lexaura.ca
                    </a>
                                      </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
}
