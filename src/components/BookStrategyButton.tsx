import Link from 'next/link';

export default function BookStrategyButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`relative px-6 py-3 border-2 border-electric-cyan text-electric-cyan font-inter text-sm tracking-[0.4em] uppercase font-bold hover:bg-electric-cyan hover:text-obsidian transition-all rounded-lg overflow-hidden group shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-pulse ${className}`}
    >
      <span className="relative z-10">Book Strategy Session</span>
    </Link>
  );
}
