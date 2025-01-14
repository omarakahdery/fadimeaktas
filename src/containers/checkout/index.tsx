import Link from "next/link";
import Image from "next/image";

export const Checkout = () => {
  return (
    <>
      <section style={{ marginTop: "80px" }}>
        <main className="container content-wrapper">
          <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <h1 className="h3 pb-2 pb-md-3">Ödeme</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xl-5 offset-xl-1 mb-5 mb-lg-0">
                <div className="vstack gap-4">

                  <div style={{ width: "100%" }} className="">
                    <div className="vstack  gap-4">
                      {/*Item*/}
                      <div className="d-flex w-100 h-100 align-items-start me-auto">
                        <Link className="flex-shrink-0" href="/0">
                          <Image
                            src="https://weddedwonderland.com/wp-content/uploads/2024/01/image-72.jpeg"
                            className="bg-body-tertiary rounded"
                            width={80}
                            height={80}
                            alt="Thumbnail"
                          />
                        </Link>
                        <div className="h-100 w-100 d-flex justify-content-between flex-column min-w-0 ps-3">
                          <div>
                            <div className="nav mb-2">
                              <Link className="nav-link min-w-0 text-dark-emphasis p-0" href={"/0"}>
                                <span className="">{"Georges Hobeika"}</span>
                              </Link>
                            </div>
                            <div className="fw-normal text-dark fs-sm mb-2">₺10.900,00</div>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex w-100 h-100 align-items-start me-auto">
                        <Link className="flex-shrink-0" href="/0">
                          <Image
                            src="https://weddedwonderland.com/wp-content/uploads/2024/01/image-63.jpeg"
                            className="bg-body-tertiary rounded"
                            width={80}
                            height={80}
                            alt="Thumbnail"
                          />
                        </Link>
                        <div className="h-100 w-100 d-flex justify-content-between flex-column min-w-0 ps-3">
                          <div>
                            <div className="nav mb-2">
                              <Link className="nav-link min-w-0 text-dark-emphasis p-0" href={"/0"}>
                                <span className="">{"Tony Ward"}</span>
                              </Link>
                            </div>
                            <div className="fw-normal text-dark fs-sm mb-2">₺10.900,00</div>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-xl-4 offset-lg-1">
                <div className="position-relative mb-3">
                  <input type="email" className="form-control rounded-pill"
                         placeholder="Kart Sahibi"/>
                </div>
                <div className="position-relative mb-3" data-input-format="{&quot;creditCard&quot;: true}">
                  <input type="text" className="form-control form-icon-end rounded-pill"
                         placeholder="Kart numarası"/>
                  <span
                    className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                    data-card-icon=""></span>
                </div>
                <div className="d-flex gap-3">
                  <input type="text" className="form-control w-50 rounded-pill"
                         data-input-format="{&quot;date&quot;: true, &quot;datePattern&quot;: [&quot;m&quot;, &quot;y&quot;]}"
                         placeholder="AA/YY"/>
                  <input type="text" className="form-control w-50 rounded-pill" maxLength={4}
                         data-input-format="{&quot;numeral&quot;: true, &quot;numeralPositiveOnly&quot;: true, &quot;numeralThousandsGroupStyle&quot;: &quot;none&quot;}"
                         placeholder="CVC"/>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100 mt-4 mb-3">
                  <span className="fs-sm">Toplam:</span>
                  <span className="mb-0">₺10.900,00</span>
                </div>
                <button type="button" className="btn btn-lg btn-dark w-100 rounded-pill">

                  Öde ₺10.900,00
                </button>
                <div className="d-flex align-items-center justify-content-center fs-xs text-body-secondary mt-3">
                  <i className="ci-lock me-1"></i>
                  Güvenli ödeme
                </div>
              </div>


            </div>
          </div>
        </main>
      </section>
    </>
  );
}