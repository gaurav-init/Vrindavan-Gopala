'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/gallery.jpeg', alt: 'Hotel Exterior with Gardens' },
  { src: '/gallery-2.jpeg', alt: 'Dining Terrace at Sunset' },
  { src: '/gallery-3.jpeg', alt: 'Resort Swimming Pool' },
  { src: '/gallery-4.jpeg', alt: 'Spa Treatment Room' },
  { src: '/gallery-5.jpeg', alt: 'Restaurant Interior' },
  { src: '/gallery-6.jpeg', alt: 'Pool Overlooking Lake' },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const children = headingRef.current.children;
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
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (gridRef.current) {
        const cols = gridRef.current.querySelectorAll('.gallery-col');
        gsap.fromTo(
          cols,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={sectionRef} id='gallery' className='py-16 sm:py-24 md:py-36 '>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div ref={headingRef} className='mb-10 text-center sm:mb-14'>
          <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:mb-3 sm:text-[11px]'>
            Visual Journey
          </p>
          <h2 className='mb-3 font-serif text-[1.75rem] font-light  sm:text-4xl md:text-5xl lg:text-6xl'>
            Small team. Big hearts.
          </h2>
          <p className='mx-auto max-w-md text-[12px] leading-relaxed text-black/50 sm:text-[15px]'>
            Our focus is always on finding the best people to work with. Our bar
            is high, and you look ready to take on the challenge.
          </p>
        </div>

        <div
          ref={gridRef}
          className='grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4 md:h-[600px]'
        >
          <div className='gallery-col md:col-span-1 h-[250px] sm:h-[300px] md:h-full'>
            <div className='group relative h-full w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl'>
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 768px) 25vw, 100vw'
              />
              <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
            </div>
          </div>

          <div className='gallery-col md:col-span-1 flex flex-row gap-3 sm:gap-4 md:flex-col md:h-full'>
            <div className='group relative h-[200px] w-1/2 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-[240px] md:h-[55%] md:w-full'>
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 768px) 25vw, 50vw'
              />
              <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
            </div>
            <div className='group relative h-[200px] w-1/2 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-[240px] md:h-[45%] md:w-full'>
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 768px) 25vw, 50vw'
              />
              <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
            </div>
          </div>

          <div className='gallery-col md:col-span-2 flex flex-col gap-3 sm:gap-4 md:h-full'>
            <div className='flex flex-row gap-3 sm:gap-4 md:h-[40%]'>
              <div className='group relative h-[200px] w-1/2 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-[240px] md:h-full'>
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                  sizes='(min-width: 768px) 25vw, 50vw'
                />
                <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
              </div>
              <div className='group relative h-[200px] w-1/2 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-[240px] md:h-full'>
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                  sizes='(min-width: 768px) 25vw, 50vw'
                />
                <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
              </div>
            </div>
            <div className='group relative h-[200px] w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-[260px] md:h-[60%]'>
              <Image
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105'
                sizes='(min-width: 768px) 50vw, 100vw'
              />
              <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
