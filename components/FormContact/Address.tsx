import { FC } from 'react';

import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';

interface IPropsTypes {
  name?: string;
}

const Address: FC<IPropsTypes> = (props) => {
  return (
    <section>
      <div className="addres">addres</div>
      <div className="mape">map</div>
    </section>
  );
};

export default Address;
