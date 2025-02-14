"use client";
import Image from "next/image";
import Link from "next/link";
import Fullpage from "@fullpage/react-fullpage";
import { Footer } from "@/components/footer";
import { NavbarContent } from "@/components/navbar";
import img1 from "../../../public/home-1.webp";
import img2 from "../../../public/home-2.webp";
import img3 from "../../../public/home-3.webp";
import img4 from "../../../public/home-4.webp";

const imgList = [
  img1,
  img2,
  img3,
  img4,
]

export function Home({ footerData }: { footerData: any }) {

  return (
    <>
      <div className={"home-class"}>
        <header className="bg-body navbar z-fixed p-0 position-fixed top-0 end-0 start-0">
          <NavbarContent/>
        </header>
        {/*@ts-ignore*/}
        <Fullpage
          licenseKey=""
          scrollingSpeed={700}
          navigation={false}
          anchors={[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]}
          render={({}) => (
            <div style={{ marginTop: "80px" }}>
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
                <div style={{ marginTop: "80px", overflow: "hidden" }}>
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