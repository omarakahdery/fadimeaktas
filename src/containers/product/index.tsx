import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/IProduct";
import { Appointment } from "@/containers/product/appointment";
import { getData } from "@/lib/api/api-fun";
import { AddItemToCart } from "@/containers/product/add-to-cart";
import { cookies } from "next/headers";
import { formatCurrency } from "@/lib/helper/format-currency";

export async function Product({ id }: { id: string }) {
  const token = (await cookies()).get("token")
  const cart_key = (await cookies()).get("cart_key")

  const data = await getData<IProduct>(`/products/${id}`, {});
  return (
    <>
      {/*<pre>
      {JSON.stringify(data, null, 2)}
      </pre>*/}
      <div className={"col-lg-8 position-relative"}>
        <div className="row g-0 lg:g-1">
          {data?.images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? 'col-12 mb-0 lg:mb-1' : 'col-6 lg:col-6'
              } ${
                index > 0
                  ? index % 2 === 1
                    ? 'lg:pr-0.5'
                    : 'lg:pl-0.5'
                  : ''
              }`}
            >
              <Link
                className="position-relative d-flex rounded-0 overflow-hidden"
                href={image.src}
                data-glightbox=""
                data-gallery="product-gallery"
              >
                <div
                  className="ratio hover-effect-target bg-body-tertiary rounded-0"
                  style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}
                >
                  <Image
                    width={600}
                    height={900}
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || `Image ${index + 1}`}
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={"col-lg-4 col-xl-3"}>
        <div
          style={{ "marginTop": "-115px" }}
          className=" offcanvas-end sticky-lg-top ps-lg-4 ps-xl-0">
          <div className="" style={{ "height": "115px" }}></div>
          <div>
            <div/*className="ps-md-4 ps-xl-5"*/>
              <h6 className="h6 text-uppercase">
                {data?.name}
              </h6>
              {/*Price*/}
              <div
                /* dangerouslySetInnerHTML={{ __html: data.price_html }}*/
                className="fw-normal fs-sm d-flex align-items-center mb-4">
                {formatCurrency(Number(data?.price))}
                {Number(data?.regular_price) > Number(data?.price) &&
                    <del className="fs-sm fw-normal text-body-tertiary ms-2">
                      {formatCurrency(Number(data?.regular_price))}
                    </del>}
              </div>

              {/*Count input + Add to cart button*/}
              <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
                <div style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}>
                  <AddItemToCart Product={{
                    token: token?.value,
                    cart_key: cart_key?.value,
                    id: data?.id.toString() || "",
                    quantity: "1",
                    backordered: data?.backordered
                  }}/>
                  <button data-bs-toggle="modal" data-bs-target="#modalId" type="button"
                          className="btn btn-outline-secondary rounded-pill btn-lg w-100">
                    Randevu Al
                  </button>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: data?.short_description || "" }} className="fs-sm mb-2">
              </p>
              <div className="collapse" id="moreDescription">
                <div className="fs-sm pt-3">
                  <p dangerouslySetInnerHTML={{ __html: data?.description || "" }}>
                  </p>
                </div>
              </div>

              <a className="d-inline-block fs-sm fw-medium text-dark-emphasis collapsed"
                 href="#moreDescription"
                 data-bs-toggle="collapse"
                 aria-expanded="false"
                 aria-controls="moreDescription"
                 data-label-collapsed="Daha fazla göster"
                 data-label-expanded="Daha az göster"
                 aria-label="Show / hide description"
              ></a>
            </div>
          </div>

        </div>

      </div>

      <Appointment productName={data?.name}/>
    </>
  );
}

function changeImageNumber(url: string, newNumber: number) {
  const formattedNumber = newNumber.toString().padStart(2, '0');
  return url.replace(/(\d+)-\d+\.jpg$/, `$1-${formattedNumber}.jpg`);
}

