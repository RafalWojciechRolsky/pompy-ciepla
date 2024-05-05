import { getBase64 } from "@/lib/getBase64";
import Image from "next/image";
import { FC } from "react";

interface IPropsTypes {
  service: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

const ServiceItem: FC<IPropsTypes> = async ({
  service: { title, description, imageUrl },
}) => {
  const blurredDataUrl = await getBase64(imageUrl);

  return (
    <div className="service">
      <figure>
        <Image
          src={`/images/${imageUrl}`}
          height={300}
          width={261}
          sizes="261px"
          alt={title}
          placeholder="blur"
          blurDataURL={blurredDataUrl}
        />
      </figure>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
