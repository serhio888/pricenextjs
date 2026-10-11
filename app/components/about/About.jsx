import Image from "next/image";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="identity">
        <div className="about"></div>

        <div className="identity-text">
          <p className="kicker">Обо мне</p>
          <h2 className="display">Селиванова Мария Сергеевна</h2>
          <p className="role">Врач-косметолог, врач высшей категории</p>

          <p className="lede">
            Стаж работы в медицине — 15 лет. За это время сформировался принцип,
            которого придерживаюсь в работе: перед любой процедурой — осмотр и
            честный разговор о том, что действительно нужно именно вашей коже, а
            не навязанный список услуг.
          </p>

          <div className="facts">
            <div className="fact">
              <span className="fact-number">15 лет</span>
              <span className="fact-label">стажа в медицине</span>
            </div>
            <div className="fact">
              <span className="fact-number">Высшая</span>
              <span className="fact-label">врачебная категория</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
