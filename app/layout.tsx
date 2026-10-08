import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Dancing_Script } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-dancing',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lombokpartner.com'),
  title: 'Lombok Partner | Jelajahi Keindahan Lombok — Paket Wisata & Tour Terpercaya',
  description: 'Temukan surga tropis Lombok bersama Lombok Partner. Paket wisata eksklusif Gili Trawangan, Pantai Mandalika, Gunung Rinjani, dan Air Terjun Tiu Kelep. Pemesanan cepat, layanan profesional terpercaya.',
  keywords: ['Lombok Partner', 'Paket Wisata Lombok', 'Tour Lombok Murah', 'Wisata Gili Trawangan', 'Trekking Rinjani', 'Sewa Mobil Lombok', 'Travel Lombok'],
  openGraph: {
    title: 'Lombok Partner | Jelajahi Keindahan Lombok',
    description: 'Pesan paket wisata Lombok impian Anda secara instan dan aman bersama partner lokal terpercaya.',
    images: ['/logo.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Satisfy&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen font-sans bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}

