import './globals.css';


export const metadata = { title: 'Сайт Визитка', description: 'Описание для SEO' };


export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}