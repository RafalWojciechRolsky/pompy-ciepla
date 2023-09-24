import Header from '@/components/Header/Header';
import '../styles/main.scss';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import FormContact from '@/components/FormContact';
import Sidebar from '@/components/Header/Sidebar';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Pompy Ciepła',
  description: 'Strona firmy instalacyjnej - Pompy4You',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className} id="outer-container">
        <Sidebar />
        <div id="page-wrap">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
