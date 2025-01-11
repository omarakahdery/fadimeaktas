import Image from "next/image";

const imgList = [
  "https://alissenuera.com/cdn/shop/files/Alisse_nuerA_Gelinlik_main_page_slider_desktop.jpg",
  "https://alissenuera.com/cdn/shop/files/gelinlik-modelleri-gelinlik-koleksiyonlari-slider-2_96d2987d-f3a8-41fa-b312-0b2bcd2bdcc7.webp",
  "https://alissenuera.com/cdn/shop/files/saten-gelinlik-modelleri-saten-gelinlik-koleksiyonu-slider-3.webp",
  "https://alissenuera.com/cdn/shop/files/oriental-fashion-show-alisse-nuera-fashion-show-slider-4.webp",
  "https://alissenuera.com/cdn/shop/files/gelin-odasi-dugununuze-hazirlanin-slider-6.webp",
]

export function Hero() {
  return (
    <>
      <section style={{ marginTop: "128px" }}>
        {imgList.map((src, index) => (
          <ImgToHomePage
            key={index}
            src={src}
          />
        ))}
      </section>
    </>
  );
}

export function ImgToHomePage({ src }: { src: string }) {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }} className="col-md-7 mt-md-n5">
        <div className="position-relative w-100 rtl-flip">
          <div style={{ left: "120px", top: "120px" }} className={"position-absolute"}>

            <div className="col-md-5 col-lg-4 offset-lg-1 text-center text-md-start mb-4 mb-md-0">
              <div className="pt-5 pt-md-0 px-4 px-sm-5 pe-md-0 ps-md-5 ps-lg-0">
                {/* <p className="fs-xl mb-lg-4">The new stylish collection</p>*/}
                <h1 className="display-4 mb-4 mb-lg-5">2025 Gelinlik Modelleri </h1>
                <a className="btn btn-lg btn-dark" href="/collections">
                  Keşfet
                  <i className="ci-arrow-up-right fs-lg ms-2 me-n1"></i>
                </a>
              </div>
            </div>

          </div>
          <Image
            sizes="100vw, 33vw"
            width={4000}
            height={800}
            src={src}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}