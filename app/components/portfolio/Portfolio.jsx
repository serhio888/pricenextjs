"use client";

import { useEffect, useState } from "react";
import "./portfolio.css";
import Image from "next/image";

import photo_1 from "../../../public/assets/works/photo_1.jpg";
import photo_2 from "../../../public/assets/works/photo_2.jpg";
import photo_3 from "../../../public/assets/works/photo_3.jpg";

const works = [
  { id: 0, caption: "Контурная пластика губ", src: photo_1 },
  { id: 1, caption: "Лазеротерапия", src: photo_2 },
  { id: 2, caption: "Мультикислотный пилинг", src: photo_3 },
  // { id: 4, caption: "Добавьте описание процедуры" },
  // { id: 5, caption: "Добавьте описание процедуры" },
];

const SPACING = 230; // расстояние между карточками, px

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = works.length;

  const go = (dir) => setIndex((prev) => (prev + dir + total) % total);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
              <button
                key={work.id}
                type="button"
                className={`work-pair ${isCenter ? "is-active" : ""}`}
                onClick={() => (isCenter ? setLightboxOpen(true) : setIndex(i))}
                aria-label={
                  isCenter
                    ? `Открыть ${work.caption}`
                    : `Показать работу ${i + 1}`
                }
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
                <div className="work-photo">
                  <Image src={work.src} alt={work.caption} />
                </div>
                <p className="work-caption">{work.caption}</p>
              </button>
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

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Закрыть просмотр"
          >
            ✕
          </button>

          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Предыдущая работа"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-image">
              <Image
                src={works.filter((work) => work.id === index)[0].src}
                alt={works.filter((work) => work.id === index)[0].caption}
              />
              {/* <Image src={work.src} alt={work.caption} /> */}
              {/* когда будет фото:
              <img src={`/assets/works/work-${works[index].id}.jpg`} alt={works[index].caption} /> */}
            </div>
            <p className="lightbox-caption">
              {works[index].caption}
              <span className="lightbox-counter">
                {" "}
                · {index + 1} / {total}
              </span>
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Следующая работа"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
