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
      <section style={{ marginTop: "80px" }}>
        <main className="content-wrapper">
          <nav className="container-fluid pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
              <li className="breadcrumb-item"><Link href="shop-catalog-fashion.html">Prenses Gelinlik Modelleri</Link>
              </li>
              {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
            </ol>
          </nav>

          <section className="container-fluid">

            <div style={{ display: "flex", gap: "10px" }} className="">
              {/*photos*/}
              <div style={{ flexBasis: "50%", }}>
                <Link
                  //hover-effect-scale hover-effect-opacity
                  className="position-relative d-flex rounded-0 mb-1 overflow-hidden"
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
                <Link
                  //hover-effect-scale hover-effect-opacity
                  className=" position-relative d-flex rounded-0 mb-1 overflow-hidden"
                  href="" data-glightbox="" data-gallery="product-gallery">
                  <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
                       style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
                    <Image
                      width={600}
                      height={900}
                      src={"https://alissenuera.com/cdn/shop/files/Alisse-nuerA-Portatif-Kollu-Dekolteli-Tamami-Dantelli-Prenses-Etek-Gelinlik-Modeli-Back-Image_1512x.jpg"}
                      alt="Image"
                    />
                  </div>
                </Link>
                <Link
                  //hover-effect-scale hover-effect-opacity
                  className=" position-relative d-flex rounded-0 mb-1 overflow-hidden"
                  href="" data-glightbox="" data-gallery="product-gallery">
                  <div className="ratio hover-effect-target bg-body-tertiary rounded-0"
                       style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}>
                    <Image
                      width={600}
                      height={900}
                      src={"https://alissenuera.com/cdn/shop/files/Alisse-nuerA-Straplez-Kabarik-Prenses-Etek-Kirik-Beyaz-Dantelli-Gelinlik-Modeli-Front-Image_1512x.jpg"}
                      alt="Image"
                    />
                  </div>
                </Link>
              </div>

              <div style={{ flexBasis: "50%", position: "relative", width: "100%" }}>

                <div style={{ position: "sticky", top: "0", width: "100%" }} className="col-md-6">

                  <div style={{ right: "50px", padding: "96px" }}>
                    <div
                      //  className="ps-md-4 ps-xl-5"
                    >
                      {/*Reviews*/}
                      {/*  <a className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3" href="#reviews">
                    <div className="d-flex gap-1 fs-sm">
                      <i className="ci-star-filled text-warning"></i>
                      <i className="ci-star-filled text-warning"></i>
                      <i className="ci-star-filled text-warning"></i>
                      <i className="ci-star-filled text-warning"></i>
                      <i className="ci-star text-body-tertiary opacity-75"></i>
                    </div>
                    <span className="text-body-tertiary fs-sm">23 reviews</span>
                  </a>*/}

                      <h1 className="h6">

                        {item.name}
                      </h1>
                      {/*Price*/}
                      <div className="h4 d-flex align-items-center my-4">
                        ₺10.900,00
                        <del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>
                      </div>

                      {/*Color options*/}
                      {/* <div className="mb-4">
                    <label className="form-label fw-semibold pb-1 mb-2">Color: <span className="text-body fw-normal"
                                                                                     id="colorOption">Dark blue</span></label>
                    <div className="d-flex flex-wrap gap-2" data-binded-label="#colorOption">
                      <input type="radio" className="btn-check" name="colors" id="dark-blue" checked={false}/>
                      <label htmlFor="dark-blue" className="btn btn-image p-0" data-label="Dark blue">
                        <img src="assets/img/shop/fashion/product/colors/color01.png" width="56" alt="Dark blue"/>
                        <span className="visually-hidden">Dark blue</span>
                      </label>
                      <input type="radio" className="btn-check" name="colors" id="pink"/>
                      <label htmlFor="pink" className="btn btn-image p-0" data-label="Pink">
                        <img src="assets/img/shop/fashion/product/colors/color02.png" width="56" alt="Pink"/>
                        <span className="visually-hidden">Pink</span>
                      </label>
                      <input type="radio" className="btn-check" name="colors" id="light-blue"/>
                      <label htmlFor="light-blue" className="btn btn-image p-0" data-label="Light blue">
                        <img src="assets/img/shop/fashion/product/colors/color03.png" width="56" alt="Light blue"/>
                        <span className="visually-hidden">Light blue</span>
                      </label>
                    </div>
                  </div>*/}

                      {/*Size select*/}
                      {/*   <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <label className="form-label fw-semibold mb-0">Size</label>
                      <div className="nav">
                        <a className="nav-link animate-underline fw-normal px-0" href="#sizeGuide"
                           data-bs-toggle="modal">
                          <i className="ci-ruler fs-lg me-2"></i>
                          <span className="animate-target">Size guide</span>
                        </a>
                      </div>
                    </div>
                    <select className="form-select form-select-lg" data-select="{
                  &quot;classNames&quot;: {
                    &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;form-select-lg&quot;]
                  }
                }" aria-label="Material select">
                      <option value="">Choose a size</option>
                      <option value="xs">6-8 (XS)</option>
                      <option value="s">8-10 (S)</option>
                      <option value="m">10-12 (M)</option>
                      <option value="l">12-14 (L)</option>
                      <option value="xl">14-16 (XL)</option>
                    </select>
                  </div>*/}

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
                              Bu parçe kalitesini korumak için bakım talimatlarına uymanızı öneririz:                              <ul>
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
        </main>
      </section>
    </>
  );
}
