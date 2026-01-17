//\radical\src\components\home\ServiceCard.tsx

import Link from "next/link";
import { Image } from "primereact/image";
type Service = {
  title: string;
  slug: string;
  color: string;
  text: string;
  icon: string;
};
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <div
        className={`relative rounded-2xl p-8 h-[200px] cursor-pointer 
        ${service.color} shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        {/* Diamond Icon */}
        <div className="absolute -top-15 left-1/2 -translate-x-1/2">
          <div className="w-30 h-30 bg-white rotate-45 rounded-xl shadow-lg flex items-center justify-center">
            <span className={`-rotate-45 text-2xl ${service.text}`}>
              <Image src={service.icon} alt="{service.title}" width="60"/>
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-16 text-center">
          <h3 className={`font-semibold text-lg lg:px-8 ${service.text}`}>
            {service.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
