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
  description: 'Creating timeless, emotive spaces that embody modern minimalism and lasting sophistication.',
  keywords: 'interior design, luxury design, London interior designer, architecture, residential design, commercial design',
  authors: [{ name: 'Zara James Studio' }],
  openGraph: {
    title: 'Zara James Studio | Luxury Interior Design',
    description: 'Creating timeless, emotive spaces that embody modern minimalism and lasting sophistication.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.zarajamesstudio.com',
    siteName: 'Zara James Studio',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Zara James Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zara James Studio | Luxury Interior Design',
    description: 'Creating timeless, emotive spaces for discerning clients worldwide.',
    images: ['/favicon.png'],
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InteriorDesigner',
              name: 'Zara James Studio',
              url: 'https://www.zarajamesstudio.com',
              logo: 'https://www.zarajamesstudio.com/favicon.png',
              image: 'https://www.zarajamesstudio.com/favicon.png',
              email: 'info@zarajamesstudio.com',
              telephone: '+919619404007',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '384, Khushal House, Yadav Patil Wadi, Opposite Siddhivinayak Mandir, Prabhadevi, Dadar',
                addressLocality: 'Mumbai',
                postalCode: '400025',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.instagram.com/zarajames_studio/',
                'https://in.pinterest.com/studiozarajames/',
                'https://www.linkedin.com/in/zara-james-studio-4972743aa',
              ],
            }),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
