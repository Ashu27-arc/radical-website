import { notFound } from 'next/navigation';
import Nepal from '@/components/mbbs-abroadDetails/Nepal';
import Russia from '@/components/mbbs-abroadDetails/Russia';
import Kazakhstan from '@/components/mbbs-abroadDetails/Kazakhstan';
import Singapore from '@/components/mbbs-abroadDetails/Singapore';
import Georgia from '@/components/mbbs-abroadDetails/Georgia';
import Uzbekistan from '@/components/mbbs-abroadDetails/Uzbekistan';
import Bangladesh from '@/components/mbbs-abroadDetails/Bangladesh';

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country } = await params;

  // Map country slugs to components
  const countryComponents: { [key: string]: React.ComponentType } = {
    nepal: Nepal,
    russia: Russia,
    kazakhstan: Kazakhstan,
    singapore: Singapore,
    georgia: Georgia,
    uzbekistan: Uzbekistan,
    bangladesh: Bangladesh,
    kyrgyzstan: Russia, // Placeholder
  };

  const CountryComponent = countryComponents[country.toLowerCase()];

  if (!CountryComponent) {
    notFound();
  }

  return <CountryComponent />;
}

// Generate static params for known countries
export function generateStaticParams() {
  return [
    { country: 'nepal' },
    { country: 'russia' },
    { country: 'kazakhstan' },
    { country: 'singapore' },
    { country: 'georgia' },
    { country: 'uzbekistan' },
    { country: 'bangladesh' },
    { country: 'kyrgyzstan' },
  ];
}