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
  title: 'XD.STUDIO | Desarrollo de Software',
  description:
    'XD.STUDIO es una agencia de desarrollo de software a medida, especializada en crear soluciones innovadoras y personalizadas para empresas y startups.',
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
