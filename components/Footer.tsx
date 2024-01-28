import { FC } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface IPropsTypes {
  name?: string;
}

const Footer: FC<IPropsTypes> = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo phone={false} />
        <nav>
          <Link href="/regulamin" className="regulamin">
            Regulamin
          </Link>
          <Link href="/polityka-prywatnosci" className="regulamin">
            Polityka Prywatności
          </Link>
          <Link href="/cookies" className="regulamin">
            Ustawienia Cookies
          </Link>
        </nav>
        <div className="socials">
          <Link href="/">
            <FaInstagram className="social-icons" />
          </Link>
          <Link href="/">
            <FaFacebookSquare className="social-icons" />
          </Link>
          <Link href="/">
            <FaLinkedin className="social-icons" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
