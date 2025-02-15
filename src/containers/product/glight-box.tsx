export const LightBox = ()=>{
  return <>
    <div id="glightbox-body" className="glightbox-container glightbox-clean">
      <div className="gloader visible" style={{ display: "none" }}></div>
      <div className="goverlay"></div>
      <div className="gcontainer">
        <div id="glightbox-slider" className="gslider">
          <div className="gslide loaded current dragging-nav">
            <div className="gslide-inner-content">
              <div className="ginner-container" style={{ transform: "translate3d(0px, 48px, 0px)" }}>
                <div className="gslide-media gslide-image"><img
                  src="https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/01.png" alt=""
                  className="zoomable dragging"/>
                </div>

              </div>
            </div>
          </div>
          <div className="gslide loaded">
            <div className="gslide-inner-content">
              <div className="ginner-container">
                <div className="gslide-media gslide-image"><img
                  src="https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/02.png" alt=""/>
                </div>

              </div>
            </div>
          </div>
          <div className="gslide">
            <div className="gslide-inner-content">
              <div className="ginner-container">
                <div className="gslide-media">
                </div>
                <div className="gslide-description">
                  <div className="gdesc-inner">
                    <h4 className="gslide-title"></h4>
                    <div className="gslide-desc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gslide">
            <div className="gslide-inner-content">
              <div className="ginner-container">
                <div className="gslide-media">
                </div>
                <div className="gslide-description">
                  <div className="gdesc-inner">
                    <h4 className="gslide-title"></h4>
                    <div className="gslide-desc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gslide">
            <div className="gslide-inner-content">
              <div className="ginner-container">
                <div className="gslide-media">
                </div>
                <div className="gslide-description">
                  <div className="gdesc-inner">
                    <h4 className="gslide-title"></h4>
                    <div className="gslide-desc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="gnext gbtn btn btn-icon btn-outline-secondary animate-slide-end bg-body rounded-circle end-0 me-2 me-sm-3 me-lg-4 ms-0"
          style={{ top: "45%; right: auto; left: auto" }} tabIndex={0} aria-label="Next">
        <span className="animate-target">
          <svg className="rtl-flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
            d="M9.4 5.6c.3-.3.9-.3 1.2 0l6 6c.3.3.3.9 0 1.2l-6 6c-.3.3-.9.3-1.2 0-.4-.3-.4-.8 0-1.2l5.4-5.4-5.4-5.3C9 6.5 9 6 9.4 5.6"></path></svg>
        </span>
        </button>
        <button
          className="gprev gbtn btn btn-icon btn-outline-secondary animate-slide-start bg-body rounded-circle start-0 ms-2 ms-sm-3 ms-lg-4 me-0 disabled"
          style={{ top: "45%", right: "auto", left: "auto" }} tabIndex={1} aria-label="Previous">
        <span className="animate-target">
        <svg className="rtl-flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
          d="M14.6 5.6c.4.4.4.9 0 1.3l-5.4 5.4 5.4 5.4c.3.3.3.9 0 1.2s-.9.3-1.2 0l-6-6c-.4-.4-.4-.9 0-1.3l6-6c.3-.3.9-.3 1.2 0"></path></svg>
        </span>
        </button>
        <button
          className="gclose gbtn btn btn-icon btn-outline-secondary bg-body rounded-circle top-0 end-0 mt-2 me-2 mt-md-3 me-md-3"
          style={{ "right": "auto", left: "auto" }} tabIndex={0} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.6 17.4c.3.3.3.9 0 1.2s-.9.3-1.2 0L12 13.2l-5.4 5.4c-.3.3-.9.3-1.2 0s-.3-.9 0-1.2l5.4-5.4-5.4-5.4c-.4-.3-.4-.9 0-1.2.3-.4.9-.4 1.2 0l5.4 5.4 5.4-5.4c.3-.3.9-.3 1.2 0s.3.9 0 1.2L13.2 12z"></path>
          </svg>
        </button>
      </div>
    </div>
  </>
}