import Link from "next/link";
import Image from "next/image";
import { Cart } from "@/components/cart";
import Logo from "../../public/fadime-aktas-logo.svg";

export function Navbar() {
  return (
    <>
      <Cart/>
      <header className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0"
              data-sticky-navbar="{&quot;offset&quot;: 500}">

        <div className="container-fluid py-2 py-lg-3">
          <div className="d-flex align-items-center gap-3">
            {/*--------*/}
            <button
              type="button"
              className="btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasLeft"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span style={{ fontSize: "24px" }} className="navbar-toggler-icon"></span>
            </button>
            {/*--------*/}
          </div>
          <Link className={"navbar-brand"} href={"/"}>

            <h3 style={{ letterSpacing: "0.075em" }} className="fs-2 fw-light py-0 m-0 me-auto me-sm-n5">
              <Image
                width={150}
                height={150}
                src={Logo}
                alt={"ddd"}
              />
            </h3>
          </Link>

          <div className="d-flex align-items-center">

            {/*   <button type="button" className="navbar-toggler d-none navbar-stuck-show me-3" data-bs-toggle="collapse"
                    data-bs-target="#stuckNav" aria-controls="stuckNav" aria-expanded="false"
                    aria-label="Toggle navigation in navbar stuck state">
              <span className="navbar-toggler-icon"></span>
            </button>*/}

            <Link
              className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
              href="/">
              <i style={{ fontSize: "24px" }} className="ci-user animate-target"></i>
              <span className="visually-hidden">Account</span>
            </Link>

            <Link
              className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
              href="#">
              <i style={{ fontSize: "24px" }} className="ci-heart animate-target"></i>
              <span className="visually-hidden">Wishlist</span>
            </Link>

            <button type="button"
                    className="btn btn-icon btn-lg fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
                    data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"
                    aria-label="Shopping cart">
            <span className="position-absolute top-0 start-100 badge fs-xs text-bg-dark rounded-pill mt-1 ms-n4 z-2"
              /*
                                style="--cz-badge-padding-y: .25em; --cz-badge-padding-x: .42em"
              */
            >3</span>
              <i style={{ fontSize: "24px" }} className="ci-shopping-bag animate-target me-1"></i>
            </button>
          </div>
        </div>

        <div className="collapse navbar-stuck-hide" id="stuckNav">
          <nav className="offcanvas offcanvas-start" id="navbarNav"
               tabIndex={-1}
               aria-labelledby="navbarNavLabel">
            <div className="offcanvas-header py-3">
              <h5 className="offcanvas-title" id="navbarNavLabel">Browse Cartzilla</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

          </nav>
        </div>
      </header>
    </>

  )
}