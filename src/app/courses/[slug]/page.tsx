//\src\app\courses\[slug]\page.tsx

import { courses } from '@/data/courses';
import Image from 'next/image';
import { notFound } from 'next/navigation';


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export const dynamic = "error";

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params; // ✅ REQUIRED IN NEXT 16
  
    const course = courses.find(
      (course) => course.slug === slug
    );
  
    if (!course) {
      notFound();
    }
  

  return (
    <section className="bg-[#0B5C87] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <Image
            src={course.image}
            alt={course.title}
            width={1200}
            height={500}
            className="w-full h-[380px] object-cover"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg">
              {course.fullDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
