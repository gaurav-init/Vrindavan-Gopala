import { ConferencesEvents } from '@/components/home/conference-events';
import { ExperienceCTA } from '@/components/home/experience-cta';
import { Gallery } from '@/components/home/gallery';
import { HealthClub } from '@/components/home/health-club';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import { BookingWidget } from '@/components/navs/booking-widget';
import PartnersSection from '@/components/home/partners';
import { Rooms } from '@/components/home/rooms';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ConferencesEvents />
      <Rooms />
      <ExperienceCTA />
      <Gallery />
      <HealthClub />
      <BookingWidget />
      <PartnersSection />
    </>
  );
}
