import "./globals.css";
import "../../public/assets/css/theme.min.css";
import type { Metadata } from "next";
import "../../public/assets/icons/cartzilla-icons.min.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import { NavOffcanvas } from "@/components/nav-offcanvas";

export const metadata: Metadata = {
  title: "Fadime Aktaş",
  description: "Fadime Aktaş",
  applicationName: " Fadime Aktaş",
  metadataBase: new URL("https://gelinlik.tr/"),
  alternates: {},
  appleWebApp: {
    title: "Fadime Aktaş",
  },
  keywords: [ "Fadime Aktaş", "Fadime Aktaş" ],
  authors: [ {
    url: "https://www.Fadime Aktaş.com/",
    name: "Fadime Aktaş LTD"
  } ],
  openGraph: {
    title: "gelinlik",
    description: "gelinlik",
    type: "website",
    url: "https://gelinlik.tr/",
    /*
        images: "../assets/app-icons/icon-32x32.png",
    */
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={""}>
    <main className="page-wrapper">
      <Navbar/>
      {children}
      <Footer/>
      <NavOffcanvas/>

    </main>


    <Script src="/assets/js/customizer.min.js"/>
    <Script src="/assets/js/theme.min.js" strategy="afterInteractive"/>

    <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"></Script>


    <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
    <Script src="/assets/vendor/simplebar/simplebar.min.js"></Script>
    <Script src="/assets/vendor/choices.js/choices.min.js"></Script>
    <Script src="/assets/vendor/nouislider/nouislider.min.js"></Script>
    <Script src="/assets/vendor/list.js/list.min.js"></Script>
    <Script src="/assets/js/theme-switcher.js"></Script>

    </body>
    </html>
  );
}
