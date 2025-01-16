import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { imges } from "@/containers/collections/list";
import img6 from "../../../public/6.jpg";
import img4 from "../../../public/4.jpg";
import img2 from "../../../public/2.jpg";
import { IProduct } from "@/types/IProduct";
import { Appointment } from "@/containers/product/appointment";
import { getData } from "@/lib/api/api-fun";

export async function Product({ id }: { id: string }) {
  const data = await getData<IProduct>(`/products/${id}`);
  return (
    <>
      {/*photos*/}
      <div className={"col-lg-8"}>
        <Link
          //hover-effect-scale hover-effect-opacity
          className="position-relative d-flex rounded-0 mb-1  overflow-hidden"
          href="" data-glightbox="" data-gallery="product-gallery">
          <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
               style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
            <Image
              width={600}
              height={900}
              src={data?.images[0].src||""}
              alt="Image"
            />
          </div>
        </Link>
        <div className="row mb-1">
          {/*    <div style={{ paddingRight: "2px" }} className="col-lg-6">
                    <Link
                      //hover-effect-scale hover-effect-opacity
                      className="position-relative d-flex rounded-0 overflow-hidden"
                      href="" data-glightbox="" data-gallery="product-gallery">
                      <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
                           style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
                        <Image
                          width={600}
                          height={900}
                          src={img2}
                          alt="Image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div style={{ paddingLeft: "2px" }} className="col-lg-6">
                    <Link
                      //hover-effect-scale hover-effect-opacity
                      className="position-relative d-flex rounded-0 overflow-hidden"
                      href="" data-glightbox="" data-gallery="product-gallery">
                      <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
                           style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
                        <Image
                          width={600}
                          height={900}
                          src={img4}
                          alt="Image"
                        />
                      </div>
                    </Link>
                  </div>*/}
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
                /*
                                        dangerouslySetInnerHTML={{ __html: data.price_html }}
                */
                className="fw-normal fs-sm d-flex align-items-center mb-4">
                ₺{data?.price}.00,00
                <del className="fs-sm fw-normal text-body-tertiary ms-2">₺{data?.regular_price}.00,00</del>
              </div>

              {/*Count input + Add to cart button*/}
              <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">

                <div style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}>
                  <button type="button" className="btn rounded-pill btn-lg btn-dark w-100">
                    Satın Al
                  </button>
                  <button data-bs-toggle="modal" data-bs-target="#modalId" type="button"
                          className="btn btn-outline-secondary rounded-pill btn-lg w-100">
                    Randevu Al
                  </button>
                </div>


              </div>

              <p dangerouslySetInnerHTML={{ __html: data?.short_description||"" }} className="fs-sm mb-2">

              </p>
              <div className="collapse" id="moreDescription">
                <div className="fs-sm pt-3">
                  <p dangerouslySetInnerHTML={{ __html: data?.description||"" }}>
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

