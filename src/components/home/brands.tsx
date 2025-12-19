import Image from 'next/image';
import { Marquee } from '../ui/marquee';

const BrandingSection = ({
  brandItems,
}: {
  brandItems: { logo: string; name: string }[];
}) => {
  return (
    <div className='container-fluid relative flex w-full py-10 md:py-16  flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover repeat={8} className=' mix-blend-multiply '>
        {brandItems.map((brand) => (
          <div
            key={brand.name}
            className='relative h-20 md:h-30 ml-2 md:ml-16 w-[8.889rem]  md:w-[13.333rem] '
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              sizes='100vw'
              className='object-contain'
              priority
            />
          </div>
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r to-transparent from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4  bg-linear-to-l to-transparent from-background'></div>
    </div>
  );
};

export default BrandingSection;
