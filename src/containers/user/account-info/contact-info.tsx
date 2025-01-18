export function ContactInfo() {

  return (
    <>
      <div className="border-bottom py-4">
        <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
          <div className="d-flex align-items-center gap-3 me-4">
            <h2 className="h6 mb-0">Contact</h2>
          </div>
          <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href=".contact-info"
             data-bs-toggle="collapse" aria-expanded="false"
             aria-controls="contactInfoPreview contactInfoEdit">Düzenle</a>
        </div>
        <div className="collapse contact-info show" id="contactInfoPreview">
          <ul className="list-unstyled fs-sm m-0">
            <li className="mb-1">yasin.koyumcu @email.com</li>
            <li>+90 (535) 348 95 72
              {/*<span className="text-success ms-1">Verified</span>*/}
            </li>
          </ul>
        </div>
        <div className="collapse contact-info" id="contactInfoEdit">
          <form className="row g-3 g-sm-4 needs-validation" noValidate>
            <div className="col-sm-6">
              <label htmlFor="email" className="form-label">E-posta</label>
              <div className="position-relative">
                <input type="email" className="form-control" id="email" value="yasin.koyumcu @email.com" required/>
                <div className="invalid-feedback">Lütfen geçerli bir e-posta giriniz!</div>
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="phone" className="form-label">Telefon numarası</label>
              <div className="position-relative">
                <input type="text" className="form-control" id="phone"
                       data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 (&quot;, &quot;)&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 2, 2]}"
                       placeholder="+90 (___) ___ __ __" value="+90 (535) 348 95 72" required/>
                <div className="invalid-feedback">Please enter your phone number!</div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex gap-3 pt-2 pt-sm-0">
                <button type="submit" className="btn btn-dark">Kaydet</button>
                <button type="button" className="btn btn-secondary" data-bs-toggle="collapse"
                        data-bs-target=".contact-info"
                        aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Vazgeç
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}