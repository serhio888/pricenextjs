"use client";

import { useState } from "react";
import "./portfolio.css";

const works = [
  { id: 1, caption: "Добавьте описание процедуры" },
  { id: 2, caption: "Добавьте описание процедуры" },
  { id: 3, caption: "Добавьте описание процедуры" },
  { id: 4, caption: "Добавьте описание процедуры" },
  { id: 5, caption: "Добавьте описание процедуры" },
];

const SPACING = 230; // расстояние между карточками, px

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const total = works.length;

  const go = (dir) => setIndex((prev) => (prev + dir + total) % total);

  return (
    <section id="portfolio" className="section-portfolio">
      <p className="kicker">Мои работы</p>
      <h2 className="display">Результаты процедур</h2>

      <div className="portfolio-carousel">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => go(-1)}
          aria-label="Предыдущая работа"
        >
          ‹
        </button>

        <div className="carousel-track">
          {works.map((work, i) => {
            let offset = i - index;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const distance = Math.abs(offset);
            const isCenter = offset === 0;

            return (
              <div
                key={work.id}
                className={`work-pair ${isCenter ? "is-active" : ""}`}
                onClick={() => !isCenter && setIndex(i)}
                style={{
                  transform: `translateX(${offset * SPACING}px) scale(${
                    isCenter ? 1 : 0.82
                  })`,
                  opacity:
                    distance > 2
                      ? 0
                      : isCenter
                        ? 1
                        : distance === 1
                          ? 0.75
                          : 0.4,
                  zIndex: total - distance,
                  pointerEvents: distance > 2 ? "none" : "auto",
                }}
              >
                <div className="work-images">
                  <div className="work-photo">
                    {/* когда будет фото:
                    <img src={`/assets/works/work-${work.id}-before.jpg`} alt="До процедуры" /> */}
                    <span className="work-tag">до</span>
                  </div>
                  <div className="work-photo">
                    {/* когда будет фото:
                    <img src={`/assets/works/work-${work.id}-after.jpg`} alt="После процедуры" /> */}
                    <span className="work-tag work-tag-after">после</span>
                  </div>
                </div>
                <p className="work-caption">{work.caption}</p>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => go(1)}
          aria-label="Следующая работа"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {works.map((work, i) => (
          <button
            key={work.id}
            className={`carousel-dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Показать работу ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
