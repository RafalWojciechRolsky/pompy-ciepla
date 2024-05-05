import Footer from "@/components/Footer";
import Contact from "@/components/FormContact/Contact";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Header/Sidebar";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/main.scss";
// import Testimonials from '@/components/Testimonials';

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Pompy Ciepła",
  description: "Strona firmy instalacyjnej - Pompy4You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://justreview.co/widget/justreview.css"
        />
      </head>
      <body className={ubuntu.className} id="outer-container">
        <Sidebar />
        <div id="page-wrap">
          <Header />
          <main>{children}</main>
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
