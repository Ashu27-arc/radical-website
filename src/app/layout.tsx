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

export const metadata: Metadata = {
    title: 'Radicale Education',
    description: 'Radical Education Most Trusted and Transparent NEET Counsellor 15,783+ Students counselled 1732+ Admission Done 14+ Country Looking for admissions in MBBS INDIA ?',
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClientWrapper>
        <Providers>
          <ScrollEffectProvider />
          <EnquireButton/>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
        </ClientWrapper>
      </body>
    </html>
  );
}
