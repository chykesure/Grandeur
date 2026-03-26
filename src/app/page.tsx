// src/app/page.tsx
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/hero/HeroSection';
import CalenderWidget from '@/components/features/CalendarWidget';
import CampaignWidget from '@/components/features/CampaignWidget';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      {/* Navigation */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pb-12 lg:pb-16">
        <div className="w-full">
          <HeroSection />
        </div>
      </section>

      {/* CALENDAR WIDGET SECTION - Reduced gap */}
      <section className="pt-8 pb-14 lg:pt-10 lg:pb-16 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <CalenderWidget />
        </div>
      </section>

    </main>
  );
}