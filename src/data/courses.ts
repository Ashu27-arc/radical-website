//\src\data\courses.ts

export interface Course {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

export const courses: Course[] = [
  {
    slug: 'mbbs',
    title: 'MBBS',
    shortDesc:
      'Among the most trusted and affordable pathways for aspiring doctors.',
    fullDesc:
      'MBBS is a globally recognized medical degree offering strong theoretical foundations, clinical exposure, and excellent career opportunities in healthcare sectors worldwide.',
    image: '/next/images/courseCard1.webp',
  },
  {
    slug: 'bds',
    title: 'BDS',
    shortDesc:
      'A respected and financially comfortable pathway for dental professionals.',
    fullDesc:
      'BDS focuses on dental sciences, clinical dentistry, and patient care with global exposure and promising career growth.',
    image: '/next/images/courseCard2.webp',
  },
  {
    slug: 'ayush',
    title: 'AYUSH',
    shortDesc:
      'A holistic and respected path for students interested in traditional medicine.',
    fullDesc:
      'AYUSH covers Ayurveda, Yoga, Unani, Siddha, and Homeopathy with strong foundations in alternative healthcare systems.',
    image: '/next/images/courseCard3.webp',
  },
  {
    slug: 'md-ms-dnb',
    title: 'MD / MS / DNB',
    shortDesc:
      'A highly rewarding postgraduate option for advanced clinical training.',
    fullDesc:
      'MD/MS/DNB programs provide specialization, advanced clinical exposure, and high professional recognition.',
    image: '/next/images/courseCard4.webp',
  },
  {
    slug: 'mbbs-abroad',
    title: 'MBBS Abroad',
    shortDesc:
      'Globally recognized medical education with modern technology.',
    fullDesc:
      'MBBS Abroad offers affordable tuition, international exposure, and high-quality medical training.',
    image: '/next/images/courseCard5.webp',
  },
];
