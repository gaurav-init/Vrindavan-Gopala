'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageLeftRef = useRef<HTMLDivElement>(null);
  const imageRightRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (headingRef.current) {
        const elements = headingRef.current.children;
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (mobileImageRef.current) {
        gsap.fromTo(
          mobileImageRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mobileImageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (imageLeftRef.current) {
        gsap.fromTo(
          imageLeftRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: imageLeftRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (imageRightRef.current) {
        gsap.fromTo(
          imageRightRef.current,
          { clipPath: 'inset(0 0 0 100%)' },
          {
            clipPath: 'inset(0 0 0 0%)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: imageRightRef.current,
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
    <section ref={sectionRef} className='py-16 sm:py-24 md:py-36 bg-cream'>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div ref={mobileImageRef} className='mb-10 lg:hidden'>
          <div className='relative mx-auto h-[240px] w-full max-w-md overflow-hidden sm:h-[300px]'>
            <Image
              src='/Welcome.jpeg'
              alt='Vrindavan Gopala Resort'
              fill
              className='object-cover'
              sizes='(min-width: 640px) 448px, 100vw'
            />
          </div>
        </div>

        <div className='grid gap-12 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-16 items-center'>
          <div ref={imageLeftRef} className='hidden lg:block'>
            <div className='relative h-[500px] w-full overflow-hidden'>
              <Image
                src='/Welcome.jpeg'
                alt='Vrindavan Gopala Resort Reception'
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 30vw, 0vw'
              />
            </div>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div
              ref={dividerRef}
              className='mb-6 h-[1px] w-12 origin-center bg-gold sm:mb-8 sm:w-16'
            />

            <div ref={headingRef} className='mb-6 sm:mb-8'>
              <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:mb-3 sm:text-[11px]'>
                Welcome to Vrindavan Gopala
              </p>
              <h2 className='font-serif text-[1.75rem] font-light leading-tight text-forest sm:text-4xl md:text-5xl lg:text-6xl'>
                A Nature Retreat
              </h2>
              <h3 className='mt-1 font-serif text-[1.75rem] font-light italic text-forest/60 sm:mt-2 sm:text-4xl md:text-5xl lg:text-6xl'>
                in Jabalpur
              </h3>
            </div>

            <p
              ref={textRef}
              className='mb-8 max-w-lg text-[13px] leading-[1.85] text-muted-foreground sm:mb-10 sm:text-[15px] sm:leading-[1.9]'
            >
              Vrindavan Gopala Resort, the top resort in Jabalpur, is nestled
              amidst the natural beauty near the magnificent Dhuandhar Waterfall.
              Experience the perfect blend of adventure and tranquility surrounded
              by lush greenery, cascading waters, and the timeless charm of
              Marble Rocks. A serene destination offering all-round relaxation
              and unforgettable memories.
            </p>

            <div ref={ctaRef}>
              <Link
                href='#rooms'
                className='inline-block border border-forest bg-forest px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 active:bg-forest-light hover:bg-transparent hover:text-forest sm:px-10 sm:py-3.5 sm:text-[11px]'
              >
                Discover More
              </Link>
            </div>
          </div>

          <div ref={imageRightRef} className='hidden lg:block'>
            <div className='relative h-[500px] w-full overflow-hidden'>
              <Image
                src='/Welcome2.jpeg'
                alt='Vrindavan Gopala Resort Gardens'
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 30vw, 0vw'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
