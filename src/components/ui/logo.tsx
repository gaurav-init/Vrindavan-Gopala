import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const isLight = variant === 'light';

  const sizes = {
    sm: { wrapper: 'gap-1.5', icon: 'w-7 h-7', title: 'text-[11px]', sub: 'text-[5.5px] tracking-[0.3em]' },
    md: { wrapper: 'gap-2', icon: 'w-9 h-9 sm:w-10 sm:h-10', title: 'text-[13px] sm:text-[15px]', sub: 'text-[6px] sm:text-[6.5px] tracking-[0.3em]' },
    lg: { wrapper: 'gap-2.5', icon: 'w-14 h-14', title: 'text-[19px]', sub: 'text-[7.5px] tracking-[0.35em]' },
  };

  const s = sizes[size];
  const primary = isLight ? '#ffffff' : '#1a2e1a';
  const accent = '#c8a45c';

  return (
    <div className={cn('flex items-center', s.wrapper, className)}>
      <svg
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(s.icon, 'flex-shrink-0')}
      >
        <circle cx='40' cy='40' r='38' stroke={primary} strokeWidth='1' opacity='0.5' />
        <circle cx='40' cy='40' r='34' stroke={accent} strokeWidth='0.5' opacity='0.4' />

        <path
          d='M40 16 C41 20, 43 26, 44 30 C45 34, 44 37, 40 40 C36 37, 35 34, 36 30 C37 26, 39 20, 40 16Z'
          fill={accent}
          opacity='0.85'
        />

        <path
          d='M40 40 C36 36, 30 30, 26 24 C28 30, 33 36, 40 40Z'
          fill={primary}
          opacity='0.65'
        />
        <path
          d='M40 40 C44 36, 50 30, 54 24 C52 30, 47 36, 40 40Z'
          fill={primary}
          opacity='0.65'
        />

        <path
          d='M40 40 C34 38, 26 34, 20 30 C26 35, 34 39, 40 40Z'
          fill={accent}
          opacity='0.55'
        />
        <path
          d='M40 40 C46 38, 54 34, 60 30 C54 35, 46 39, 40 40Z'
          fill={accent}
          opacity='0.55'
        />

        <path
          d='M40 40 C32 39, 22 37, 16 36 C24 38, 34 40, 40 40Z'
          fill={primary}
          opacity='0.45'
        />
        <path
          d='M40 40 C48 39, 58 37, 64 36 C56 38, 46 40, 40 40Z'
          fill={primary}
          opacity='0.45'
        />

        <line x1='40' y1='40' x2='40' y2='64' stroke={primary} strokeWidth='1.5' opacity='0.7' />

        <path d='M40 64 C35 59, 30 57, 26 57' stroke={accent} strokeWidth='1' fill='none' opacity='0.5' />
        <path d='M40 64 C45 59, 50 57, 54 57' stroke={accent} strokeWidth='1' fill='none' opacity='0.5' />
      </svg>

      <div className='flex flex-col items-start'>
        <span
          className={cn(
            'font-serif font-semibold leading-none',
            s.title,
            isLight ? 'text-white' : 'text-forest'
          )}
        >
          Vrindavan Gopala
        </span>
        <span
          className={cn(
            'font-sans font-medium uppercase leading-none mt-0.5',
            s.sub,
            isLight ? 'text-gold-light' : 'text-gold'
          )}
        >
          Resort
        </span>
      </div>
    </div>
  );
}
