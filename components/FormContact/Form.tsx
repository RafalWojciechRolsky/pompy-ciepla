import { FC } from 'react';

interface IPropsTypes {
  name?: string;
}

const Form: FC<IPropsTypes> = (props) => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
