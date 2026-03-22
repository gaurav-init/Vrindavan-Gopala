'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    title: 'Junior Suite',
    count: '2 Rooms',
    image: '/massage-room.jpg',
    features: ['King Bed', 'Garden View', 'Mini Bar'],
  },
  {
    title: 'Superior Deluxe',
    count: '22 Rooms',
    image: '/deluxe.jpeg',
    features: ['Queen Bed', 'City View', 'Workspace'],
  },
  {
    title: 'Standard Room',
    count: '45 Rooms',
    image: '/standard.jpeg',
    features: ['Double Bed', 'En-suite', 'Wi-Fi'],
  },
  {
    title: 'Executive Room',
    count: '6 Rooms',
    image: '/executive.jpeg',
    features: ['King Bed', 'Lounge', 'Premium'],
  },
];

export function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

      if (scrollRef.current) {
        const cards = scrollRef.current.querySelectorAll('.room-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scrollRef.current,
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
    <section ref={sectionRef} id='rooms' className='py-16 sm:py-24 md:py-36 bg-cream'>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div ref={headingRef} className='mb-10 text-center sm:mb-14'>
          <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:mb-3 sm:text-[11px]'>
            Accommodation
          </p>
          <h2 className='font-serif text-[1.75rem] font-light text-forest sm:text-4xl md:text-5xl lg:text-6xl'>
            Rooms & Suites
          </h2>
          <p className='mx-auto mt-3 max-w-md text-[12px] leading-relaxed text-muted-foreground sm:mt-4 sm:max-w-xl sm:text-[15px]'>
            Elegantly designed rooms and cottages with modern amenities,
            nestled amidst nature near the iconic Dhuandhar Waterfall
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory sm:px-6 lg:px-12 md:container md:mx-auto md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {rooms.map((room) => (
          <div key={room.title} className='room-card group flex-shrink-0 snap-start w-[72vw] cursor-pointer sm:w-[55vw] md:w-auto'>
            <div className='relative mb-4 h-[280px] overflow-hidden sm:h-[340px] md:h-[400px]'>
              <Image
                src={room.image}
                alt={room.title}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 72vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent' />

              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-5'>
                <div className='flex flex-wrap gap-1.5 opacity-100 transition-all duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'>
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className='bg-white/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-sm sm:text-[10px]'
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex items-start justify-between'>
              <div>
                <h3 className='font-serif text-lg font-light text-foreground sm:text-xl'>
                  {room.title}
                </h3>
                <p className='mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]'>
                  {room.count}
                </p>
              </div>
              <Link
                href='#booking'
                className='mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold transition-colors active:text-gold-light hover:text-gold-light sm:text-[11px]'
              >
                Book &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
