import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PourParler Parrucchieri | Senigallia',
  description: 'Salone parrucchieri a Senigallia specializzato in degradè, taglio verticale, uomo e acconciatura.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'PourParler Parrucchieri | Senigallia',
    description: 'Il tuo stile, la nostra firma. Colore, taglio e cura nel cuore di Senigallia.',
    locale: 'it_IT',
    type: 'website',
    url: 'https://afattori.github.io/POURPARLER-PARRUCCHIERI-Senigallia/',
    images: [{
      url: 'https://afattori.github.io/POURPARLER-PARRUCCHIERI-Senigallia/public/capelli-castani.png',
      alt: 'Capelli castani mossi con sfumature luminose realizzati da PourParler',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PourParler Parrucchieri | Senigallia',
    description: 'Il tuo stile, la nostra firma. Colore, taglio e cura nel cuore di Senigallia.',
    images: ['https://afattori.github.io/POURPARLER-PARRUCCHIERI-Senigallia/public/capelli-castani.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}

