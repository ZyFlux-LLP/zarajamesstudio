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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '256x256' },
    ],
    apple: '/favicon.png',
  },
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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5PRC9Q2M');` }} />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="256x256" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PRC9Q2M" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
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
