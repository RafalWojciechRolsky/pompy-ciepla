import Footer from "@/components/Footer";
import Contact from "@/components/FormContact/Contact";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Header/Sidebar";
import Script from "next/script";
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
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://pompy4you.pl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://justreview.co/widget/justreview.css"
        /> */}
        <Script id="chatbase-embed" strategy="afterInteractive">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="GI5eyQYFHMeeaWoqLkXl2";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
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
