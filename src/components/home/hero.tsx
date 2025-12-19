'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import gsap from 'gsap';
import Link from 'next/link';

const heroSlides = [
  {
    image: '/Banner-1.jpeg',
    subtitle: 'Top Resort in Jabalpur',
    title: 'Where Nature\nMeets Luxury',
  },
  {
    image: '/Banner-2.jpeg',
    subtitle: 'Near Dhuandhar Waterfall',
    title: 'A Paradise\nAwaits You',
  },
  {
    image: '/Banner-4.jpeg',
    subtitle: 'Experience the Extraordinary',
    title: 'Beyond\nImagination',
  },
  {
    image: '/Banner5.jpg',
    subtitle: 'Adventure & Tranquility',
    title: 'Your Perfect\nEscape Begins',
  },
  {
    image: '/Banner3.jpg',
    subtitle: 'Unforgettable Moments',
    title: 'Discover\nTrue Serenity',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const animateContent = useCallback(() => {
    const tl = gsap.timeline();

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    }

    if (titleRef.current) {
      const lines = titleRef.current.querySelectorAll('.hero-line');
      tl.fromTo(
        lines,
        { y: 60, opacity: 0, rotateX: 20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        },
        '-=0.3'
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 7, ease: 'none' }
      );
    }

    return tl;
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => animateContent(), 200);
    return () => clearTimeout(timeout);
  }, [animateContent]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    animateContent();
  }, [currentSlide, animateContent]);

  return (
    <section className='relative h-[100svh] w-full overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='absolute inset-0'
        >
          <div
            className='h-full w-full bg-cover bg-center'
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className='absolute inset-0 bg-black/35' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20' />

      <div className='relative flex h-full flex-col items-center justify-end px-5 pb-28 text-center sm:justify-center sm:pb-0 md:px-8'>
        <p
          ref={subtitleRef}
          className='mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-light sm:mb-4 sm:text-[11px] md:text-xs'
        >
          {heroSlides[currentSlide].subtitle}
        </p>

        <h1
          ref={titleRef}
          className='mb-6 font-serif text-[2rem] font-light leading-[1.15] text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
        >
          {heroSlides[currentSlide].title.split('\n').map((line, i) => (
            <span key={i} className='hero-line block overflow-hidden'>
              {line}
            </span>
          ))}
        </h1>

        <div ref={ctaRef} className='flex flex-col items-center gap-4 sm:flex-row sm:gap-5'>
          <Link
            href='#rooms'
            className='w-full border border-white/30 bg-white/10 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-forest sm:w-auto sm:px-10 sm:py-3.5 sm:text-[11px]'
          >
            Explore Rooms
          </Link>
          <Link
            href='#booking'
            className='w-full bg-gold px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-gold-light sm:w-auto sm:px-10 sm:py-3.5 sm:text-[11px]'
          >
            Reserve Now
          </Link>
        </div>
      </div>

      <div className='absolute bottom-14 left-0 right-0 sm:bottom-10'>
        <div className='mx-auto flex max-w-xs items-center justify-center gap-3'>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className='group relative h-8 flex-1'
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className='absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-white/25 transition-colors group-hover:bg-white/40' />
              {index === currentSlide && (
                <span
                  ref={index === currentSlide ? progressRef : null}
                  className='absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 origin-left bg-gold'
                />
              )}
            </button>
          ))}
        </div>
        <div className='mt-2 text-center'>
          <span className='font-serif text-[10px] tracking-widest text-white/40'>
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
