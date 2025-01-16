import Image from "next/image";
import img from "../../public/image-63.webp";
import { getData } from "@/lib/api/api-fun";
import Link from "next/link";

export async function NavOffCanvas({ categories }: { categories?: ICategory[] }) {

  return (
    <>
      <div
        className="offcanvas w-100 h-100 offcanvas-start"
        id="offcanvasLeft"
        tabIndex={-1}
        aria-labelledby="offcanvasLeftLabel"
      >

        <div className="offcanvas-header">
          {/*<h5 className="offcanvas-title" id="navbarOffcanvasLabel">Modeller</h5>*/}
          <button type="button" className="btn-close fs-xl" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body row pt-0 h-100">
          <div className={"col-lg-8"}>

            <p className={"fw-bold text-dark fs-sm "}>
              Sezon
            </p>
            <ul className="navbar-nav ">
              {categories?.map((category) => {
                return <li className="nav-item ">
                  <Link style={{ marginBottom: "16px" }} className="fs-xl fw-normal nav-link" aria-current="page"
                        href="/collections">
                    <span data-bs-dismiss="offcanvas" aria-label="Close">

                    {category.name}
                    </span>
                  </Link>
                </li>
              })}

              {/*    <li className="nav-item ">
                <a style={{ marginBottom: "16px" }} className="fs-xl fw-normal nav-link" aria-current="page"
                   href="/collections">
                  İlkbahar 2025
                </a>
              </li>
              <li className="nav-item">
                <a style={{ marginBottom: "16px" }} className="fs-xl fw-normal nav-link" href="/collections">
                  Yaz 2025
                </a>
              </li>

              <li className="nav-item">
                <a style={{ marginBottom: "16px" }} className="fs-xl fw-normal nav-link" href="/collections">
                  Sonbahar 2025
                </a>
              </li>

              <li className="nav-item">
                <a style={{ marginBottom: "16px" }} className="fs-xl fw-normal nav-link" href="/collections">
                  Kış 2025
                </a>
              </li>
*/}
              <li className="nav-item">
                <a style={{ marginBottom: "16px", color: "#ff6700" }} className="fs-xl fw-normal nav-link "
                   href="/collections">
                  İndirim
                </a>
              </li>
            </ul>

            <p className={"fw-bold mt-3 text-dark fs-sm "}>
              Bilgi
            </p>
            <h6 style={{ fontSize: "24px" }} className={"fw-bold text-body"}>
              0312 400 14 14
            </h6>
            <div className=" d-flex justify-content-start justify-content-start mb-4 gap-4 mt-n2 mt-md-0">
              <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
                 data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
                 title="YouTube" aria-label="Follow us on YouTube">
                <i style={{ fontSize: "24px" }} className="ci-youtube"></i>
              </a>
              <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
                 data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
                 title="Facebook" aria-label="Follow us on Facebook">
                <i style={{ fontSize: "24px" }} className="ci-facebook"></i>
              </a>
              <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
                 data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
                 title="Instagram" aria-label="Follow us on Instagram">
                <i style={{ fontSize: "24px" }} className="ci-instagram"></i>
              </a>
              <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
                 data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
                 title="Telegram" aria-label="Follow us on Telegram">
                <i style={{ fontSize: "24px" }} className="ci-telegram"></i>
              </a>
              <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
                 data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
                 title="Pinterest" aria-label="Follow us on Pinterest">
                <i style={{ fontSize: "24px" }} className="ci-pinterest"></i>
              </a>
            </div>
          </div>
          <div className={"col-lg-6 col-xl-4"}>
            <div className={"w-100"}>
              <Image
                className={"w-100"}
                src={img}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}