'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DATA } from '@/_data/data';
import BrandingSection from './brands';

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const children = headingRef.current.children;
        gsap.fromTo(
          children,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='py-14 sm:py-20 md:py-28 bg-cream'>
      <div ref={headingRef} className='flex flex-col items-center gap-2 px-5 text-center sm:gap-3 sm:px-6'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-[11px]'>
          Trusted Partnerships
        </p>
        <h2 className='font-serif text-[1.5rem] font-light text-forest sm:text-3xl md:text-4xl lg:text-5xl'>
          Our Valued Partners
        </h2>
        <p className='max-w-sm text-[12px] text-muted-foreground sm:max-w-lg sm:text-[15px]'>
          We collaborate with India&apos;s leading brands to deliver
          exceptional experiences and seamless services.
        </p>
      </div>
      <BrandingSection brandItems={DATA.partners} />
    </section>
  );
};

export default PartnersSection;
