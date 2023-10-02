import { FC } from 'react';
import path from 'path';
import { promises as fs } from 'fs';

import ServiceItem from './ServiceItem';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface IPropsTypes {
  name?: string;
}

const Services: FC<IPropsTypes> = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const data = await fs.readFile(path.join(jsonDir, 'services.json'), 'utf8');
  const services: Service[] = JSON.parse(data);

  return (
    <div className="services">
      <h2>Zakres naszych usług</h2>
      <section>
        {services.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </section>
    </div>
  );
};

export default Services;
