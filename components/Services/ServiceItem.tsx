import Image from 'next/image';
import { FC } from 'react';

interface IPropsTypes {
  service: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

const ServiceItem: FC<IPropsTypes> = async ({ service: { title, description, imageUrl } }) => {
  return (
    <div className="service">
      <figure>
        <Image src={`/${imageUrl}`} height={300} width={261} alt={title} />
      </figure>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
