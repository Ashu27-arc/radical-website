//\src\components\home\CourseCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/data/courses';

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
        {/* Image */}
        <Image
          src={course.image}
          alt={course.title}
          width={348}
          height={394}
          className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Content */}
        <div className="absolute rounded-lg bottom-4 left-4 right-4 p-5 text-white bg-black/50 backdrop-blur-[10px]">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            {course.shortDesc}
          </p>

          <span className="inline-flex items-center mt-3 text-sm font-medium">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

