import './globals.css';


export const metadata = { 
    title: 'Селиванова Мария Сергеевна | врач-косметолог г.Оса',
    description: 'Услуги сертифицированного косметолога в Осе. Цены на контурную пластику, уходовые процедуры и аппараты. Актуальный прайс-лист и запись на прием.',
     other: {
    "yandex-verification": "4d8b3eb7ff86ec8a",
    "google-site-verification": "xU9l7fIs807Wj6WTCR98myKHrZ7qcVSOCqZ7LJb-oeI",
     }
  };


export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}