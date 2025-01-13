import Image from "next/image";

export function NavOffcanvas(){
  return(
    <>

      <div className="offcanvas w-100 h-100 offcanvas-start" id="offcanvasLeft" tabIndex={-1}
           aria-labelledby="offcanvasLeftLabel">

        <div className="offcanvas-header">
{/*
          <h5 className="offcanvas-title" id="navbarOffcanvasLabel">Modeller</h5>
*/}
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body row pt-0">
          <div className={"col-lg-8"}>

          <p className={"fw-bold fs-sm ms-lg-4"}>
            Sezon
          </p>
          <ul className="navbar-nav ms-lg-4">
            <li className="nav-item ">
              <a style={{ marginBottom: "16px" }} className="fs-xl nav-link active" aria-current="page"
                 href="/collections">
                İlkbahar 2025
              </a>
            </li>
            <li className="nav-item">
              <a style={{ marginBottom: "16px" }} className="fs-xl nav-link" href="/collections">
                Yaz 2025
              </a>
            </li>

            <li className="nav-item">
              <a style={{ marginBottom: "16px" }} className="fs-xl nav-link" href="/collections">
                Bahar 2025
              </a>
            </li>

            <li className="nav-item">
              <a style={{ marginBottom: "16px" }} className="fs-xl nav-link" href="/collections">
                Kış 2025
              </a>
            </li>

            <li className="nav-item">
              <a style={{ marginBottom: "16px" }} className="fs-xl nav-link text-warning " href="/collections">
                İndirim
              </a>
            </li>
          </ul>

          <p className={"fw-bold mt-3 fs-sm ms-lg-4"}>
            Bilgi
          </p>
          <h6 className={"fw-bold ms-lg-4 text-body"}>
            0312 123 45 67
          </h6>
          <div className="ms-lg-4 d-flex justify-content-start justify-content-start mb-4 gap-4 mt-n2 mt-md-0">
            <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
               data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
               title="YouTube" aria-label="Follow us on YouTube">
              <i className="ci-youtube"></i>
            </a>
            <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
               data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
               title="Facebook" aria-label="Follow us on Facebook">
              <i className="ci-facebook"></i>
            </a>
            <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
               data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
               title="Instagram" aria-label="Follow us on Instagram">
              <i className="ci-instagram"></i>
            </a>
            <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
               data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
               title="Telegram" aria-label="Follow us on Telegram">
              <i className="ci-telegram"></i>
            </a>
            <a className="btn btn-icon fs-xl btn-outline-secondary border-0" href="#!" data-bs-toggle="tooltip"
               data-bs-template="<div className=&quot;tooltip fs-xs mb-n2&quot; role=&quot;tooltip&quot;><div className=&quot;tooltip-inner bg-transparent text-body p-0&quot;></div></div>"
               title="Pinterest" aria-label="Follow us on Pinterest">
              <i className="ci-pinterest"></i>
            </a>
          </div>
          </div>
          <div className={"col-lg-4 col-xl-3"}>
            <div className="ratio" style={{ "--cz-aspect-ratio": "calc(1000 / 700 * 100%)" } as React.CSSProperties}>
              <Image
                width={700}
                height={1000}
                src={"https://weddedwonderland.com/wp-content/uploads/2024/01/image-63.jpeg"}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}