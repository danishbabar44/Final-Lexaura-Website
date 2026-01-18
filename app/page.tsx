import Hero from '@/components/sections/Hero';
import HeroCases from '@/components/sections/HeroCases';
import Mission from '@/components/sections/Mission';
import Services from '@/components/sections/Services';
import ProcessShort from '@/components/sections/ProcessShort';
import ProcessDetailed from '@/components/sections/ProcessDetailed';
import Integrations from '@/components/sections/Integrations';
import Numbers from '@/components/sections/Numbers';
import Industries from '@/components/sections/Industries';
import Principles from '@/components/sections/Principles';
import SpecialOffer from '@/components/sections/SpecialOffer';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020410]">
      <Hero />
      <HeroCases />
      <Mission />
      <Services />
      <ProcessShort />
      <ProcessDetailed />
      <Integrations />
      <Numbers />
      <Industries />
      <Principles />
      <SpecialOffer />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
