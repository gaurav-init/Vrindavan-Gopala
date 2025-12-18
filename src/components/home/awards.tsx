'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const awards = [
  { name: 'Booking.com 2021', image: '/booking.jpg' },
  { name: 'TripAdvisor 2020', image: '/best.jpg' },
  { name: 'TripAdvisor 2021', image: '/travellers.jpg' },
  { name: 'TripAdvisor Best of the Best 2022', image: '/teal.jpg' },
  { name: 'TripAdvisor 2024', image: '/best.jpg' },
  { name: 'TripAdvisor 2025', image: '/booking.jpg' },
  { name: 'Kenya Wedding Awards', image: '/wedding.jpg' },
];

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className='py-20'>
      <div className='container-fluid'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center max-w-6xl mx-auto'
        >
          <h2 className='text-4xl md:text-6xl font-serif font-medium text-foreground mb-12'>
            Awards
          </h2>

          <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8'>
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className='shrink-0'
              >
                <div className='relative w-36 h-44 md:w-40 md:h-48 hover:scale-105 transition-transform duration-300'>
                  <Image
                    src={award.image}
                    alt={award.name}
                    fill
                    className='object-contain'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
