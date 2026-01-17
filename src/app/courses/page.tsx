//\src\app\courses\page.tsx

import CourseCard from '@/components/home/CourseCard';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <section className="bg-[#0B5C87] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-3xl font-semibold mb-10">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
