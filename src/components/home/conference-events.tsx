'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: 'Conference Halls',
    description: 'State-of-the-art facilities for corporate meetings',
    image: '/conference.jpeg',
  },
  {
    title: 'Outdoor Events',
    description: 'Beautiful grounds for memorable celebrations',
    image: '/Banner5.jpg',
  },
  {
    title: 'Team Building',
    description: "Curated experiences to strengthen your team",
    image: '/team-building.jpeg',
  },
  {
    title: 'Corporate Events',
    description: 'Professional settings for business gatherings',
    image: '/Banner3.jpg',
  },
  {
    title: 'Social Gatherings',
    description: 'Elegant spaces for cherished celebrations',
    image: '/social.jpeg',
  },
  {
    title: 'Outdoor Catering',
    description: 'Exquisite culinary experiences outdoors',
    image: '/catering.jpeg',
  },
];

export function ConferencesEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const children = headingRef.current.children;
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (scrollContainerRef.current) {
        const cards = scrollContainerRef.current.querySelectorAll('.event-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id='conferences' className='py-16 sm:py-24 md:py-36 bg-background'>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div ref={headingRef} className='mb-10 sm:mb-16'>
          <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:mb-3 sm:text-[11px]'>
            Perfect Venue For
          </p>
          <h2 className='font-serif text-[1.75rem] font-light text-foreground sm:text-4xl md:text-5xl lg:text-6xl'>
            Business, Leisure
            <span className='italic text-foreground/50'> & Events</span>
          </h2>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className='flex gap-4 overflow-x-auto px-5 pb-4 sm:px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide md:container md:mx-auto md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-6 md:pb-0 lg:px-12'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event, i) => (
          <Link
            key={event.title}
            href='#conferences'
            className='event-card group flex-shrink-0 snap-start w-[75vw] sm:w-[60vw] md:w-auto'
          >
            <div className='relative mb-4 h-[280px] overflow-hidden sm:mb-5 sm:h-[340px] md:h-[420px]'>
              <Image
                src={event.image}
                alt={event.title}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 768px) 33vw, 75vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
              <div className='absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5'>
                <span className='font-serif text-[10px] text-white/50'>
                  0{i + 1}
                </span>
              </div>
            </div>
            <h3 className='mb-1 font-serif text-xl font-light text-foreground sm:text-2xl'>
              {event.title}
            </h3>
            <p className='text-[12px] text-muted-foreground sm:text-sm'>
              {event.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
