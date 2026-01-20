export interface GalleryEvent {
  title: string;
  date: string;
  images: string[];
}

export interface GalleryMonth {
  month: string;
  year: number;
  mainImage: string;
  events: GalleryEvent[];
}

export interface GalleryData {
  [year: number]: GalleryMonth[];
}

export const galleryData: GalleryData = {
  /* ======================= 2024 ======================= */
  2024: [
    {
      month: 'JANUARY',
      year: 2024,
      mainImage: '/images/g1.webp',
      events: [
        {
          title: 'New Year Orientation Program',
          date: '10 Jan 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
        {
          title: 'Student Welcome Meet',
          date: '22 Jan 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
          ],
        },
      ],
    },
    {
      month: 'FEBRUARY',
      year: 2024,
      mainImage: '/images/g2.webp',
      events: [
        {
          title: 'Education Expo Delhi',
          date: '05 Feb 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
        {
          title: 'Career Guidance Seminar',
          date: '18 Feb 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
          ],
        },
      ],
    },
    {
      month: 'MARCH',
      year: 2024,
      mainImage: '/images/g3.webp',
      events: [
        {
          title: 'Study Abroad Fair',
          date: '12 Mar 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'APRIL',
      year: 2024,
      mainImage: '/images/g4.webp',
      events: [
        {
          title: 'University Delegation Visit',
          date: '09 Apr 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'MAY',
      year: 2024,
      mainImage: '/images/g5.webp',
      events: [
        {
          title: 'Counselling Workshop',
          date: '15 May 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'JUNE',
      year: 2024,
      mainImage: '/images/g6.webp',
      events: [
        {
          title: 'Admission Guidance Program',
          date: '11 Jun 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'JULY',
      year: 2024,
      mainImage: '/images/g1.webp',
      events: [
        {
          title: 'International University Meet',
          date: '07 Jul 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'AUGUST',
      year: 2024,
      mainImage: '/images/g2.webp',
      events: [
        {
          title: 'Independence Day Celebration',
          date: '15 Aug 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'SEPTEMBER',
      year: 2024,
      mainImage: '/images/g3.webp',
      events: [
        {
          title: 'Student Interaction Session',
          date: '10 Sep 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'OCTOBER',
      year: 2024,
      mainImage: '/images/g4.webp',
      events: [
        {
          title: 'Education Summit',
          date: '14 Oct 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2024,
      mainImage: '/images/g5.webp',
      events: [
        {
          title: 'Overseas Admission Drive',
          date: '09 Nov 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'DECEMBER',
      year: 2024,
      mainImage: '/images/g6.webp',
      events: [
        {
          title: 'Year End Review Meet',
          date: '20 Dec 2024',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
  ],

  /* ======================= 2025 ======================= */
  2025: [
    {
      month: 'JANUARY',
      year: 2025,
      mainImage: '/images/g1.webp',
      events: [
        {
          title: 'New Year Counselling Drive',
          date: '10 Jan 2025',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'FEBRUARY',
      year: 2025,
      mainImage: '/images/g2.webp',
      events: [
        {
          title: 'University Fair',
          date: '18 Feb 2025',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    // 👉 Continue same structure till DECEMBER 2025
  ],

  /* ======================= 2026 ======================= */
  2026: [
    {
      month: 'JANUARY',
      year: 2026,
      mainImage: '/images/g3.webp',
      events: [
        {
          title: 'Global Education Orientation',
          date: '12 Jan 2026',
          images: [
            '/images/g1.webp',
            '/images/g2.webp',
            '/images/g3.webp',
            '/images/g4.webp',
            '/images/g5.webp',
            '/images/g6.webp',
          ],
        },
      ],
    },
    // 👉 Continue same structure for full year
  ],
};


