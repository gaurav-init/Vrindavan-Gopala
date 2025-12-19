'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { DATA } from '@/_data/data';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const navItems = [
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Events', href: '#conferences' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Wellness', href: '#health' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const links = mobileMenuRef.current.querySelectorAll('.mobile-link');
      gsap.fromTo(
        links,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.15 }
      );
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/95 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        {scrolled && (
          <div
            className='absolute bottom-0 left-0 h-[1px] bg-gold/60 transition-all'
            style={{ width: `${scrollProgress * 100}%` }}
          />
        )}

        <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
          <div className='flex items-center justify-between py-3 sm:py-4 lg:py-5'>
            <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 xl:text-[12px]',
                    scrolled
                      ? 'text-foreground/80 hover:text-gold'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href='/' className='shrink-0'>
              <Logo variant={scrolled ? 'dark' : 'light'} size='md' />
            </Link>

            <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 xl:text-[12px]',
                    scrolled
                      ? 'text-foreground/80 hover:text-gold'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href='#booking'
                className={cn(
                  'ml-2 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 xl:px-6 xl:py-2.5 xl:text-[11px]',
                  scrolled
                    ? 'border border-gold bg-gold text-white hover:bg-transparent hover:text-gold'
                    : 'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-forest'
                )}
              >
                Reserve
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='relative z-[70] flex h-10 w-10 items-center justify-center lg:hidden'
              aria-label='Toggle menu'
            >
              <div className='flex flex-col gap-1.5'>
                <span
                  className={cn(
                    'block h-[1.5px] w-5 transition-all duration-300 origin-center',
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[4.5px] bg-white'
                      : scrolled ? 'bg-foreground' : 'bg-white'
                  )}
                />
                <span
                  className={cn(
                    'block h-[1.5px] transition-all duration-300',
                    mobileMenuOpen
                      ? 'w-5 -rotate-45 -translate-y-[4.5px] bg-white'
                      : scrolled ? 'w-3.5 bg-foreground' : 'w-3.5 bg-white'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 28px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 28px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 28px)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className='fixed inset-0 z-[60] bg-forest'
          >
            <div ref={mobileMenuRef} className='flex h-full flex-col justify-between px-8 pb-10 pt-24'>
              <div className='flex flex-col gap-5'>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='mobile-link font-serif text-[2rem] font-light text-white/90 transition-colors active:text-gold sm:text-4xl'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className='mobile-link space-y-6'>
                <Link
                  href='#booking'
                  className='block w-full border border-gold bg-gold py-4 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all active:bg-gold-light'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve Your Stay
                </Link>

                <div className='flex items-center justify-between'>
                  <Link
                    href={`tel:${DATA.footer.contacts.phone.replace(/[\s+]/g, '')}`}
                    className='flex items-center gap-2 text-[11px] text-white/40 active:text-gold'
                  >
                    <Phone className='h-3.5 w-3.5' />
                    <span>{DATA.footer.contacts.phone}</span>
                  </Link>
                  <Link
                    href={`mailto:${DATA.footer.contacts.email}`}
                    className='flex items-center gap-2 text-[11px] text-white/40 active:text-gold'
                  >
                    <Mail className='h-3.5 w-3.5' />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={`https://wa.me/${DATA.footer.contacts.phone.replace(/[\s+]/g, '')}`}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform active:scale-95 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14'
        aria-label='Chat on WhatsApp'
      >
        <svg className='h-6 w-6 sm:h-7 sm:w-7' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
        </svg>
      </Link>
    </>
  );
}
