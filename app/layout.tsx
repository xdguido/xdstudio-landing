import '@/app/globals.css';

import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

// Use Inter as a fallback font that's guaranteed to work
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'XD.STUDIO | Desarrollo de Software para Empresas',
  description:
    'XD.STUDIO desarrolla software a medida, aplicaciones web, herramientas internas y automatización para empresas en Neuquén Capital. Soluciones personalizadas que optimizan procesos y mejoran la productividad.',
  keywords: [
    'desarrollo software a medida neuquen',
    'herramientas internas empresas neuquen',
    'aplicaciones web personalizadas neuquen capital',
    'automatización procesos neuquen',
    'desarrollo sitios web neuquen',
    'software empresarial local',
    'soluciones digitales patagonia',
    'programación personalizada neuquen',
  ].join(', '),
  authors: [{ name: 'XD.STUDIO' }],
  creator: 'XD.STUDIO',
  publisher: 'XD.STUDIO',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [{ rel: 'mask-icon', url: '/favicon.svg', color: '#000000' }],
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
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
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.xdstudiogg.com',
    siteName: 'XD.STUDIO',
    title:
      'XD.STUDIO | Desarrollo de Software y Herramientas Internas en Neuquén',
    description:
      'Desarrollamos software a medida, aplicaciones web y herramientas internas para empresas en Neuquén Capital. Automatización y soluciones digitales personalizadas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'XD.STUDIO - Desarrollo de Software a Medida',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.xdstudiogg.com',
  },
  other: {
    'geo.region': 'AR-Q',
    'geo.placename': 'Neuquén Capital',
    'geo.position': '-38.9516;-68.0591',
    ICBM: '-38.9516, -68.0591',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
