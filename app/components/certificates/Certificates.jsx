"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./certificates.css";
import aesthetic_cosmetology from "../../../public/assets/certificates/aesthetic_cosmetology.jpg";
import biorepair from "../../../public/assets/certificates/biorepair.jpg";
import botulinum_toxin_therapy from "../../../public/assets/certificates/botulinum_toxin_therapy.jpg";
import botulinum_toxin from "../../../public/assets/certificates/botulinum_toxin.jpg";
import buccal_facial_massage from "../../../public/assets/certificates/buccal_facial_massage.jpg";
import congress from "../../../public/assets/certificates/congress_on_anti-aging_and_aesthetic_medicine.jpg";
import contour_correction from "../../../public/assets/certificates/contour_correction.jpg";
import facial_apparatus from "../../../public/assets/certificates/facial_apparatus.jpg";
import guide_to_acids from "../../../public/assets/certificates/guide_to_acids.jpg";
import injectable_lifting from "../../../public/assets/certificates/injectable_lifting.jpg";
import injection_unit from "../../../public/assets/certificates/injection_unit.jpg";
import laboratory_practicum from "../../../public/assets/certificates/laboratory_practicum.jpg";
import practice_bth from "../../../public/assets/certificates/practice_bth.jpg";
import qualification_doctor from "../../../public/assets/certificates/qualification_doctor.jpg";
import theoretical_program_1 from "../../../public/assets/certificates/theoretical_program_1.jpg";
import theoretical_program_2 from "../../../public/assets/certificates/theoretical_program_2.jpg";

const certificates = [
  {
    id: 0,
    title: "Квалификация врача",
    src: qualification_doctor,
    alt: "qualification_doctor",
  },
  {
    id: 1,
    title: "Эстетическая косметология",
    src: aesthetic_cosmetology,
    alt: "aesthetic_cosmetology",
  },
  { id: 2, title: "Междунородный конгресс", src: congress, alt: "congress" },
  { id: 3, title: "Биорепарация", src: biorepair, alt: "biorepair" },
  {
    id: 4,
    title: "Ботулинотерапия",
    src: botulinum_toxin_therapy,
    alt: "botulinum_toxin_therapy",
  },
  {
    id: 5,
    title: "Ботулотоксин",
    src: botulinum_toxin,
    alt: "botulinum_toxin",
  },
  {
    id: 6,
    title: "Буккальный массаж",
    src: buccal_facial_massage,
    alt: "buccal_facial_massage",
  },

  {
    id: 7,
    title: "Контурная пластика",
    src: contour_correction,
    alt: "contour_correction",
  },
  {
    id: 8,
    title: "Работа со связочным аппаратом лица",
    src: facial_apparatus,
    alt: "facial_apparatus",
  },
  {
    id: 9,
    title: "Гид по кислотам",
    src: guide_to_acids,
    alt: "guide_to_acids",
  },
  {
    id: 10,
    title: "Инъекционный лифтинг",
    src: injectable_lifting,
    alt: "injectable_lifting",
  },
  {
    id: 11,
    title: "Инъекционный блок",
    src: injection_unit,
    alt: "injection_unit",
  },
  {
    id: 12,
    title: "Инновационные испанские пилинг-системы ALCEDO",
    src: laboratory_practicum,
    alt: "laboratory_practicum",
  },
  {
    id: 13,
    title: "Практика БТА FULL FACE",
    src: practice_bth,
    alt: "practice_bth",
  },

  {
    id: 14,
    title: "Теоретическая программа",
    src: theoretical_program_1,
    alt: "theoretical_program_1",
  },
  {
    id: 15,
    title: "Теоретическая программа",
    src: theoretical_program_2,
    alt: "theoretical_program_2",
  },
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
      {/* <p className="kicker">Дипломы и сертификаты</p> */}
      <h2 className="display">Дипломы и сертификаты</h2>

      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <button
            key={cert.id}
            className="certificate-card"
            onClick={() => setActiveIndex(i)}
            aria-label={`Открыть ${cert.title}`}
          >
            <div className="certificate-thumb">
              <Image src={cert.src} alt={cert.alt} />
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
              <Image
                src={
                  certificates.filter((cert) => cert.id === activeIndex)[0].src
                }
                alt={
                  certificates.filter((cert) => cert.id === activeIndex)[0].alt
                }
              />
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
