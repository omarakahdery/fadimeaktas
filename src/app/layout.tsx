import "../../public/assets/css/theme.min.css";
import type { Metadata } from "next";
import "../../public/assets/icons/cartzilla-icons.min.css";
import Script from "next/script";
import { NavOffCanvas } from "@/components/nav-off-canvas";
import { getData } from "@/lib/api/api-fun";
import { Navbar } from "@/components/navbar";

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

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getData<ICategory[]>(`/products/categories`);

  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"/>
    </head>

    <body className={""}>
    <main className="page-wrapper">
      {children}
      <NavOffCanvas categories={categories}/>
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
