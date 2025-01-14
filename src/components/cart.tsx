import Link from "next/link";
import Image from "next/image";

export const Cart = () => {
  return (
    <>

      {/*Shopping cart offcanvas */}
      <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="shoppingCart" tabIndex={-1}
           aria-labelledby="shoppingCartLabel" style={{ "width": "500px" }}>


        {/*Header*/}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id="shoppingCartLabel">Sepetim
            </h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>


        </div>

        {/*Items*/}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">

          {/*Item*/}
          <div className="d-flex align-items-center">
            <Link className="flex-shrink-0" href="/1">
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
                    <span className="text-uppercase">{"Georges Hobeika"}</span>
                  </Link>
                </div>
                <div className="fw-normal fs-sm d-flex align-items-center">
                  ₺10.900,00
                  <del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-between">
                <div className="count-input rounded-2">
                  <button type="button" className="btn btn-icon btn-sm" data-decrement=""
                          aria-label="Decrement quantity">
                    <i className="ci-minus"></i>
                  </button>
                  <input type="number" className="form-control form-control-sm" value="1"/>
                  <button type="button" className="btn btn-icon btn-sm" data-increment=""
                          aria-label="Increment quantity">
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip"
                        data-bs-custom-className="tooltip-sm" data-bs-title="Remove"
                        aria-label="Remove from cart"></button>
              </div>
            </div>
          </div>


          {/*Item*/}
          <div className="d-flex align-items-center">
            <Link className="flex-shrink-0" href="/1">
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
                    <span className="text-uppercase">{"Tony Ward"}</span>
                  </Link>
                </div>
                <div className="fw-normal fs-sm d-flex align-items-center">
                  ₺10.900,00
                  <del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>
                </div>
              </div>

              <div className="w-100 d-flex align-items-center justify-content-between">
                <div className="count-input rounded-2">
                  <button type="button" className="btn btn-icon btn-sm" data-decrement=""
                          aria-label="Decrement quantity">
                    <i className="ci-minus"></i>
                  </button>
                  <input type="number" className="form-control form-control-sm" value="1"/>
                  <button type="button" className="btn btn-icon btn-sm" data-increment=""
                          aria-label="Increment quantity">
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button type="button" className="btn-close fs-sm" data-bs-toggle="tooltip"
                        data-bs-custom-className="tooltip-sm" data-bs-title="Remove"
                        aria-label="Remove from cart"></button>
              </div>
            </div>
          </div>


        </div>
        {/* Footer */}
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Toplam:</span>
            <span className=" mb-0">₺10.900,00</span>
          </div>
          <div className="d-flex w-100 gap-3">
            {/* <Link  className="btn btn-lg btn-secondary w-100" href="/">
            <span data-bs-dismiss="offcanvas" aria-label="Close">

              İndirim Kodu Gir
            </span>
            </Link>*/}
            <Link className="btn rounded-pill btn-lg btn-dark w-100" href="/odeme">

            <span data-bs-dismiss="offcanvas" aria-label="Close">

              Sepeti Onayla
            </span>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}