'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { name: 'Rooftop Pool' },
  { name: 'Fitness Club' },
  { name: 'Steam Room' },
  { name: 'Sauna & Spa' },
];

export function HealthClub() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (contentRef.current) {
        const children = contentRef.current.children;
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
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
    <section ref={sectionRef} id='health' className='py-16 sm:py-24 md:py-36 bg-background'>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div className='grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20'>
          <div ref={imageRef} className='relative h-[260px] overflow-hidden sm:h-[360px] md:h-[480px] lg:h-[580px]'>
            <Image
              src='/treadmill.jpg'
              alt='Vrindavan Gopala Health Club'
              fill
              className='object-cover'
              sizes='(min-width: 1024px) 50vw, 100vw'
            />
          </div>

          <div ref={contentRef}>
            <div className='mb-2 h-[1px] w-10 bg-gold sm:w-12' />
            <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:mb-3 sm:text-[11px]'>
              Wellness & Fitness
            </p>
            <h2 className='mb-4 font-serif text-[1.75rem] font-light text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl'>
              Health Club
            </h2>
            <p className='mb-8 max-w-md text-[13px] leading-[1.85] text-muted-foreground sm:mb-10 sm:text-[15px] sm:leading-[1.9]'>
              Rejuvenate your body and mind at our world-class health club.
              Enjoy our pre-heated rooftop pool, modern fitness equipment,
              spacious steam room, sauna and full-service spa treatments.
            </p>

            <div className='mb-8 grid grid-cols-2 gap-3 sm:mb-10 sm:gap-4'>
              {amenities.map((amenity) => (
                <div
                  key={amenity.name}
                  className='flex items-center gap-2 border-b border-border pb-3 sm:gap-3 sm:pb-4'
                >
                  <span className='font-serif text-lg text-gold sm:text-xl'>~</span>
                  <span className='text-[12px] font-medium text-foreground sm:text-sm'>
                    {amenity.name}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href='#health'
              className='inline-block border border-forest bg-forest px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 active:bg-forest-light hover:bg-transparent hover:text-forest sm:px-10 sm:py-3.5 sm:text-[11px]'
            >
              Explore Wellness
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
