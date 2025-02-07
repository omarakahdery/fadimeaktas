import Script from 'next/script'
import Link from "next/link";
import { contactData } from "@/data/contact";

export const Footer = ({ categories }: { categories?: ICategory[] }) => {
  return (

    <footer className="footer pt-5 pb-4">
      <div className="container pt-sm-2 pt-md-3 pt-lg-4">
        <div className="d-flex justify-content-center justify-content-start mb-5 gap-4 mt-md-0">
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

        <div className="row pb-5 mb-lg-3">

          <div className="col-md-8 col-xl-7 pb-2 pb-md-0 mb-4 mb-md-0 mt-n3 mt-sm-0">
            <div className="accordion" id="footerLinks">
              <div className="row row-cols-1 row-cols-sm-3">

                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="categoriesHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Sezon</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none"
                            data-bs-toggle="collapse" data-bs-target="#categoriesLinks" aria-expanded="false"
                            aria-controls="categoriesLinks">Categories
                    </button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="categoriesLinks"
                       aria-labelledby="categoriesHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      {categories?.map((category) => (
                        <li className="d-flex w-100 pt-1">
                          <Link
                            className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            href={`/${category.slug}/${category.id}`}>{category.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0"/>
                </div>
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="accountHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Bilgi</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none"
                            data-bs-toggle="collapse" data-bs-target="#accountLinks" aria-expanded="false"
                            aria-controls="accountLinks">Account
                    </button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="accountLinks"
                       aria-labelledby="accountHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="/iletisim">İletişim</Link>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="/satis-sozlesmesi">Satış sözleşmesi </Link>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="/iade-degisim">İade ve değişim</Link>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="#!">Sipariş takibi</a>
                      </li>
                    </ul>
                  </div>
                  <hr className="d-sm-none my-0"/>
                </div>
                <div className="accordion-item col border-0">
                  <h6 className="accordion-header" id="customerHeading">
                    <span className="text-dark-emphasis d-none d-sm-block">Müşteri İlişkileri</span>
                    <button type="button" className="accordion-button collapsed py-3 d-sm-none"
                            data-bs-toggle="collapse" data-bs-target="#customerLinks" aria-expanded="false"
                            aria-controls="customerLinks">Customer service
                    </button>
                  </h6>
                  <div className="accordion-collapse collapse d-sm-block" id="customerLinks"
                       aria-labelledby="customerHeading" data-bs-parent="#footerLinks">
                    <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="#!">Çerez politikası
                        </a>
                      </li>
                    {/*  <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="#!">Aydınlatma metni
                        </Link>
                      </li>*/}
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="/sinirli-sorumluluk">Sınırlı sorumluluk
                        </Link>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="/gizlilik-politikasi">Gizlilik politikası</Link>
                      </li>

                    </ul>
                  </div>
                  <hr className="d-sm-none my-0"/>
                </div>

              </div>

            </div>

          </div>
          <div className="col-md-4 offset-xl-1">
            {/*<h6 className="mb-4">İletişim</h6>*/}

            {/*------*/}
            <div className="col text-center mb-2 mb-sm-0">
              <i
                className="ci-phone-outgoing bg-dark text-white fs-4 rounded-circle p-3 mb-3 d-inline-flex d-none-dark"></i>
              <h3 className="text-body fs-xs fw-normal mb-2">Bizi arayın</h3>
              <div className="nav animate-underline justify-content-center">
                <a className="nav-link animate-target text-dark-emphasis fs-sm p-0"
                   href={contactData.phone.href}>{contactData.phone.value}</a>
              </div>
            </div>
            {/*------*/}
          </div>

        </div>

      </div>
    </footer>
  )
}