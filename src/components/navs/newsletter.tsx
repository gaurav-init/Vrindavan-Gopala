'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DATA } from '@/_data/data';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Events', href: '#conferences' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Wellness', href: '#health' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', letter: 'Fb' },
  { name: 'Instagram', href: 'https://instagram.com', letter: 'Ig' },
  { name: 'Twitter', href: 'https://twitter.com', letter: 'Tw' },
];

export function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
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
    <footer ref={sectionRef} id='contact' className='bg-charcoal text-white'>
      <div ref={contentRef} className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div className='grid gap-10 border-b border-white/10 py-14 sm:gap-12 sm:py-20 md:grid-cols-2 md:py-24 lg:grid-cols-4'>
          <div>
            <div className='mb-5 sm:mb-6'>
              <Logo variant='light' size='lg' />
            </div>
            <p className='mb-5 text-[12px] leading-relaxed text-white/40 sm:mb-6 sm:text-sm'>
              {DATA.description}
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-11 w-11 items-center justify-center border border-white/10 text-[10px] font-semibold uppercase text-white/40 transition-all active:border-gold active:text-gold hover:border-gold hover:text-gold'
                  aria-label={social.name}
                >
                  {social.letter}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className='mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:mb-6 sm:text-[11px]'>
              Quick Links
            </h4>
            <nav className='grid grid-cols-2 gap-2.5 sm:flex sm:flex-col sm:gap-3'>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-[12px] text-white/40 transition-colors active:text-gold hover:text-gold sm:text-sm'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className='mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:mb-6 sm:text-[11px]'>
              Contact
            </h4>
            <div className='flex flex-col gap-3 sm:gap-4'>
              <Link
                href={`tel:${DATA.footer.contacts.phone.replace(/[\s+]/g, '')}`}
                className='flex items-center gap-2.5 text-[12px] text-white/40 transition-colors active:text-gold hover:text-gold sm:gap-3 sm:text-sm'
              >
                <Phone className='h-3.5 w-3.5 flex-shrink-0 text-gold sm:h-4 sm:w-4' />
                {DATA.footer.contacts.phone}
              </Link>
              <Link
                href={`mailto:${DATA.footer.contacts.email}`}
                className='flex items-center gap-2.5 text-[12px] text-white/40 transition-colors active:text-gold hover:text-gold sm:gap-3 sm:text-sm'
              >
                <Mail className='h-3.5 w-3.5 flex-shrink-0 text-gold sm:h-4 sm:w-4' />
                {DATA.footer.contacts.email}
              </Link>
              <div className='flex items-start gap-2.5 text-[12px] text-white/40 sm:gap-3 sm:text-sm'>
                <MapPin className='mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold sm:h-4 sm:w-4' />
                <span>{DATA.footer.contacts.location_address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className='mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:mb-6 sm:text-[11px]'>
              Newsletter
            </h4>
            <p className='mb-3 text-[12px] text-white/40 sm:mb-4 sm:text-sm'>
              Subscribe for exclusive offers and updates.
            </p>
            <div className='flex'>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email'
                className='flex-1 rounded-none border-white/10 bg-white/5 text-[12px] text-white placeholder:text-white/25 focus:border-gold sm:text-sm'
              />
              <button className='flex-shrink-0 bg-gold px-4 text-[9px] font-semibold uppercase tracking-wider text-white transition-colors active:bg-gold-light hover:bg-gold-light sm:px-5 sm:text-[10px]'>
                Join
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-3 py-6 sm:flex-row sm:py-8'>
          <p className='text-[10px] text-white/25 sm:text-xs'>
            &copy; {new Date().getFullYear()} {DATA.title}. All Rights Reserved.
          </p>
          <div className='flex gap-5 sm:gap-6'>
            <Link href='#' className='text-[10px] text-white/25 transition-colors active:text-gold hover:text-gold sm:text-xs'>
              Privacy Policy
            </Link>
            <Link href='#' className='text-[10px] text-white/25 transition-colors active:text-gold hover:text-gold sm:text-xs'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
