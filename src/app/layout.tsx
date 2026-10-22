import type { Metadata } from 'next';
import { Fraunces, Figtree, Shantell_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const shantell = Shantell_Sans({
  subsets: ['latin'],
  variable: '--font-shantell',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://puppy.instabizweb.com'),
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description:
    'Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.',
  keywords: [
    'teacup puppies dubai',
    'maltipoo dubai',
    'toy poodle dubai',
    'pomeranian dubai',
    'puppies for sale dubai',
    'teddy bear puppies uae',
  ],
  icons: {
    icon: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
  openGraph: {
    title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
    description:
      'Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.',
    images: ['/brand/logo.png'],
    siteName: 'TeddyPups U.A.E.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} ${shantell.variable}`}>
      <body className="min-h-screen flex flex-col bg-milk text-cocoa antialiased selection:bg-honey selection:text-cocoa">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
