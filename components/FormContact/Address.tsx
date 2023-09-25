import { FC } from 'react';

import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';
import { MdOutlineTextSnippet } from 'react-icons/md';

interface IPropsTypes {
  name?: string;
}

const Address: FC<IPropsTypes> = (props) => {
  return (
    <section className="address">
      <div className="address__container">
        <h5>Pompy Ciepła 4 You</h5>
        <address>
          <dl>
            <div>
              <dt>
                <FaMapMarkerAlt size={12} style={{ marginRight: '1rem' }} />
                Adres
              </dt>
              <dd>
                ul. Nawoja 20
                <br />
                Nawojowa Góra
                <br />
                33-333, Polska
              </dd>

              <span>
                <dt>
                  <MdOutlineTextSnippet size={12} style={{ marginRight: '1rem' }} />
                </dt>
                <dd>111-222-33-44</dd>
              </span>
            </div>
            <div>
              <span>
                <dt>
                  <FaRegClock size={12} style={{ marginRight: '1rem' }} />
                </dt>
                <dd>
                  Pon - Piątek
                  <br />
                  9:00 -18:00
                </dd>
              </span>
              <span>
                <dt>
                  <FaPhoneAlt size={12} style={{ marginRight: '1rem' }} />
                </dt>
                <dd>
                  <a href="tel:+48999888777">+48 999-888-777</a>
                </dd>
              </span>

              <span>
                <dt>
                  <SiMaildotru size={12} style={{ marginRight: '1rem' }} />
                </dt>
                <dd>
                  <a href="mailto:mojmail@gmail.com">mojmail@gmail.com</a>
                </dd>
              </span>
            </div>
          </dl>
        </address>
      </div>
      <div className="address__mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.896825646569!2d19.654019512969153!3d50.12565117141333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716f6d642766853%3A0x6c9c9020dd74ad7a!2sNawoja%2020%2C%2032-065%20Nawojowa%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1695643060105!5m2!1spl!2spl"
          title="mapa"
          style={{
            border: '0',
            width: '100%',
            height: '100%',
            padding: '2rem',
            borderRadius: '3rem',
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Address;
