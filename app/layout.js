import './globals.css';


export const metadata = { 
    title: 'Селиванова Мария Сергеевна | врач-косметолог г.Оса',
    description: 'Услуги сертифицированного косметолога в Осе. Цены на контурную пластику, уходовые процедуры и аппараты. Актуальный прайс-лист и запись на прием.',
     other: {
    "yandex-verification": "cc05c52dc129f35c",
    "google-site-verification": "TCp9cNM2UlUhWCyXX2sKqgWZKH_86gFE87k4IPAgaNQ",
     }
  };


export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}