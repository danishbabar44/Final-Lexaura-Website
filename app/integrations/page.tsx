'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'crm', label: 'CRM' },
  { id: 'finance', label: 'Finance' },
  { id: 'communication', label: 'Communication' },
  { id: 'ecom', label: 'E-Com/Operations' },
  { id: 'management', label: 'Management' },
];

const integrations = [
  // CRM
  { name: 'Salesforce', category: 'crm', color: '#00A1E0', url: 'https://www.salesforce.com' },
  { name: 'HubSpot', category: 'crm', color: '#FF7A59', url: 'https://www.hubspot.com' },
  { name: 'Apollo', category: 'crm', color: '#E04F5F', url: 'https://www.apollo.io' },
  { name: 'Pipedrive', category: 'crm', color: '#FF5C35', url: 'https://www.pipedrive.com' },
  { name: 'Zoho', category: 'crm', color: '#FF6F00', url: 'https://www.zoho.com' },
  { name: 'Insightly', category: 'crm', color: '#00AEEF', url: 'https://www.insightly.com' },
  { name: 'Freshsales', category: 'crm', color: '#1A73E8', url: 'https://www.freshworks.com/crm' },
  { name: 'Microsoft Dynamics', category: 'crm', color: '#002050', url: 'https://dynamics.microsoft.com' },
  // Finance
  { name: 'Stripe', category: 'finance', color: '#635BFF', url: 'https://stripe.com' },
  { name: 'QuickBooks', category: 'finance', color: '#2CA9BC', url: 'https://quickbooks.intuit.com' },
  { name: 'NetSuite', category: 'finance', color: '#1A3A5E', url: 'https://www.netsuite.com' },
  { name: 'Xero', category: 'finance', color: '#13B5EA', url: 'https://www.xero.com' },
  { name: 'PayPal', category: 'finance', color: '#003087', url: 'https://www.paypal.com' },
  { name: 'Braintree', category: 'finance', color: '#003366', url: 'https://www.braintreepayments.com' },
  { name: 'Square', category: 'finance', color: '#006AFF', url: 'https://squareup.com' },
  { name: 'Adyen', category: 'finance', color: '#0ABF53', url: 'https://www.adyen.com' },
  { name: 'Wise', category: 'finance', color: '#00B9F1', url: 'https://wise.com' },
  { name: 'Plaid', category: 'finance', color: '#2EB67D', url: 'https://plaid.com' },
  // Communication
  { name: 'WhatsApp', category: 'communication', color: '#25D366', url: 'https://www.whatsapp.com' },
  { name: 'Slack', category: 'communication', color: '#4A154B', url: 'https://slack.com' },
  { name: 'Twilio', category: 'communication', color: '#F22F46', url: 'https://www.twilio.com' },
  { name: 'Intercom', category: 'communication', color: '#1F8DED', url: 'https://www.intercom.com' },
  { name: 'SendGrid', category: 'communication', color: '#00A4EF', url: 'https://sendgrid.com' },
  { name: 'Mailgun', category: 'communication', color: '#FF4A3D', url: 'https://www.mailgun.com' },
  { name: 'Discord', category: 'communication', color: '#5865F2', url: 'https://discord.com' },
  { name: 'Telegram', category: 'communication', color: '#0088CC', url: 'https://telegram.org' },
  { name: 'Microsoft Teams', category: 'communication', color: '#6264A7', url: 'https://www.microsoft.com/teams' },
  // Operations
  { name: 'Shopify', category: 'ecom', color: '#96BF48', url: 'https://www.shopify.com' },
  { name: 'WooCommerce', category: 'ecom', color: '#96588A', url: 'https://woocommerce.com' },
  { name: 'ServiceTitan', category: 'ecom', color: '#00AEEF', url: 'https://www.servicetitan.com' },
  { name: 'Jobber', category: 'ecom', color: '#00B8D4', url: 'https://getjobber.com' },
  { name: 'BigCommerce', category: 'ecom', color: '#121118', url: 'https://www.bigcommerce.com' },
  { name: 'Magento', category: 'ecom', color: '#F26322', url: 'https://magento.com' },
  { name: 'Odoo', category: 'ecom', color: '#714B67', url: 'https://www.odoo.com' },
  { name: 'SAP', category: 'ecom', color: '#008FD3', url: 'https://www.sap.com' },
  // Management
  { name: 'Asana', category: 'management', color: '#F06A6A', url: 'https://asana.com' },
  { name: 'Monday.com', category: 'management', color: '#FF3D57', url: 'https://monday.com' },
  { name: 'Jira', category: 'management', color: '#0052CC', url: 'https://www.atlassian.com/software/jira' },
  { name: 'ClickUp', category: 'management', color: '#7B68EE', url: 'https://clickup.com' },
  { name: 'Trello', category: 'management', color: '#0079BF', url: 'https://trello.com' },
  { name: 'Notion', category: 'management', color: '#000000', url: 'https://www.notion.so' },
  { name: 'Basecamp', category: 'management', color: '#5ECC62', url: 'https://basecamp.com' },
  { name: 'Airtable', category: 'management', color: '#18BFFF', url: 'https://airtable.com' },
  { name: 'Smartsheet', category: 'management', color: '#0478C9', url: 'https://www.smartsheet.com' },
  { name: 'Linear', category: 'management', color: '#5E6AD2', url: 'https://linear.app' },
];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredIntegrations = selectedCategory === 'all'
    ? integrations
    : integrations.filter(int => int.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#050507]">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-manrope text-4xl md:text-6xl font-extrabold tracking-[-0.08em] uppercase text-[#F3F4F6] mb-8"
            >
              Software Integrations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-inter text-xl md:text-2xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed"
            >
              Seamless connections to your entire tech ecosystem
            </motion.p>
          </div>
        </section>

        <section className="relative pb-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center px-4 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 border-2 rounded-full font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase transition-all
                    ${selectedCategory === category.id
                      ? 'border-[#F3F4F6] text-[#F3F4F6] bg-[#F3F4F6]/5'
                      : 'border-[#1E2130] text-[#9CA3AF] hover:border-[#F3F4F6] hover:text-[#F3F4F6]'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[#1E2130]">
              {filteredIntegrations.map((integration, index) => (
                <motion.a
                  key={integration.name}
                  href={integration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="bg-[#0B0C10] p-8 flex items-center justify-center aspect-square relative overflow-hidden group transition-all duration-300"
                >
                  <div className="relative z-10 text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl font-bold border border-[#1E2130] group-hover:border-[#F3F4F6] transition-all"
                      style={{
                        backgroundColor: `${integration.color}10`,
                        color: integration.color,
                      }}
                    >
                      {integration.name[0]}
                    </div>
                    <span className="font-manrope text-sm text-[#F3F4F6] font-semibold group-hover:text-[#9CA3AF] transition-colors">
                      {integration.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 px-6 border-t border-[#1E2130]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#0B0C10] border border-[#1E2130] rounded-3xl p-12 text-center"
            >
              <h2 className="font-manrope text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-6 tracking-[-0.04em]">
                Custom Connectivity
              </h2>
              <p className="font-inter text-xl text-[#9CA3AF] leading-relaxed">
                If your software has an API, we can orchestrate it. No platform is out of reach.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
