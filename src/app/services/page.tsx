

import ServiceCard from "@/components/home/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description: "Explore our professional counselling services",
};

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Expert guidance, counselling, and support to help you achieve
          your academic goals.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* Back Home */}
      <div className="text-center mt-16">
        <Link
          href="/"
          className="inline-block text-sm text-blue-500 underline"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

