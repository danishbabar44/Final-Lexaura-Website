import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/lexaura-emblem.png"
        alt="Lexaura"
        width={120}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
}