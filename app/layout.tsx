import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import ClientLayout from '../components/ClientLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zara James Studio | Luxury Interior Design in London',
  description: 'A luxury interior design studio creating timeless, emotive spaces for discerning clients worldwide. Based in London, working globally.',
  keywords: 'interior design, luxury design, London interior designer, architecture, residential design, commercial design',
  authors: [{ name: 'Zara James Studio' }],
  openGraph: {
    title: 'Zara James Studio | Luxury Interior Design',
    description: 'Creating timeless, emotive spaces that embody modern minimalism and lasting sophistication.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zara James Studio | Luxury Interior Design',
    description: 'Creating timeless, emotive spaces for discerning clients worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
