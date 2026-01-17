import { services } from "@/data/services";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamic = "error";

export default async function ServiceDetails({ params }: PageProps) {
  const { slug } = await params; // ✅ REQUIRED IN NEXT 16

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <Link href="/services" className="text-blue-500 underline">
        ← Back to Services
      </Link>

      <div className="mt-8 bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold">{service.title}</h1>
        <p className="mt-4 text-gray-600">
          {service.description}
        </p>
      </div>
    </section>
  );
}
