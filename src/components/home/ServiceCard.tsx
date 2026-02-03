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
        className={`relative rounded-2xl md:p-8 py-8 px-2 md:h-[200px] h-[130px] cursor-pointer 
        ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 
        md:hover:transform-none hover:scale-105 active:scale-95`}
      >
        {/* Diamond Icon */}
        <div className="absolute -top-15 left-1/2 -translate-x-1/2">
          <div className="md:w-30 md:h-30 w-26 h-26 bg-white rotate-45 rounded-xl shadow-lg flex items-center justify-center">
            <span className={`-rotate-45 text-2xl ${service.text}`}>
              <Image src={service.icon} alt="{service.title}" width="60"/>
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="md:mt-16 mt-10 text-center">
          <h3 className={`font-semibold md:text-lg text-sm lg:px-8 ${service.text}`}>
            {service.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

