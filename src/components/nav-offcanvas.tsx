export function NavOffcanvas(){
  return(
    <>

      <div className="offcanvas offcanvas-start" id="offcanvasLeft" tabIndex={-1}
           aria-labelledby="offcanvasLeftLabel">

        <div className="offcanvas-header">
{/*
          <h5 className="offcanvas-title" id="navbarOffcanvasLabel">Modeller</h5>
*/}
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body  pt-0">
          <ul className="navbar-nav  ms-lg-4">
            <li  className="nav-item ">
              <a style={{fontSize:"24px" ,marginBottom:"16px" }} className="nav-link active" aria-current="page" href="/collections">
                Prenses Modelleri
              </a>
            </li>
            <li  className="nav-item">
              <a style={{fontSize:"24px" ,marginBottom:"16px" }} className="nav-link" href="/collections">
                A Kesim Modelleri
              </a>
            </li>

            <li  className="nav-item">
              <a style={{fontSize:"24px" ,marginBottom:"16px" }} className="nav-link" href="/collections">
                Helen Modelleri
              </a>
            </li>
            <li  className="nav-item">
              <a style={{fontSize:"24px" ,marginBottom:"16px" }} className="nav-link" href="/collections">
                Balık Modelleri
              </a>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}