import './globals.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';

import './custom.scss';
import Providers from './providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollEffectProvider from '@/components/ScrollEffectProvider';
import ClientWrapper from '@/components/ClientWrapper';
import { Metadata } from 'next';
import EnquireButton from '@/components/EnquireButton';
import ScrollToTop from '@/components/ScrollToTop';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Radical Education',
  description: 'Radical Education Most Trusted and Transparent NEET Counsellor 15,783+ Students counselled 1732+ Admission Done 14+ Country Looking for admissions in MBBS INDIA ?',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'JeLu6aKkusRuzvliO-x4LtyR-Y23vKn06YFsR1tlK9c',
  },
};

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GJCQQNBHBB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJCQQNBHBB');
          `}
        </Script>
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`} suppressHydrationWarning>
        <Providers>
          <ScrollEffectProvider />
          <EnquireButton />
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

