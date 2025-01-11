import Image from "next/image";
import one from "../../assets/img/home/fashion/v2/categories/01.png";
import tow from "../../assets/img/home/fashion/v2/categories/02.png";
import three from "../../assets/img/home/fashion/v2/categories/03.png";
import Link from "next/link";


export function Category() {
  return (
    <>
      <section className="container pt-4">
        <div
          className="swiper"
             data-swiper="{
          &quot;slidesPerView&quot;: 1,
          &quot;spaceBetween&quot;: 24,
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.swiper-pagination&quot;,
            &quot;clickable&quot;: true
          },
          &quot;breakpoints&quot;: {
            &quot;680&quot;: {
              &quot;slidesPerView&quot;: 2
            },
            &quot;992&quot;: {
              &quot;slidesPerView&quot;: 3
            }
          }
        }">
          <div
            style={{ flexDirection: "row", display: "flex", gap: "24px", minWidth : "100%" }}
            className="swiper-wrapper  flex-row">
            <div className="swiper-slide">
              <div className="hover-effect-opacity position-relative">
                <div className="d-flex justify-content-between position-relative z-2 ps-2 ps-xl-3">
                  <div className="d-flex flex-column min-w-0 p-3">
                    <h2 className="h5 text-nowrap pt-2 pt-xl-3">For men</h2>
                    <ul className="nav flex-column gap-2 mt-n1">
                      <li className="d-flex w-100 pt-1">
                        <Link className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="#">Sports suits</Link>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="#">Trousers</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Jackets and coats</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Shirts</a>
                      </li>
                    </ul>
                    <div className="nav hover-effect-target opacity-0 pb-2 pb-xl-3 mt-auto">
                      <a className="nav-link animate-underline text-body-emphasis text-nowrap p-0"
                         href="shop-catalog-fashion.html">
                        <span className="animate-target">Shop now</span>
                        <i className="ci-arrow-up-right fs-base ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="ratio w-100 align-self-end"
                       style={{ "maxWidth": "220px; --cz-aspect-ratio: calc(305 / 220 * 100%)" }}>
                    <Image src={one} alt="Image"/>
                  </div>
                </div>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                      style={{ "background": "linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)" }}></span>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                      style={{ "background": "linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)" }}></span>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="hover-effect-opacity position-relative">
                <div className="d-flex justify-content-between position-relative z-2 ps-2 ps-xl-3">
                  <div className="d-flex flex-column min-w-0 p-3">
                    <h2 className="h5 text-nowrap pt-2 pt-xl-3">For women</h2>
                    <ul className="nav flex-column gap-2 mt-n1">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Dresses</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Pants and jeans</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Shirts and blouses</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Sweatshirts</a>
                      </li>
                    </ul>
                    <div className="nav hover-effect-target opacity-0 pb-2 pb-xl-3 mt-auto">
                      <a className="nav-link animate-underline text-body-emphasis text-nowrap p-0"
                         href="shop-catalog-fashion.html">
                        <span className="animate-target">Shop now</span>
                        <i className="ci-arrow-up-right fs-base ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="ratio w-100 align-self-end rtl-flip"
                       style={{ "maxWidth": "220px; --cz-aspect-ratio: calc(305 / 220 * 100%)" }}>
                    <Image src={tow} alt="Image"/>
                  </div>
                </div>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                      style={{ "background": "linear-gradient(119deg, #e9e0eb 0%, #f8eff1 52.24%)" }}></span>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                      style={{ "background": "linear-gradient(119deg, #2f2c3a 0%, #372e2f 52.24%)" }}></span>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="hover-effect-opacity position-relative">
                <div className="d-flex justify-content-between position-relative z-2 ps-2 ps-xl-3">
                  <div className="d-flex flex-column min-w-0 p-3">
                    <h2 className="h5 text-nowrap pt-2 pt-xl-3">Accessories</h2>
                    <ul className="nav flex-column gap-2 mt-n1">
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Caps and hats</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Sunglasses</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Handbags</a>
                      </li>
                      <li className="d-flex w-100 pt-1">
                        <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                           href="shop-catalog-fashion.html">Jewelry</a>
                      </li>
                    </ul>
                    <div className="nav hover-effect-target opacity-0 pb-2 pb-xl-3 mt-auto">
                      <a className="nav-link animate-underline text-body-emphasis text-nowrap p-0"
                         href="shop-catalog-fashion.html">
                        <span className="animate-target">Shop now</span>
                        <i className="ci-arrow-up-right fs-base ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="ratio w-100 align-self-end rtl-flip"
                       style={{ "maxWidth": "220px; --cz-aspect-ratio: calc(305 / 220 * 100%)" }}>
                    <Image src={three} alt="Image"/>
                  </div>
                </div>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                      style={{ "background": "linear-gradient(118deg, #e9e8e8 0%, #e2ecea 51.13%)" }}></span>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                      style={{ "background": "linear-gradient(118deg, #323232 0%, #252928 51.13%)" }}></span>
              </div>
            </div>
          </div>

          <div className="swiper-pagination position-static mt-3 mt-sm-4"></div>
        </div>
      </section>

    </>)
}