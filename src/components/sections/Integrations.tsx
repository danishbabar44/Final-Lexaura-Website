'use client';

import { motion } from 'framer-motion';

const channels = [
  { name: 'CRM', tools: ['Salesforce', 'HubSpot', 'Apollo', 'Pipedrive'] },
  { name: 'Finance', tools: ['Stripe', 'QuickBooks', 'NetSuite', 'Xero'] },
  { name: 'Communication', tools: ['WhatsApp', 'Slack', 'Twilio', 'Intercom'] },
  { name: 'E-Com', tools: ['Shopify', 'WooCommerce', 'ServiceTitan', 'Jobber'] },
  { name: 'Ops', tools: ['Asana', 'Monday.com', 'Jira', 'ClickUp'] },
  { name: 'Management', tools: ['Trello', 'Notion', 'Basecamp', 'Airtable'] },
];

export default function Integrations() {
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
            INTEGRATIONS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]"
          >
            CHANNELS
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-inter text-lg md:text-xl text-[#F3F4F6] leading-relaxed mb-12 max-w-4xl"
        >
          Creating a multichannel interaction with customers across your entire tech ecosystem. We integrate directly with your existing tools to create a seamless operational engine.
        </motion.p>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2130]">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300"
            >
              <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-4">
                {channel.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {channel.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-[#050507] border border-[#1E2130] font-inter text-xs text-[#F3F4F6]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
