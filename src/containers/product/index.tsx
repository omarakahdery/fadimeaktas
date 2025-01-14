"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { imges } from "@/containers/collections";


export function Product() {
  const { id } = useParams();
  const item = imges.find((img) => img.id === Number(id));
  if (!item) return <h1>Ürün bulunamadı</h1>
  return (
    <>
      <main className="content-wrapper">
        <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">

          <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
            <ol className="breadcrumb text-dark fs-xs">
              <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
              <li className="breadcrumb-item"><Link href="/collections">Gelinlik</Link>
              </li>
              {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
            </ol>
          </nav>

          <section className="container">
            <div className="row">
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
                      src={"https://weddedwonderland.com/wp-content/uploads/2024/01/image-72.jpeg"}
                      alt="Image"
                    />
                  </div>
                </Link>
                <div className="row mb-1">
                  <div style={{ paddingRight: "2px" }} className="col-lg-6">
                    <Link
                      //hover-effect-scale hover-effect-opacity
                      className="position-relative d-flex rounded-0 overflow-hidden"
                      href="" data-glightbox="" data-gallery="product-gallery">
                      <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
                           style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
                        <Image
                          width={600}
                          height={900}
                          src={"https://weddedwonderland.com/wp-content/uploads/2024/01/image-67.jpeg"}
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
                          src={"https://weddedwonderland.com/wp-content/uploads/2024/01/image-64.jpeg"}
                          alt="Image"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-xl-3"}>
                <div
                  style={{ "marginTop": "-115px" }}
                  className=" offcanvas-end sticky-lg-top ps-lg-4 ps-xl-0">
                  <div className="" style={{ "height": "115px" }}></div>
                  <div>
                    <div/*className="ps-md-4 ps-xl-5"*/>
                      <h6 className="h6">
                        {item.name}
                      </h6>
                      {/*Price*/}
                      <div className="fw-normal fs-sm d-flex align-items-center mb-4">
                        ₺10.900,00
                        <del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>
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
                          <button type="button" className="btn btn-outline-secondary rounded-pill btn-lg w-100">
                            Randevu Al
                          </button>
                        </div>


                      </div>

                      <p className="fs-sm mb-2">
                        Georges Hobeika'nın Haute Couture Moda Haftası'ndaki gelin tasarımı, romantizm ve
                        kadınsılık katmak için çiçeksi unsurları kusursuz bir şekilde entegre ederek, çağdaş bir
                        dokunuşla akıcı modernizmi özetliyor.</p>
                      <div className="collapse" id="moreDescription">
                        <div className="fs-sm pt-3">
                          <p>Dekolte boyunca kullanılan şeffaf kumaş, elbisenin
                            uhrevi ve düşsel çekiciliğini artırıyor.</p>
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

            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function changeImageNumber(url: string, newNumber: number) {
  const formattedNumber = newNumber.toString().padStart(2, '0');
  return url.replace(/(\d+)-\d+\.jpg$/, `$1-${formattedNumber}.jpg`);
}