import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Form: FC<IPropsTypes> = (props) => {
  return (
    <form className="form">
      <label htmlFor="name">
        <input type="text" placeholder="Imię" id="name" />
      </label>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
