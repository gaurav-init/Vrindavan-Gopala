import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navs/navbar';
import { Newsletter } from '@/components/navs/newsletter';
import { DATA } from '@/_data/data';
import { SmoothScrollProvider } from '@/providers/smooth-scroll';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: `${DATA.title} - Top Resort in Jabalpur`,
  description: DATA.description,
  appleWebApp: {
    title: 'Vrindavan Gopala Resort',
  },
  keywords: [
    'Vrindavan Gopala Resort',
    'Top Resort in Jabalpur',
    'Luxury Resort Jabalpur',
    'Dhuandhar Waterfall Resort',
    'Resorts near Marble Rocks',
    'Hotel with Conference Facilities Jabalpur',
    'Wedding Venues Jabalpur',
    'Best Resort Madhya Pradesh',
    'Nature Resort Jabalpur',
    'Luxury Hotels Jabalpur',
  ],
  openGraph: {
    title: DATA.title,
    description: DATA.description,
    images: [
      {
        url: DATA.logo,
        width: 800,
        height: 600,
        alt: DATA.title,
      },
    ],
    siteName: DATA.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.title,
    images: [DATA.logo],
    description: DATA.description,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className='min-h-screen overflow-x-clip'>{children}</main>
          <Newsletter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
