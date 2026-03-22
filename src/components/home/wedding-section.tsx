'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Wedding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id='weddings'
      ref={ref}
      className='relative max-w-[1800px] mr-auto  w-full '
    >
      <div className='flex flex-row h-full'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='relative h-full w-[60%]'
        >
          <div className='relative w-full h-[500px] lg:h-[600px] '>
            <Image
              fill
              src='/wedding-venue.jpg'
              alt='Outdoor Wedding Venue'
              className='w-full h-full object-cover'
            />

            <div
              className='absolute  inset-0'
              style={{
                background:
                  'radial-gradient(ellipse 70% 80% at 60% 50%, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.95) 70%, white 90%)',
              }}
            />
          </div>

          <div className='relative z-10  flex flex-col px-8 lg:px-16 pt-6'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='max-w-md'
            >
              <p className='text-xl  text-foreground/80 mb-2'>
                Perfect Venue for
              </p>
              <h2 className='text-5xl md:text-6xl font-serif font-medium text-foreground mb-6'>
                Wedding
              </h2>
              <p className='text-lg text-foreground font-serif mb-8 leading-8'>
                We have the perfect and serene location. And you will experience
                convenience at its best.
              </p>
              <Button size='lg' className='rounded-[4px] px-12 py-6'>
                VIEW ALL
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative h-full w-[40%] '
        >
          <div className='h-[750px] lg:h-[800px] relative group  overflow-hidden '>
            <Image
              fill
              src='/massage-treatment.jpg'
              alt='Spa Massage Treatment'
              className='w-full h-full object-cover group-hover:brightness-75 transition-all duration-500 ease-in-out'
            />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border  z-10 h-[95%]  w-[95%] border-background/60 group-hover:border-primary duration-500 ease-in-out transition-all' />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
