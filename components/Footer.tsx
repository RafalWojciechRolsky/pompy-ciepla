import Link from "next/link";
import { FC } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

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
          <Link
            href="https://www.instagram.com/"
            aria-label="Profil na Instagram"
          >
            <FaInstagram className="social-icons" />
          </Link>
          <Link
            href="https://www.facebook.com/"
            aria-label="Profil na Facebook"
          >
            <FaFacebookSquare className="social-icons" />
          </Link>
          <Link href="https://www.linkedin.com/" aria-label="profil na Linkein">
            <FaLinkedin className="social-icons" />
          </Link>
        </div>
      </div>
      <p className="footer__copyright">
        Wszystkie prawa zastrzeżone © 2023 Rafał Majewski
      </p>
    </footer>
  );
};

export default Footer;
