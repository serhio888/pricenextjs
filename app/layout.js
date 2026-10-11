import './globals.css';


export const metadata = { 
    metadataBase: new URL('https://selivanovams.ru'),
    title: 'Селиванова Мария Сергеевна | врач-косметолог г.Оса',
    description: 'Услуги сертифицированного косметолога в Осе. Цены на контурную пластику, уходовые процедуры и аппараты. Актуальный прайс-лист и запись на прием.',
    alternates: { canonical: '/' },
    openGraph: {
    title: 'Селиванова Мария Сергеевна — врач-косметолог в Осе',
    description: 'Прайс-лист и запись на приём.',
    url: '/',
    siteName: 'Селиванова М.С.',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/assets/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Врач-косметолог Селиванова Мария Сергеевна, Оса',
      },
    ],
  },
     other: {
    "yandex-verification": "4d8b3eb7ff86ec8a",
    "google-site-verification": "xU9l7fIs807Wj6WTCR98myKHrZ7qcVSOCqZ7LJb-oeI",
     }
  };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BeautySalon', 'MedicalBusiness'],
  '@id': 'https://selivanovams.ru/#business',
  name: 'Селиванова Мария Сергеевна — врач-косметолог',
  url: 'https://selivanovams.ru',
  image: 'https://selivanovams.ru/assets/ms.jpg',
  telephone: '+79082468092',
  email: 'makkaloy@mail.ru',
  priceRange: 'от 1200 ₽',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'улица Степана Разина, 81 каб.7',
    addressLocality: 'Оса',
    addressRegion: 'Пермский край',
    addressCountry: 'RU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 57.287256, longitude: 55.476565 },
  sameAs: ['https://vk.com/cosmetologist_sms'],
  employee: {
    '@type': 'Person',
    name: 'Селиванова Мария Сергеевна',
    jobTitle: 'Врач-косметолог',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}