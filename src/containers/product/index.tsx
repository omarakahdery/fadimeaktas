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

          <nav className="container-fluid pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
              <li className="breadcrumb-item"><Link href="/collections">Prenses Gelinlik Modelleri</Link>
              </li>
              {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
            </ol>
          </nav>

          <section className="container-fluid">
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
                      src={item.src}
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
                          src={changeImageNumber(item.src, 2)}
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
                          src={"https://cdn.vakko.com/mnresize/595/892/8683468714911-01.jpg"}
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
                      <h1 className="h6">
                        {item.name}
                      </h1>
                      {/*Price*/}
                      <div className="h4 d-flex align-items-center my-4">
                        ₺10.900,00
                        <del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>
                      </div>


                      {/*Count input + Add to cart button*/}
                      <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
                        {/* <div className="count-input flex-shrink-0">
                      <button type="button" className="btn btn-icon btn-lg" data-decrement=""
                              aria-label="Decrement quantity">
                        <i className="ci-minus"></i>
                      </button>
                      <input type="number" className="form-control form-control-lg" min="1" value="1" readOnly/>
                      <button type="button" className="btn btn-icon btn-lg" data-increment=""
                              aria-label="Increment quantity">
                        <i className="ci-plus"></i>
                      </button>
                    </div>*/}
                        <div style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px"
                        }}>
                          <button type="button" className="btn rounded-pill btn-lg btn-dark w-100">
                            Sepete Ekle
                          </button>
                          <button type="button" className="btn btn-outline-secondary rounded-pill btn-lg w-100">
                            Şimdi randevu al
                          </button>
                        </div>


                      </div>

                      <p className="fs-sm mb-0">Made from high-quality denim fabric, this midi skirt offers durability
                        and
                        comfort for all-day wear. The mid-length design strikes the perfect balance between casual and
                        chic, making it suitable for various occasions, from casual outings to semi-formal events.</p>
                      <div className="collapse" id="moreDescription">
                        <div className="fs-sm pt-3">
                          <p>One of the standout features of this skirt is its functional pockets. With two spacious
                            pockets at the front, you can conveniently carry your essentials such as keys, phone, or
                            wallet without the need for a bulky bag. The pockets also add a touch of utility and flair
                            to
                            the overall look.</p>
                          <p className="mb-0">The skirt's classic denim color and timeless design make it easy to pair
                            with a variety of tops, blouses, and footwear, allowing you to create endless stylish
                            ensembles. Whether you prefer a laid-back look with a graphic tee and sneakers or a more
                            polished ensemble with a blouse and heels, this skirt effortlessly adapts to your style.</p>
                        </div>
                      </div>

                      <a className="d-inline-block fs-sm fw-medium text-dark-emphasis collapsed mt-1"
                         href="#moreDescription"
                         data-bs-toggle="collapse"
                         aria-expanded="false"
                         aria-controls="moreDescription"
                         data-label-collapsed="Daha fazla göster"
                         data-label-expanded="Daha az göster"
                         aria-label="Show / hide description"
                      ></a>

                      <div className="accordion mt-3" id="accordionExample">

                        <div className="accordion-item border-top">
                          <h3 className="accordion-header" id="headingOne">
                            <button style={{ fontSize: "12px" }} type="button"
                                    className="accordion-button animate-underline"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <span className="animate-target me-2">Detaylar</span>
                            </button>
                          </h3>
                          <div className="accordion-collapse collapse show" id="collapseOne"
                               aria-labelledby="headingOne"
                               data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Bu parçe kalitesini korumak için bakım talimatlarına uymanızı öneririz: <ul>
                              <li>
                                Yıkamayın
                              </li>
                              <li>
                                Ağartıcı kullanmayın
                              </li>
                              <li>
                                Kurutma makinesinde kurutmayın
                              </li>
                              <li>
                                Ütüyü maksimum 110°C taban sıcaklığında kullanın
                              </li>
                              <li>
                                Hidrokarbonlarla (KWL) hafif profesyonel kuru temizleme yapın
                              </li>
                              <li>
                                Nazik kuru temizleme
                              </li>
                              <li>
                                Bir torba içinde ters çevirerek kuru temizleme yapın
                              </li>
                              <li>
                                Ters çevirerek ve araya kumaş koyarak ütüleyin
                              </li>
                            </ul>
                            </div>

                          </div>
                        </div>
                      </div>
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