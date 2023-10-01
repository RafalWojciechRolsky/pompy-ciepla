import Link from 'next/link';
import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Form: FC<IPropsTypes> = (props) => {
  return (
    <section className="form" id='form-contact'>
      <h5>Bądź z nami w kontakcie</h5>
      <form>
        <div className="row">
          <label htmlFor="name">
            <input type="text" placeholder="Imię" id="name" name="name" />
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" id="email" name="email" />
          </label>
        </div>
        <div className="row">
          <label htmlFor="phone">
            <input type="text" placeholder="Telefon" id="phone" name="phone" />
          </label>
          <label htmlFor="subject">
            <input type="text" placeholder="Temat" id="subject" name="subject" />
          </label>
        </div>
        <label htmlFor="message">
          <textarea placeholder="Message" id="message" />
        </label>
        <div className="submit">
          <label htmlFor="submitButton">
            <input type="checkbox" id="submitButton" name="submitButton" />
            <span>
              Zgadzam się z <Link href={'/'}>Polityką Prywatności</Link>
            </span>
          </label>
          <button type="submit" className="btn btn--form">
            Wyślij
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
