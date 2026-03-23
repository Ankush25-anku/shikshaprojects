import { Sora, DM_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

import Header1 from "../app/Components/Header/Header1";
import Footer1 from "../app/Components/Footer/Footer1";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'ShikshaFlow - School ERP with WhatsApp Automation',
    template: '%s | ShikshaFlow',
  },
  description: 'ShikshaFlow is a smart school ERP powered by WhatsApp automation for real-time communication and management.',
  openGraph: {
    title: 'ShikshaFlow - School ERP with WhatsApp Automation',
    description: 'Manage school communication, attendance, marks and notifications seamlessly via WhatsApp.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="ShikshaFlow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${sora.variable} ${dm_sans.variable}`}>
        
        {/* ✅ GLOBAL HEADER */}
        <Header1 />

        {/* ✅ PAGE CONTENT */}
        {children}

        {/* ✅ GLOBAL FOOTER */}
        <Footer1 />

      </body>
    </html>
  );
}