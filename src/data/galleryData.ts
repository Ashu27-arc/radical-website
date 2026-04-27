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
    // {
    //   month: 'JANUARY',
    //   year: 2024,
    //   mainImage: '/images/g1.webp',
    //   events: [
    //     {
    //       title: 'New Year Orientation Program',
    //       date: '10 Jan 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //     {
    //       title: 'Student Welcome Meet',
    //       date: '22 Jan 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'FEBRUARY',
    //   year: 2024,
    //   mainImage: '/images/gallery/2024.webp',
    //   events: [
    //     {
    //       title: 'Education Expo Delhi',
    //       date: '05 Feb 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //     {
    //       title: 'Career Guidance Seminar',
    //       date: '18 Feb 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'MARCH',
    //   year: 2024,
    //   mainImage: '/images/g3.webp',
    //   events: [
    //     {
    //       title: 'Study Abroad Fair',
    //       date: '12 Mar 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'APRIL',
    //   year: 2024,
    //   mainImage: '/images/g4.webp',
    //   events: [
    //     {
    //       title: 'University Delegation Visit',
    //       date: '09 Apr 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    {
      month: 'APRIL',
      year: 2024,
      mainImage: '/images/gallery/2024/april/apr1.webp',
      events: [
        {
          title: 'April',
          date: '2024',
          images: [
            '/images/gallery/2024/april/apr1.webp',
          ],
        },
      ],
    },

    // {
    //   month: 'MAY',
    //   year: 2024,
    //   mainImage: '/images/g5.webp',
    //   events: [
    //     {
    //       title: 'Counselling Workshop',
    //       date: '15 May 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'JUNE',
    //   year: 2024,
    //   mainImage: '/images/g6.webp',
    //   events: [
    //     {
    //       title: 'Admission Guidance Program',
    //       date: '11 Jun 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'JULY',
    //   year: 2024,
    //   mainImage: '/images/g1.webp',
    //   events: [
    //     {
    //       title: 'International University Meet',
    //       date: '07 Jul 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'AUGUST',
    //   year: 2024,
    //   mainImage: '/images/g2.webp',
    //   events: [
    //     {
    //       title: 'Independence Day Celebration',
    //       date: '15 Aug 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'SEPTEMBER',
    //   year: 2024,
    //   mainImage: '/images/g3.webp',
    //   events: [
    //     {
    //       title: 'Student Interaction Session',
    //       date: '10 Sep 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    {
      month: 'OCTOBER',
      year: 2024,
      mainImage: '/images/gallery/2024/october/1.webp',
      events: [
        {
          title: 'October',
          date: '2024',
          images: [
            '/images/gallery/2024/october/1.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2024,
      mainImage: '/images/gallery/2024/november/1.webp',
      events: [
        {
          title: 'November',
          date: '2024',
          images: [
            '/images/gallery/2024/november/1.webp',
          ],
        },
      ],
    },
    // {
    //   month: 'DECEMBER',
    //   year: 2024,
    //   mainImage: '/images/g6.webp',
    //   events: [
    //     {
    //       title: 'Year End Review Meet',
    //       date: '20 Dec 2024',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
  ],

  /* ======================= 2025 ======================= */
  2025: [
    {
      month: 'JANUARY',
      year: 2025,
      mainImage: '/images/gallery/2025/january/jan1.webp',
      events: [
        {
          title: 'January',
          date: '2025',
          images: [
            '/images/gallery/2025/january/jan1.webp',
            // '/images/g1.webp',
            // '/images/g2.webp',
            // '/images/g3.webp',
            // '/images/g4.webp',
            // '/images/g5.webp',
            // '/images/g6.webp',
          ],
        },
      ],
    },
    {
      month: 'JULY',
      year: 2025,
      mainImage: '/images/gallery/2025/july/j1.webp',
      events: [
        {
          title: 'July',
          date: '2025',
          images: [
            '/images/gallery/2025/july/j1.webp',
          ],
        },
      ],
    },

    // {
    //   month: 'FEBRUARY',
    //   year: 2025,
    //   mainImage: '/images/gallery/g8.webp',
    //   events: [
    //     {
    //       title: 'University Fair',
    //       date: '18 Feb 2025',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'OCTOBER',
    //   year: 2025,
    //   mainImage: '/images/gallery/2025/october/1.webp',
    //   events: [
    //     {
    //       title: 'University Fair',
    //       date: '18 Oct 2025',
    //       images: [
    //         '/images/gallery/2025/october/1.webp',
    //         '/images/gallery/2025/october/2.webp',
    //         '/images/gallery/2025/october/3.webp',
    //         '/images/gallery/2025/october/4.webp',
    //         '/images/gallery/2025/october/5.webp',
    //         '/images/gallery/2025/october/6.webp',
    //         '/images/gallery/2025/october/7.webp',
    //         '/images/gallery/2025/october/8.webp',
    //         '/images/gallery/2025/october/9.webp',
    //         '/images/gallery/2025/october/10.webp',
    //         '/images/gallery/2025/october/11.webp',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   month: 'NOVEMBER',
    //   year: 2025,
    //   mainImage: '/images/gallery/2025/tanishka.webp',
    //   events: [
    //     {
    //       title: 'University Fair',
    //       date: '18 Dec 2025',
    //       images: [
    //         '/images/gallery/2025/mayank.webp',
    //         '/images/gallery/2025/neet2025-3.webp',
    //         '/images/gallery/2025/november/n1.webp',
    //         '/images/gallery/2025/november/n2.webp',
    //         '/images/gallery/2025/november/n3.webp',
    //         '/images/gallery/2025/november/n4.webp',
    //         '/images/gallery/2025/november/n5.webp',
    //       ],
    //     },
    //   ],
    // },
    {
      month: 'SEPTEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/september/sp1.webp',
      events: [
        {
          title: 'September',
          date: '2025',
          images: [
            '/images/gallery/2025/september/sp1.webp',
          ],
        },
      ],
    },
    {
      month: 'SEPTEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/september/sp2.webp',
      events: [
        {
          title: 'September',
          date: '2025',
          images: [
            '/images/gallery/2025/september/sp2.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/november/n2.webp',
      events: [
        {
          title: 'November',
          date: '2025',
          images: [
            '/images/gallery/2025/november/n2.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/november/n4.webp',
      events: [
        {
          title: 'November',
          date: '2025',
          images: [
            '/images/gallery/2025/november/n4.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/november/n5.webp',
      events: [
        {
          title: 'November',
          date: '2025',
          images: [
            '/images/gallery/2025/november/n5.webp',
          ],
        },
      ],
    },
    {
      month: 'NOVEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/november/n6.webp',
      events: [
        {
          title: 'November',
          date: '2025',
          images: [
            '/images/gallery/2025/november/n6.webp',
          ],
        },
      ],
    },

    {
      month: 'DECEMBER',
      year: 2025,
      mainImage: '/images/gallery/2025/aseem.webp',
      events: [
        {
          title: 'December',
          date: '2025',
          images: [
            '/images/gallery/2025/aseem.webp',
            // '/images/gallery/2025/december/d1.webp',
            // '/images/gallery/2025/december/d2.webp',
            // '/images/gallery/2025/december/d3.webp',
            // '/images/gallery/2025/december/d4.webp',
            // '/images/gallery/2025/december/d5.webp',
          ],
        },
      ],
    },
    // 👉 Continue same structure till DECEMBER 2025
  ],

  /* ======================= 2026 ======================= */
  2026: [
    // {
    //   month: 'JANUARY',
    //   year: 2026,
    //   mainImage: '/images/g3.webp',
    //   events: [
    //     {
    //       title: 'Global Education Orientation',
    //       date: '12 Jan 2026',
    //       images: [
    //         '/images/g1.webp',
    //         '/images/g2.webp',
    //         '/images/g3.webp',
    //         '/images/g4.webp',
    //         '/images/g5.webp',
    //         '/images/g6.webp',
    //       ],
    //     },
    //   ],
    // },
    {
      month: 'FEBRUARY',
      year: 2026,
      mainImage: '/images/gallery/2026/february/1.webp',
      events: [
        {
          title: 'February',
          date: '2026',
          images: [
            '/images/gallery/2026/february/1.webp',
          ],
        },
      ],
    },
    {
      month: 'FEBRUARY',
      year: 2026,
      mainImage: '/images/gallery/2026/february/2.webp',
      events: [
        {
          title: 'February',
          date: '2026',
          images: [
            '/images/gallery/2026/february/2.webp',
          ],
        },
      ],
    },
    // 👉 Continue same structure for full year
  ],
};