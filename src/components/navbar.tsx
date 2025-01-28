import Link from "next/link";
import Image from "next/image";
import { Cart } from "@/components/cart/cart";
import Logo from "../../public/fadime-aktas-logo.svg";

export async function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0"
              data-sticky-navbar="{&quot;offset&quot;: 500}">
        <NavbarContent/>
      </header>
    </>

  )
}

export function NavbarContent() {
  return (
    <>
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
        <Link style={{ margin: 0 }} className={"navbar-brand"} href={"/"}>
          <Image
            width={180}
            height={180}
            src={Logo}
            alt={"ddd"}
          />
        </Link>

        <div className="d-flex align-items-center">

          {/*   <button type="button" className="navbar-toggler d-none navbar-stuck-show me-3" data-bs-toggle="collapse"
                    data-bs-target="#stuckNav" aria-controls="stuckNav" aria-expanded="false"
                    aria-label="Toggle navigation in navbar stuck state">
              <span className="navbar-toggler-icon"></span>
            </button>*/}

          <Link
            className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-md-inline-flex"
            href="/hesap-bilgisi">
            <i style={{ fontSize: "24px" }} className="ci-user animate-target"></i>
            <span className="visually-hidden">hesap</span>
          </Link>
    {/*      <Link
            className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-pulse d-md-inline-flex"
            href="/favorilerim">
            <i style={{ fontSize: "24px" }} className="ci-heart animate-target"></i>
            <span className="visually-hidden">favorilerim</span>
          </Link>*/}
          <Link
            className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-pulse d-md-inline-flex"
            href="/sepetim">
            <i style={{ fontSize: "24px" }} className="ci-shopping-bag animate-target me-1"></i>
          </Link>

        </div>
      </div>
      <div className="collapse navbar-stuck-hide" id="stuckNav">
        <nav className="offcanvas offcanvas-start" id="navbarNav"
             tabIndex={-1}
             aria-labelledby="navbarNavLabel">
          <div className="offcanvas-header py-3">
            <h5 className="offcanvas-title" id="navbarNavLabel">arama</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

        </nav>
      </div>
    </>

  )
}