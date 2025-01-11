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
            <h4 className="offcanvas-title" id="shoppingCartLabel">Sepetim (1 Ürün)
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
                src="https://alissenuera.com/cdn/shop/files/Alisse-nuerA-Straplez-Kabarik-Prenses-Etek-Kirik-Beyaz-Dantelli-Gelinlik-Modeli-Front-Detail.jpg"
                className="bg-body-tertiary rounded"
                width={110}
                height={110}
                alt="Thumbnail"
              />
            </Link>
            <div className="w-100 min-w-0 ps-3">
              <h5 className="d-flex animate-underline mb-2">
                <Link className="d-block fs-sm fw-medium text-truncate animate-target" href="/">
                  Straplez Kabarık Prenses Etek Kırık Beyaz Dantelli Gelinlik Modeli
                </Link>
              </h5>
              <div className="h6 pb-1 mb-2">₺10.900,00</div>
              <div className="d-flex align-items-center justify-content-between">
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
        {/*Footer */}
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Toplam:</span>
            <span className="h6 mb-0">₺10.900,00</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <Link className="btn btn-lg btn-secondary w-100" href="#">İndirim Kodu Gir</Link>
            <Link className="btn btn-lg btn-dark w-100" href="#">Sepeti Onayla</Link>
          </div>
        </div>
      </div>

    </>
  )
}