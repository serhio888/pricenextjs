import Image from "next/image";

import "./header.css";

import tel from "../../../public/assets/tel.png";
import email from "../../../public/assets/email.png";
import max from "../../../public/assets/max.png";
import location from "../../../public/assets/location.png";
import vk from "../../../public/assets/vk.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="identity">
        <div
          className="portrait"
          role="img"
          aria-label="Портрет врача-косметолога Марии Селивановой"
        ></div>

        <div className="identity-text">
          <h1 className="display" id="page-top" tabIndex="-1">
            Селиванова
            <br />
            Мария Сергеевна
          </h1>
          <p className="role">Врач-косметолог</p>
          <p className="lede">
            Уходовые процедуры, пилинги и инъекционная косметология.
            Длительность и стоимость каждой процедуры указаны в прайсе.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="tel:+79082468092">
              <span className="ico ico-tel" aria-hidden="true"></span>
              <span>+7 908 246-80-92</span>
            </a>
            <a
              className="btn btn-ghost"
              href="https://max.ru/u/f9LHodD0cOKinE_8BHnrHULTsgGQsSsXpOVIwt2WpO1_VYEGbkwXU92hFOk"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={max}
                alt=""
                className="brandlogo"
                width="20"
                height="20"
              />
              <span>Написать в MAX</span>
            </a>
          </div>

          <address className="contacts">
            <a className="contact" href="mailto:makkaloy@mail.ru">
              <span className="ico ico-mail" aria-hidden="true"></span>
              <span>makkaloy@mail.ru</span>
            </a>
            <a
              className="contact"
              href="https://vk.com/cosmetologist_sms"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={vk}
                alt=""
                className="brandlogo"
                width="20"
                height="20"
              />
              <span>cosmetologist_sms</span>
            </a>
            <a
              className="contact"
              href="https://yandex.ru/maps/?pt=55.476565,57.287256&amp;z=15&amp;l=map"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ico ico-place" aria-hidden="true"></span>
              <span>Адрес на Яндекс Картах</span>
            </a>
          </address>
        </div>
      </div>
    </header>
  );
};

export default Header;
