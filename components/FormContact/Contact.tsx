import Image from 'next/image';
import { FC } from 'react';

import Form from './Form';
import Address from './Address';

interface IPropsTypes {
  name?: string;
}

const Contact: FC<IPropsTypes> = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__leftContainer">
          <Address />
        </div>
        {/* <div className="contact__rightContainer">
          <Form />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
