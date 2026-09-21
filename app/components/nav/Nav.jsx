"use client";

import { useEffect, useState } from "react";
import "./nav.css";

const links = [
  { id: "about", label: "Обо мне" },
  { id: "portfolio", label: "Работы" },
  { id: "certificates", label: "Дипломы" },
  { id: "price", label: "Прайс" },
  { id: "contacts", label: "Контакты" },
];

const Nav = () => {
  const [active, setActive] = useState(links[0].id);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="Быстрая навигация по разделам">
      <div className="site-nav-inner">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`site-nav-link ${active === link.id ? "is-active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
