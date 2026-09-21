"use client";

import { useEffect, useState } from "react";
import "./certificates.css";

const certificates = [
  { id: 1, title: "Название сертификата" },
  { id: 2, title: "Название сертификата" },
  { id: 3, title: "Название сертификата" },
  { id: 4, title: "Название сертификата" },
  { id: 5, title: "Название сертификата" },
  { id: 6, title: "Название сертификата" },
  { id: 7, title: "Название сертификата" },
  { id: 8, title: "Название сертификата" },
  { id: 9, title: "Название сертификата" },
  { id: 10, title: "Название сертификата" },
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const total = certificates.length;
  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);
  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section id="certificates" className="section-certificates">
      <p className="kicker">Дипломы и сертификаты</p>
      <h2 className="display">Подтверждённая квалификация</h2>

      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <button
            key={cert.id}
            className="certificate-card"
            onClick={() => setActiveIndex(i)}
            aria-label={`Открыть ${cert.title}`}
          >
            <div className="certificate-thumb">
              {/* когда будет скан:
              <img src={`/assets/certificates/cert-${cert.id}.jpg`} alt={cert.title} /> */}
            </div>
            <span className="certificate-title">{cert.title}</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={close}>
          <button
            className="lightbox-close"
            onClick={close}
            aria-label="Закрыть просмотр"
          >
            ✕
          </button>

          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Предыдущий сертификат"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-image">
              {/* когда будет скан:
              <img src={`/assets/certificates/cert-${certificates[activeIndex].id}.jpg`} alt={certificates[activeIndex].title} /> */}
            </div>
            <p className="lightbox-caption">
              {certificates[activeIndex].title}
              <span className="lightbox-counter">
                {" "}
                · {activeIndex + 1} / {total}
              </span>
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Следующий сертификат"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
