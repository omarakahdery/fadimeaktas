export function PersonalInfo() {

  return (
    <div className="border-bottom py-4">
      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
        <h2 className="h6 mb-0">Kişisel bilgiler</h2>
        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href=".basic-info"
           data-bs-toggle="collapse" aria-expanded="false" aria-controls="basicInfoPreview basicInfoEdit">Düzenle</a>
      </div>
      <div className="collapse basic-info show" id="basicInfoPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>Yasin Koyumcu</li>
          <li>Aralık 12, 1991</li>
          <li className="mb-1">yasin.koyumcu @email.com</li>
          <li>+90 (535) 348 95 72</li>
        </ul>
      </div>
      <div className="collapse basic-info" id="basicInfoEdit">
        <form className="row g-3 g-sm-4 needs-validation" noValidate>
          <div className="col-sm-6">
            <label htmlFor="fn" className="form-label">Ad</label>
            <div className="position-relative">
              <input type="text" className="form-control" id="fn" value="Yasin" required/>
              <div className="invalid-feedback">Lütfen adınız giriniz!</div>
            </div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="ln" className="form-label">Soyad</label>
            <div className="position-relative">
              <input type="text" className="form-control" id="ln" value="Koyumcu" required/>
              <div className="invalid-feedback">Lütfen soy adınız giriniz!</div>
            </div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="birthdate" className="form-label">Doğum tarihi</label>
            <div className="position-relative">
              <input type="text" className="form-control form-icon-end" id="birthdate" data-datepicker="{
                          &quot;dateFormat&quot;: &quot;F j, Y&quot;,
                          &quot;defaultDate&quot;: &quot;May 15, 1996&quot;
                        }" placeholder="Choose date"/>
              <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
          </div>
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
              <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".basic-info"
                      aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Vazgeç
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}