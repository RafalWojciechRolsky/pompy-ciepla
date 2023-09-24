import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IPropsTypes {
  phone?: boolean;
}

const Logo: FC<IPropsTypes> = ({ phone = true }) => {
  return (
    <section>
      <Link href={'/'}>
        <Image src="/images/logo.svg" alt="logo" width="138" height="45" />
      </Link>
      {phone && (
        <a href="tel:+48123456789" className="phone">
          +48 123-123-123
        </a>
      )}
    </section>
  );
};

export default Logo;
