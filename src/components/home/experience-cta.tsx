'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.12 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
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
            stagger: 0.12,
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
    <section
      ref={sectionRef}
      className='relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh] md:min-h-[70vh]'
    >
      <div ref={bgRef} className='absolute inset-0'>
        <div
          className='h-full w-full bg-cover bg-center'
          style={{ backgroundImage: "url('/wedding-venue.jpg')" }}
        />
      </div>
      <div className='absolute inset-0 bg-black/50' />

      <div
        ref={contentRef}
        className='relative z-10 flex flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20'
      >
        <p className='mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light sm:mb-4 sm:text-[11px]'>
          An Unforgettable Experience
        </p>
        <h2 className='mb-4 max-w-3xl font-serif text-[1.5rem] font-light leading-tight text-white sm:mb-6 sm:text-3xl md:text-5xl lg:text-6xl'>
          Where Every Moment
          <br />
          <span className='italic'>Becomes a Memory</span>
        </h2>
        <p className='mb-8 max-w-sm text-[12px] leading-relaxed text-white/60 sm:mb-10 sm:max-w-lg sm:text-[15px]'>
          From intimate celebrations to grand weddings, our elegant venues
          and dedicated team create the perfect setting for your special day.
        </p>
        <Link
          href='#contact'
          className='w-full max-w-xs bg-gold px-10 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 active:bg-gold-light hover:bg-transparent hover:text-gold hover:outline hover:outline-1 hover:outline-gold sm:w-auto sm:text-[11px]'
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
