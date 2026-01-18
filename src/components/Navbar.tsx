'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050507]/80 backdrop-blur-sm border-b border-[#1E2130]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-manrope text-xl font-extrabold tracking-[-0.04em] uppercase text-[#F3F4F6]">
            LEXAURA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-[#F3F4F6]'
                  : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300"
          >
            Book Strategy Session
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#F3F4F6]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
