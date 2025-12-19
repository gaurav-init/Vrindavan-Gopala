'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import Image from 'next/image';

interface RoomCardProps {
  title: string;
  image: string;
  index?: number;
  isInView?: boolean;
}

export function RoomCard({
  title,
  image,
  index = 0,
  isInView = true,
}: RoomCardProps) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className='group relative overflow-hidden  shadow-lg h-full'
    >
      <div className='w-full h-122 relative '>
        <Image
          fill
          src={image || '/'}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:brightness-70 group-hover:scale-105 ease-in-out'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/60  via-black/20 to-transparent' />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border  z-10 h-[93%]  w-[95%] border-background/60 group-hover:border-primary duration-500 ease-in-out transition-all' />
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={cardInView && isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
          type: 'spring',
          stiffness: 100,
        }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 shadow-xl min-w-[280px] max-w-[90%]'
      >
        <h3 className='text-xl font-serif font-medium text-foreground mb-4 text-center'>
          {title}
        </h3>
        <div className='flex flex-row justify-center gap-2 text-secondary text-sm'>
          <Button
            size='sm'
            variant='link'
            className='text-gold hover:text-gold/80 p-0 h-auto font-semibold'
          >
            BOOK ›
          </Button>
          <span className='text-muted-foreground'>|</span>
          <Button
            size='sm'
            variant='link'
            className='text-gold hover:text-gold/80 p-0 h-auto font-semibold'
          >
            ENQUIRE ›
          </Button>
          <span className='text-muted-foreground'>|</span>
          <Button
            size='sm'
            variant='link'
            className='text-gold hover:text-gold/80 p-0 h-auto font-semibold'
          >
            DISCOVER MORE ›
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
