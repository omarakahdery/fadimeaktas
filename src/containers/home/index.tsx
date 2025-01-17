"use client";
import Image from "next/image";
import Link from "next/link";
import Fullpage from "@fullpage/react-fullpage";
import { Footer } from "@/components/footer";
import { getData } from "@/lib/api/api-fun";
import { Navbar } from "@/components/navbar";

const imgList = [
  /* "https://alissenuera.com/cdn/shop/files/Alisse_nuerA_Gelinlik_main_page_slider_desktop.jpg",
   "https://alissenuera.com/cdn/shop/files/gelinlik-modelleri-gelinlik-koleksiyonlari-slider-2_96d2987d-f3a8-41fa-b312-0b2bcd2bdcc7.webp",
   "https://alissenuera.com/cdn/shop/files/saten-gelinlik-modelleri-saten-gelinlik-koleksiyonu-slider-3.webp",
   "https://alissenuera.com/cdn/shop/files/oriental-fashion-show-alisse-nuera-fashion-show-slider-4.webp",
   "https://alissenuera.com/cdn/shop/files/gelin-odasi-dugununuze-hazirlanin-slider-6.webp",*/
  "https://cdn.vakko.com/banners/d74ad5e7-4f5c-482d-acc4-e69ea5f56ece.jpeg",
  "https://cdn.vakko.com/banners/fe7e6da4-e226-43e7-ab7b-13c74abf90ce.jpeg",
  "https://api.vakko.com//medias/esra-12.jpg?context=bWFzdGVyfGltYWdlc3w1NjgwNzV8aW1hZ2UvanBlZ3xhRGN5TDJnek5TODVNak16TkRVMk9EVTNNVEU0TDJWemNtRXRNVEl1YW5Cbnw0NzcwYjM2MzA0NjcxMDRlNmViZWU1ODA2YzI3YzRmOGZiNzE2ZDcwNTU3MGMzYTYxNzFiMzY5NWQzNTdjYWI2",
  "https://cdn.vakko.com/banners/d7025919-d811-496f-8c6a-00885d3b3c27.jpeg"
]

export function Home({ footerData }: { footerData: any }) {

  return (
    <>
      <Navbar/>
      <div className={"home-class"}>
        {/*@ts-ignore*/}
        <Fullpage
          licenseKey=""
          scrollingSpeed={700}
          navigation={false}
          anchors={[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]}
          render={({}) => (
            <div>
              {imgList.map((src, index) => (
                <div className="section" key={index}>
                  <div style={{ height: "100vh", overflow: "hidden" }}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
              <div className="section">
                <div style={{ height: "100vh", overflow: "hidden" }}>
                  <Footer categories={footerData}/>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </>

  );
}

export function ImgToHomePage({ src }: { src: string }) {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }} className="col-md-7 mt-md-n5">
        <div className="position-relative w-100 rtl-flip">
          <Link href={"/accessories/20"}>
            <Image
              sizes="100vw, 33vw"
              width={4000}
              height={800}
              src={src}
              alt="Image"
            />
          </Link>
        </div>
      </div>
    </>
  );
}