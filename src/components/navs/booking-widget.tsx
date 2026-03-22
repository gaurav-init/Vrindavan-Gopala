'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { useState } from 'react';
import { CalendarDays, Users, Baby } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(
    new Date(Date.now() + 86400000)
  );
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const widgetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (widgetRef.current) {
        gsap.fromTo(
          widgetRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: widgetRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={widgetRef} id='booking' className='bg-cream py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto px-5 sm:px-6 lg:px-12'>
        <div className='mx-auto max-w-5xl'>
          <div className='mb-8 text-center sm:mb-10'>
            <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-[11px]'>
              Plan Your Stay
            </p>
            <h2 className='font-serif text-[1.5rem] font-light text-forest sm:text-3xl md:text-4xl'>
              Check Availability
            </h2>
          </div>

          <div className='grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5 md:gap-0 md:border md:border-border'>
            <div className='border border-border p-4 sm:p-5 md:border-0 md:border-r'>
              <label className='mb-1.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-2 sm:gap-2 sm:text-[10px]'>
                <CalendarDays className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                Check-In
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className='w-full text-left font-serif text-base text-foreground transition-colors hover:text-gold sm:text-lg md:text-xl'>
                    {format(checkIn, 'MMM dd')}
                  </button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={checkIn}
                    onSelect={(date) => date && setCheckIn(date)}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='border border-border p-4 sm:p-5 md:border-0 md:border-r'>
              <label className='mb-1.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-2 sm:gap-2 sm:text-[10px]'>
                <CalendarDays className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                Check-Out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className='w-full text-left font-serif text-base text-foreground transition-colors hover:text-gold sm:text-lg md:text-xl'>
                    {format(checkOut, 'MMM dd')}
                  </button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={checkOut}
                    onSelect={(date) => date && setCheckOut(date)}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='border border-border p-4 sm:p-5 md:border-0 md:border-r'>
              <label className='mb-1.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-2 sm:gap-2 sm:text-[10px]'>
                <Users className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                Adults
              </label>
              <Select value={adults} onValueChange={setAdults}>
                <SelectTrigger className='w-full border-none bg-transparent p-0 font-serif text-base text-foreground shadow-none sm:text-lg md:text-xl'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} {num === 1 ? 'Adult' : 'Adults'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='border border-border p-4 sm:p-5 md:border-0 md:border-r'>
              <label className='mb-1.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-2 sm:gap-2 sm:text-[10px]'>
                <Baby className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
                Children
              </label>
              <Select value={children} onValueChange={setChildren}>
                <SelectTrigger className='w-full border-none bg-transparent p-0 font-serif text-base text-foreground shadow-none sm:text-lg md:text-xl'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} {num === 1 ? 'Child' : 'Children'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button className='col-span-2 flex items-center justify-center bg-gold p-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-colors active:bg-gold-light hover:bg-gold-light sm:p-5 sm:text-[11px] md:col-span-1'>
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
