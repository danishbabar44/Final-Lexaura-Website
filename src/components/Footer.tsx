'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [dubaiTime, setDubaiTime] = useState('');
  const [vancouverTime, setVancouverTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const dubai = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      const vancouver = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Vancouver',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setDubaiTime(dubai);
      setVancouverTime(vancouver);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050507] border-t border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px bg-[#1E2130]">
          {/* Column 1 - Menu */}
          <div className="bg-[#0B0C10] p-8">
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6">
              MENU
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="font-inter text-base text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-inter text-base text-[#111111] hover:text-[#666666] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="font-inter text-base text-[#111111] hover:text-[#666666] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/cases" className="font-inter text-base text-[#111111] hover:text-[#666666] transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-inter text-base text-[#111111] hover:text-[#666666] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-inter text-base text-[#111111] hover:text-[#666666] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Our Social */}
          <div className="bg-[#0B0C10] p-8">
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6">
              OUR SOCIAL
            </div>
            <div className="space-y-4">
              <a
                href="mailto:contact@lexaura.ca"
                className="flex items-center gap-3 font-inter text-base text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@lexaura.ca
              </a>
            </div>

            {/* Live Clocks */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-2">
                  VANCOUVER
                </div>
                <div className="font-mono text-sm text-[#F3F4F6]">
                  {vancouverTime}
                </div>
              </div>
              <div>
                <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-2">
                  DUBAI
                </div>
                <div className="font-mono text-sm text-[#F3F4F6]">
                  {dubaiTime}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div className="bg-[#0B0C10] p-8">
            <div className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6">
              LEGAL
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="font-inter text-base text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-inter text-base text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E2130] text-center">
          <p className="font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]">
            &copy; 2026 Lexaura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
