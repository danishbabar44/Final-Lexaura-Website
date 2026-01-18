'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Sparkles, Code, MessageCircle, Phone, Zap, Database, Target, Share2, BarChart, Users, Calendar, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    kicker: '01',
    title: 'AI Chatbots',
    subtitle: 'Conversational Logic',
    summary: 'Infinite concurrent conversations with 24/7 availability and 90% cost reduction.',
    superpower: 'Infinite Concurrent Conversations',
    edge: 'Unlike human staff who handle one chat at a time, AI handles 1,000+ simultaneously with 0ms wait times. 24/7 availability with 90% cost reduction.',
    stack: 'Serverless Webhook Management • WhatsApp API • Intercom SDK',
    narrative: 'We architect sophisticated conversational AI systems that operate across WhatsApp, Intercom, and custom web interfaces. Our approach leverages serverless webhook infrastructure to handle real-time message routing, intent classification, and automated qualification workflows.',
    operationalImpact: 'A field services company reduced response time by 85% and increased lead qualification accuracy by 40% through our WhatsApp-first conversational automation system.',
    icon: MessageCircle,
  },
  {
    kicker: '02',
    title: 'AI Receptionists',
    subtitle: 'Voice Orchestration',
    summary: 'Zero-latency booking that eliminates busy signals and on-hold frustration.',
    superpower: 'Zero-Latency Booking',
    edge: 'Eliminates busy signals and "on-hold" frustration. AI books appointments directly into scheduling software (Dentrix/ServiceTitan) while the human staff is busy on-site.',
    stack: 'Twilio Voice API • RingCentral SDK • Custom Speech Recognition',
    narrative: 'Our voice automation solutions transform traditional phone systems into intelligent reception centers. We integrate Twilio\'s Voice API with custom speech recognition and synthesis engines to handle inbound calls, route callers based on intent, and automate appointment scheduling.',
    operationalImpact: 'A medical practice reduced missed appointments by 60% and increased patient satisfaction scores through our AI-powered voice reception system with automated booking.',
    icon: Phone,
  },
  {
    kicker: '03',
    title: 'Workflow Automation',
    subtitle: 'Process Orchestration',
    summary: '100% logical follow-through with perfect accuracy on complex multi-app sequences.',
    superpower: '100% Logical Follow-through',
    edge: 'Humans forget steps; AI executes complex multi-app sequences in milliseconds with zero distraction and perfect accuracy every single time.',
    stack: 'Asana API • Jira API • Custom Workflow Engine',
    narrative: 'We build sophisticated process automation systems that connect your task management platforms with your entire operational ecosystem. Our solutions leverage Asana and Jira APIs to create intelligent workflow triggers, automated task assignment based on custom business rules.',
    operationalImpact: 'A construction firm reduced project delays by 45% and improved resource allocation efficiency by 70% through our process orchestration system connecting Asana with field operations.',
    icon: Zap,
  },
  {
    kicker: '04',
    title: 'Custom CRMs',
    subtitle: 'Enterprise Architecture',
    summary: 'Real-time bi-directional integrity ensuring sales and fulfillment never out of sync.',
    superpower: 'Real-Time Bi-Directional Integrity',
    edge: 'Automates the "admin work" humans hate. Every master record is updated across all platforms instantly, ensuring sales and fulfillment are never out of sync.',
    stack: 'Salesforce API • HubSpot API • Custom Object Schemas',
    narrative: 'Our enterprise architecture solutions transform generic CRM systems into powerful sales engines tailored to your specific business model. We leverage Salesforce and HubSpot APIs to create custom object schemas, automated lead scoring algorithms, and intelligent pipeline stage transitions.',
    operationalImpact: 'A B2B SaaS company increased sales team productivity by 65% and improved pipeline visibility by 80% through our custom Salesforce architecture with automated lead routing.',
    icon: Database,
  },
  {
    kicker: '05',
    title: 'Lead Gen Agents',
    subtitle: 'Enrichment Loops',
    summary: '60-second lead response that validates data and starts conversations instantly.',
    superpower: 'The 60-Second Lead Response',
    edge: 'Responds to and enriches leads the moment they trigger. Humans take hours; AI validates data and starts the conversation while the prospect\'s interest is at its peak.',
    stack: 'Apollo.io API • Outreach API • Custom Data Enrichment',
    narrative: 'We build outbound automation systems that transform manual prospecting into intelligent data-driven campaigns. Our solutions leverage Apollo.io and Outreach APIs to automate lead discovery, data enrichment, and personalized outreach sequences.',
    operationalImpact: 'A financial services firm increased meeting booking rates by 120% and reduced prospecting time by 75% through our outbound automation system with AI-powered personalization.',
    icon: Target,
  },
  {
    kicker: '06',
    title: 'Social Media Agents',
    subtitle: 'Distribution Logic',
    summary: 'Omni-channel formatting that instantly reformats content for 5+ platforms.',
    superpower: 'Omni-Channel Formatting',
    edge: 'Instantly reformats one piece of content for 5+ platforms. No manual resizing or re-typing. AI optimizes posting times based on live engagement data 24/7.',
    stack: 'LinkedIn API • Buffer API • Custom Content Engine',
    narrative: 'Our content automation systems transform manual social media management into intelligent publishing engines. We leverage LinkedIn and Buffer APIs to automate content distribution, schedule posts across multiple platforms, and track engagement metrics in real-time.',
    operationalImpact: 'A marketing agency increased content output by 300% while maintaining quality consistency through our content automation system with multi-platform publishing.',
    icon: Share2,
  },
  {
    kicker: '07',
    title: 'Analytics Dashboards',
    subtitle: 'Visualization Layer',
    summary: 'Raw data aggregation providing a God View updated every minute.',
    superpower: 'Raw Data Aggregation',
    edge: 'Bypasses standard API limitations to pull live data humans can\'t access manually, providing a "God View" of the business that is updated every minute.',
    stack: 'Tableau API • PowerBI API • Custom Data Connectors',
    narrative: 'We build unified data visualization systems that aggregate metrics from across your entire technology stack into actionable dashboards. Our solutions leverage Tableau and PowerBI APIs to create custom data connectors, automated data refresh schedules, and interactive visualizations.',
    operationalImpact: 'A manufacturing company reduced decision-making time by 60% and improved operational visibility by 90% through our unified dashboard system with real-time KPI tracking.',
    icon: BarChart,
  },
  {
    kicker: '08',
    title: 'Marketing Analytics',
    subtitle: 'Capital Consolidation',
    summary: 'Anomaly detection that catches ad-spend waste and mathematical errors in real-time.',
    superpower: 'Anomaly Detection',
    edge: 'Detects ad-spend waste and mathematical errors in ad accounts in real-time. It catches profit-draining mistakes that a human eye would miss in a spreadsheet.',
    stack: 'Google Ads API • Meta API • Custom Attribution Models',
    narrative: 'Our analytics automation systems transform fragmented marketing data into unified intelligence platforms. We leverage Google Ads and Meta APIs to automate data collection, normalize metrics across platforms, and calculate unified ROI metrics.',
    operationalImpact: 'An e-commerce company improved ROAS by 45% and reduced manual reporting time by 85% through our analytics automation system with unified attribution modeling.',
    icon: Globe,
  },
  {
    kicker: '09',
    title: 'Onboarding Automation',
    subtitle: 'Provisioning Flows',
    summary: '0-Day account access that provisions 20+ software accounts instantly.',
    superpower: '0-Day Account Access',
    edge: 'Provisions 20+ software accounts and generates legal contracts the second a hire is made. Humans take days; AI ensures the team is productive on hour one.',
    stack: 'BambooHR API • Slack API • Custom Provisioning Engine',
    narrative: 'We build employee onboarding automation systems that transform manual HR processes into seamless digital experiences. Our solutions leverage BambooHR and Slack APIs to automate account creation, access provisioning across all systems, and automated task assignment for new hires.',
    operationalImpact: 'A technology company reduced onboarding time by 70% and improved new hire productivity by 50% through our onboarding automation system with automated access provisioning.',
    icon: Users,
  },
  {
    kicker: '10',
    title: 'High-Performance Web Design',
    subtitle: 'Web Development',
    summary: '0-Day Visual Deployment delivering premium, high-performance web development in days, not months.',
    superpower: '0-Day Visual Deployment',
    edge: 'Traditional agencies take 3-6 months for a high-fidelity build. We use AI-assisted orchestration to deliver premium, high-performance web development (identical in quality to this site) in days, not months.',
    stack: 'Next.js 14 • TypeScript • Tailwind CSS • Framer Motion',
    narrative: 'We architect and build bespoke web experiences using cutting-edge technologies like Next.js 14, TypeScript, and Framer Motion. Our AI-assisted development pipeline accelerates visual deployment while maintaining enterprise-grade quality, performance, and accessibility standards.',
    operationalImpact: 'A luxury e-commerce brand launched their new digital platform in 14 days (vs. industry average of 4-6 months) with 99/100 Lighthouse performance score and 40% increase in conversion rate.',
    icon: Calendar,
  },
];

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="py-16 relative z-10">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
        {/* Text Side */}
        <div className="flex-1 relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
              {service.kicker}
            </span>
            <span className="text-slate-grey/40">•</span>
            <p className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
              {service.subtitle}
            </p>
          </div>

          <h2 className="font-clash text-3xl md:text-4xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold">
            {service.title}
          </h2>

          <p className="font-inter text-lg text-slate-grey leading-relaxed mb-8">
            {service.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-gradient-to-r from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              24/7 Autonomy
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              Zero Human Latency
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              Infinite Scale
            </span>
          </div>

          {/* View Architecture Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 px-6 py-4 border border-white text-white font-inter text-center tracking-[0.4em] uppercase text-xs font-bold hover:bg-white hover:text-[#020410] transition-all rounded-lg group"
          >
            <Layers className="w-4 h-4" />
            <span>{isExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Graphic Side */}
        <div className="flex-1 w-full">
          <div className="h-[450px] bg-gradient-to-br from-[#0F1015] via-[#1A1C2E] to-[#0F1015] border border-[#2A2D3A] flex items-center justify-center relative overflow-hidden hover:from-[#1A1C2E] hover:via-[#252840] hover:to-[#1A1C2E] transition-all duration-500 shadow-2xl">
            <div className="w-40 h-40 bg-gradient-to-br from-[#0A0B1A] to-[#1A1C2E] border border-[#2A2D3A] flex items-center justify-center shadow-xl relative z-10">
              <service.icon className="w-20 h-20 text-electric-cyan drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Operational Impact */}
            <div className="bg-gradient-to-br from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-electric-cyan" />
                <span className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
                  Operational Impact
                </span>
              </div>
              <p className="font-inter text-lg text-slate-grey leading-relaxed">
                {service.operationalImpact}
              </p>
            </div>

            {/* Stack Code */}
            <div className="bg-gradient-to-br from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-4 h-4 text-electric-cyan" />
                <span className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
                  Stack
                </span>
              </div>
              <p className="font-mono text-sm text-ghost-white leading-relaxed">
                {service.stack}
              </p>
            </div>

            {/* Implementation Strategy */}
            <div className="bg-gradient-to-br from-[#0F1015] to-[#1A1C2E] border border-[#2A2D3A] p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-electric-cyan" />
                <span className="font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold">
                  Implementation
                </span>
              </div>
              <p className="font-inter text-lg text-slate-grey leading-relaxed">
                {service.narrative}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0B1A]">
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="font-clash text-5xl md:text-7xl lg:text-8xl text-pure-white mb-8 font-semibold">
              Architectural Intelligence.
            </h1>
            <p className="font-inter text-3xl text-pure-white max-w-4xl mx-auto leading-relaxed font-bold">
              Bespoke digital infrastructure for the modern enterprise
            </p>
          </div>
        </section>

        <section className="relative pb-32 px-6">
          <div className="max-w-6xl mx-auto relative z-10">
            {services.map((service, index) => (
              <ServiceBlock key={index} service={service} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/contact">
              <button className="px-8 py-4 bg-electric-cyan hover:bg-electric-cyan/90 text-obsidian font-semibold rounded-xl transition-colors font-inter text-center tracking-[0.4em] uppercase text-xs font-bold">
                Book Strategy Session
              </button>
            </Link>
          </div>
        </section>
    </div>
  );
}