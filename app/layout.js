import './globals.css';


export const metadata = { 
    title: 'Селиванова Мария Сергеевна | врач-косметолог г.Оса',
    description: 'Услуги сертифицированного косметолога в Осе. Цены на контурную пластику, уходовые процедуры и аппараты. Актуальный прайс-лист и запись на прием.' 
  };


export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}