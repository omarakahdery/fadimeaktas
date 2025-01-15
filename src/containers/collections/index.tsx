import Link from "next/link";
import Image from "next/image";
import item1 from "../../assets/img/shop/fashion/01.png";
import img6 from "../../../public/6.jpg";
import { IProduct } from "@/types/IProduct";

 function  onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
  console.log(event.target.value);
}
async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}
 export  async function  Collections() {
   const products = await getProducts();
  return (
    <>
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
        {products.map((product, index) => (
          <Item key={product.id} product={product}/>
        ))}
      </div>

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
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-59.jpeg"
  },
  {
    id: 1,
    name: "Schiaparelli",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-69.jpeg",
  },

  {
    id: 32,
    name: "Dior",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-56.jpeg"
  },

  {
    id: 2,
    name: "Georges Hobeika",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-66.jpeg",
  },
  {
    id: 3112,
    name: "Schiaparelli",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-57.jpeg"
  }
]
export const Item = ({ product }: { product: IProduct }) => {
  return <div className="col-6 col-md-4 mb-2 mb-sm-3 mb-md-0">
    <div className="animate-underline hover-effect-opacity">
      <div className="position-relative mb-3">
        <button
          type="button"
          className="btn btn-icon btn-secondary animate-pulse fs-base bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
          aria-label="Add to Wishlist">
          <i className="ci-heart animate-target"></i>
        </button>
        <Link className="d-flex bg-body-tertiary rounded-0" href={product.id.toString()}>
          <div className="ratio" style={{ "--cz-aspect-ratio": "calc(360 / 274 * 100%)" } as React.CSSProperties}>
            <Image
              width={274}
              height={360}
              src={product.images[0].src}
              alt="Image"
            />
          </div>
        </Link>

      </div>
      <div className="nav mb-2">
        <Link className="nav-link min-w-0 text-dark-emphasis p-0" href={product.id.toString()}>
          <span className="text-uppercase">{product.name}</span>
        </Link>
      </div>

      <div className="fw-normal text-dark fs-sm mb-2">₺{product.price}.00,00
        <del className="fs-sm fw-normal ms-2 text-body-tertiary">
          {" "}₺{product.regular_price}.200,00
        </del>
      </div>

    </div>
  </div>
}