import Link from "next/link";
import Image from "next/image";
import item1 from "../../assets/img/shop/fashion/01.png";

export function Collections() {
  return (
    <>
      <main className="content-wrapper">

        <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Prenses Gelinlik Modelleri</li>
          </ol>
        </nav>


        <h1 className="h3 container pb-3 pb-lg-4">Prenses Gelinlik Modelleri</h1>
        <section className="container">

          {/*Sorting*/}
          <div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
            <div className="fs-sm text-body-emphasis text-nowrap"><span className="fw-semibold">43 </span>Ürün
              Bulundu
            </div>
            <div className="d-flex align-items-center text-nowrap">
              <label className="form-label fw-semibold mb-0 me-2">Sıralama:</label>
              <div style={{ "width": "190px" }}>
                <select className="form-select border-0 rounded-0 px-1" data-select="{
                    &quot;removeItemButton&quot;: false,
                    &quot;classNames&quot;: {
                      &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;border-0&quot;, &quot;rounded-0&quot;, &quot;px-1&quot;]
                    }
                  }">
                  <option value="Popularity">En Popüler</option>
                  <option value="Price: Low to High">Fiyat: Düşükten Yükseğe</option>
                  <option value="Price: High to Low">Fiyat: Yüksekten Düşüğe</option>
                  <option value="Newest Arrivals">En Yeni Gelenler</option>
                </select>
              </div>
            </div>
          </div>


          <div className="row gy-4 gy-md-5 pb-4 pb-md-5">

            {/*Item*/}
            {imges.map((src, index) => (
              <Item src={src.src} name={src.name} id={String(src.id)}/>
            ))}

          </div>
        </section>


      </main>
    </>
  );
}

export const imges: {
  id: number,
  name: string,
  src: string
}[] = [
  {
    id: 1,
    name: "Straplez Kabarık Prenses Etek Kırık Beyaz Dantelli Gelinlik Modeli",
    src: "https://cdn.vakko.com/mnresize/1490/1746/868289809891-01.jpg",
  },
  {
    id: 2,
    name: "V Yaka Transparan Kollu Dantelli İncili A Model Gelinlik",
    src: "https://cdn.vakko.com/mnresize/595/892/8683821049902-01.jpg",
  },
  {
    id: 3,
    name: "V Yaka Işıltılı Dantelli Transparan Kollu Prenses Gelinlik",
    src: "https://cdn.vakko.com/mnresize/595/892/8683820736339-01.jpg"
  },
  {
    id: 4,
    name: "Uzun Kollu Pileli Dantelli Prenses Gelinlik Modeli",
    src: "https://cdn.vakko.com/mnresize/595/892/8683820148392-01.jpg",
  },
  {
    id: 5,
    name: "Kayık Yaka Transparan Uzun Kollu Prenses Gelinlik Modeli",
    src: "https://cdn.vakko.com/mnresize/595/892/8683821049735-01.jpg",
  },
  {
    id: 6,
    name: "Portatif Kollu Dekolteli Tamamı Dantelli Prenses Etek Gelinlik Modeli",
    src: "https://cdn.vakko.com/mnresize/595/892/8683820116766-01.jpg",
  },
  {
    id: 7,
    name: "Transparan Kollu Tüllü Dantelli Aplikli Prenses Gelinlik",
    src: "https://cdn.vakko.com/mnresize/595/892/8683468714911-01.jpg"
  },

]
const Item = ({ src, name, id }: { src: string, name: string, id: string }) => {
  return <div className="col-6 col-md-4 mb-2 mb-sm-3 mb-md-0">
    <div className="animate-underline hover-effect-opacity">
      <div className="position-relative mb-3">
        <button type="button"
                className="btn btn-icon btn-secondary animate-pulse fs-base bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
                aria-label="Add to Wishlist">
          <i className="ci-heart animate-target"></i>
        </button>
        <Link className="d-flex bg-body-tertiary rounded-0" href={id}>
          <div className="ratio" style={{ "--cz-aspect-ratio": "calc(360 / 274 * 100%)" } as React.CSSProperties}>
            <Image
              width={274}
              height={360}
              src={src}
              alt="Image"
            />
          </div>
        </Link>

      </div>
      <div className="nav mb-2">
        <Link className="nav-link min-w-0 text-dark-emphasis p-0" href={id}>
          <span className="">{name}</span>
        </Link>
      </div>

      <div className="h6 mb-2">₺12.200,00
        <del className="fs-sm fw-normal text-body-tertiary">
          {" "}₺15.200,00
        </del>
      </div>

    </div>
  </div>
}