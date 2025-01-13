import Link from "next/link";
import Image from "next/image";
import item1 from "../../assets/img/shop/fashion/01.png";

function onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
  console.log(event.target.value);
}

export function Collections() {
  return (
    <>
      <main className="content-wrapper">

        <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
          <ol className="breadcrumb text-dark fs-xs">
            <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
            <li className="breadcrumb-item" aria-current="page">Gelinlik</li>
          </ol>
        </nav>


        <h1 className="h3 container pb-3 pb-lg-4">Gelinlik</h1>
        <section className="container">
          {/*Sorting*/}
          <div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
            {/*       <div className="fs-sm text-body-emphasis text-nowrap"><span className="fw-semibold">43 </span>Ürün
              Bulundu
            </div>*/}
            {/*
            <div className="d-flex align-items-center text-nowrap">
              <label className="form-label fw-semibold mb-0 me-2">Sıralama:</label>
              <div style={{ "width": "190px" }}>
                <select
                  onChange={onCategoryChange}
                  defaultValue="44"
                  className="form-select border-0 rounded-0 px-1" data-select="{
                    &quot;removeItemButton&quot;: false,
                    &quot;classNames&quot;: {
                      &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;border-0&quot;, &quot;rounded-0&quot;, &quot;px-1&quot;]
                    }
                  }">
                  <option value="44">En Popüler</option>
                  <option value="1">Fiyat: Düşükten Yükseğe</option>
                  <option value="2">Fiyat: Yüksekten Düşüğe</option>
                  <option value="3">En Yeni Gelenler</option>
                </select>
              </div>
            </div>
*/}
          </div>


          <div className="row gy-4 gy-md-5 pb-4 pb-md-5">

            {imges.map((src, index) => (
              <Item key={src.src} src={src.src} name={src.name} id={String(src.id)}/>
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
    id: 0,
    name: "Georges Hobeika",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-72.jpeg",
  },
  {
    id: 435,
    name: "Tony Ward",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-63.jpeg",
  },
  {
    id: 45,
    name: "Dior",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-59.jpeg",
  },
  {
    id: 3,
    name: "Stephane Rolland",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-71.jpeg"
  },
  {
    id: 344,
    name: "Stephane Rolland",
    src:"https://weddedwonderland.com/wp-content/uploads/2024/01/image-59.jpeg"
  },
  {
    id: 1,
    name: "Schiaparelli",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-69.jpeg",
  },

  {
    id: 32,
    name: "Dior",
    src:"https://weddedwonderland.com/wp-content/uploads/2024/01/image-56.jpeg"
  },

  {
    id: 2,
    name: "Georges Hobeika",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-66.jpeg",
  },
  {
    id: 3112,
    name: "Schiaparelli",
    src:"https://weddedwonderland.com/wp-content/uploads/2024/01/image-57.jpeg"
  }
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

      <div className="fw-normal text-dark fs-sm mb-2">₺12.200,00
        <del className="fs-sm fw-normal ms-2 text-body-tertiary">
          {" "}₺15.200,00
        </del>
      </div>

    </div>
  </div>
}