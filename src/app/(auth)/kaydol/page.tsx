import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/fadime-aktas-logo.svg";

export default async function Signup() {
  return (
    <>

      <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>

        <div className="d-lg-flex">

          <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ "maxWidth": "416px" }}>

            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <Link className={"navbar-brand"} href={"/"}>
                <Image
                  width={180}
                  height={180}
                  src={Logo}
                  alt={"ddd"}
                />
              </Link>
            </header>

            <h1 className="h2 mt-auto">Hesap Oluştur</h1>
            <div className="nav fs-sm mb-3 mb-lg-4">
              Zaten hesabım var
              <Link className="nav-link text-decoration-underline p-0 ms-2" href="/giris-yap">Giriş Yap</Link>
            </div>
            {/*Form*/}
            <form className="needs-validation" noValidate>
              <div className="position-relative mb-4">
                <label htmlFor="register-email" className="form-label">E-posta</label>
                <input type="email" className="form-control form-control-lg" id="register-email" required/>
                <div className="invalid-tooltip bg-transparent py-0">Geçerli bir e-posta adresi girin!</div>
              </div>
              <div className="mb-4">
                <label htmlFor="register-password" className="form-label">Şifre</label>
                <div className="password-toggle">
                  <input type="password" className="form-control form-control-lg" id="register-password" minLength={8}
                         placeholder="Minimum 8 karakter" required/>
                  <div className="invalid-tooltip bg-transparent py-0">Şifre gerekli kriterleri karşılamıyor!
                  </div>
                  <label className="password-toggle-button fs-lg" aria-label="Show/hide password">
                    <input type="checkbox" className="btn-check"/>
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="privacy" required/>
                  <label htmlFor="privacy" className="form-check-label">
                    <Link className="text-dark-emphasis" href="/">Gizlilik Politikası </Link>
                    {" "}okudum ve kabul ediyorum
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-dark w-100">
                Hesap Oluştur
                <i className="ci-chevron-right fs-lg ms-1 me-n1"></i>
              </button>
            </form>

            <footer className="mt-auto">

            </footer>
          </div>


          <div className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto" id="benefits"
               style={{ "maxWidth": "1034px" }}>

            <div
              className="offcanvas-body position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
              <div style={{ background: "#b3b6b7" }}
                   className="position-absolute rounded-5  top-0 start-0 w-100 h-100 d-none d-lg-block">

              </div>
              <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">

              </div>
            </div>

          </div>
        </div>

      </main>

    </>

  )
}