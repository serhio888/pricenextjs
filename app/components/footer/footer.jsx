import Image from "next/image";

import tel from "../../../public/assets/tel.png";
import email from "../../../public/assets/email.png";
import max from "../../../public/assets/max.png";
import location from "../../../public/assets/location.png";
import vk from "../../../public/assets/vk.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-name display">Селиванова Мария Сергеевна</p>
          <p className="role">Врач-косметолог</p>
        </div>

        <address className="contacts">
          <a className="contact" href="tel:+79082468092">
            <span className="ico ico-tel" aria-hidden="true"></span>
            <span>+7 908 246-80-92</span>
          </a>
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
        </address>
      </div>

      <p className="disclaimer">
        Имеются противопоказания. Необходима консультация специалиста.
      </p>
      <p className="disclaimer">
        Информация носит справочный характер и не является публичной офертой.
        Стоимость подтверждается при записи.
      </p>
    </footer>
  );
}

export default Footer;
