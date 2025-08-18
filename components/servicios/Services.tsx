'use client';

import { services } from './serviceData';
import ServiceItem from './ServiceItem';


export default function Services() {
  return (
    <section className="py-12 px-6 bg-">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Actividades que puedes disfrutar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
