import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PourParler Parrucchieri | Senigallia',
  description: 'Salone parrucchieri a Senigallia specializzato in degradè, taglio verticale, uomo e acconciatura.',
  openGraph: {
    title: 'PourParler Parrucchieri | Senigallia',
    description: 'Il tuo stile, la nostra firma. Colore, taglio e cura nel cuore di Senigallia.',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PourParler Parrucchieri | Senigallia',
    description: 'Il tuo stile, la nostra firma. Colore, taglio e cura nel cuore di Senigallia.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
