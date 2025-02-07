import Link from "next/link";
import { contactData } from "@/data/contact";

export function Contact() {
  return <>
    <h1 className="text-center pb-2 pb-sm-3 mt-lg-3 mt-xl-4">İletişime Geçin</h1>
    {/*
    <section className="pb-1 pb-sm-3 pb-md-4 pb-lg-5" style={{ "marginTop": "-110px", "paddingTop": "110px" }}>
      <div className="container py-5 mb-xxl-3">
        <div className="card border-0 shadow">

          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-8">
              <div className="tab-content bg-body rounded-5 py-3 py-sm-4 px-4 px-sm-5">
                <p className="text-center py-3 mx-auto" style={{}}>
                  Aşağıdaki formu doldurun size 24 saat içinde geri dönüş yapılacaktır. Ayrıca doğrudan bize
                  ulaşabilirsiniz{" "}
                  <a className="text-decoration-none" href="mailto:info@fadimekatas.com">info@fadimekatas.com</a>
                </p>

                <div className="tab-pane fade show active" id="customers" role="tabpanel"
                     aria-labelledby="customers-tab">
                  <form className="needs-validation" noValidate>
                    <div className="row g-4">
                      <div className="col-md-6 position-relative">
                        <label htmlFor="fn" className="form-label">İsim *</label>
                        <input type="text" className="form-control form-control-lg rounded-pill" id="fn"/>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">İsiminizi giriniz!</div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="ln" className="form-label">Soy isim *</label>
                        <input type="text" className="form-control form-control-lg rounded-pill" id="ln"/>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">Soy isiminizi giriniz!</div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="email" className="form-label">E-posta *</label>
                        <input type="email" className="form-control form-control-lg rounded-pill" id="email"/>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">E-posta giriniz!</div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Telefon numarası</label>
                        <input type="tel" className="form-control form-control-lg rounded-pill" id="phone"
                               data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}"
                               placeholder="5__ ___ __ __"/>
                      </div>
                      <div className="col-12 position-relative">
                        <label className="form-label">Konu *</label>
                        <select className="form-select form-select-lg rounded-pill" data-select="{
                          &quot;classNames&quot;: {
                            &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;form-select-lg&quot;, &quot;rounded-pill&quot;]
                          }
                        }" required>
                          <option value="">Konu Seçin</option>
                          <option value="Genel soru">Genel soru</option>
                          <option value="Sipariş durumu">Sipariş durumu</option>
                          <option value="Ürün bilgisi">Ürün bilgisi</option>
                          <option value="Teknik destek">Teknik destek</option>
                          <option value="Web sitesi geri bildirimi">Web sitesi geri bildirimi</option>
                          <option value="Hesap yardımı">Hesap yardımı</option>
                          <option value="Güvenlik endişeleri">Güvenlik endişeleri</option>
                        </select>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">Select the subject of your
                          message!
                        </div>
                      </div>
                      <div className="col-12 position-relative">
                        <label htmlFor="message" className="form-label">Mesaj *</label>
                        <textarea className="form-control form-control-lg rounded-6" id="message" rows={5}
                                  required></textarea>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">Mesaj Yazınız!</div>
                      </div>
                      <div className="col-12 text-center pt-2 pb-3">
                        <button type="submit" className="btn btn-lg btn-dark rounded-pill">Mesaj gönder</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
*/}

    <section className="container">
      <div className="card border-0 shadow">
        <div className="row row-cols-1 row-cols-sm-3 gy-4 gy-sm-0 pt-1 py-sm-2 py-md-3 py-lg-4 py-xl-5 ">
          <div className="col text-center mb-2 mb-sm-0">
            <i
              className="ci-phone-outgoing bg-dark text-white fs-4 rounded-circle p-3 mb-3 d-inline-flex d-none-dark"></i>
            <i
              className="ci-phone-outgoing bg-body-secondary text-white fs-4 rounded-circle p-3 mb-3 d-none d-inline-flex-dark"></i>
            <h3 className="text-body fs-sm fw-normal mb-2">Bizi arayın</h3>
            <div className="nav animate-underline justify-content-center">
              <a className="nav-link animate-target text-dark-emphasis fs-base p-0"
                 href={contactData.phone.href}>{contactData.phone.value}</a>
            </div>
          </div>
          <div className="col text-center mb-2 mb-sm-0">
            <i className="ci-mail bg-dark text-white fs-4 rounded-circle p-3 mb-3 d-inline-flex d-none-dark"></i>
            <i
              className="ci-mail bg-body-secondary text-white fs-4 rounded-circle p-3 mb-3 d-none d-inline-flex-dark"></i>
            <h3 className="text-body fs-sm fw-normal mb-2">Mesaj gönderin</h3>
            <div className="nav animate-underline justify-content-center">
              <a className="nav-link animate-target text-dark-emphasis fs-base p-0"
                 href="mailto:info@fadimekatas.com">info@fadimekatas.com</a>
            </div>
          </div>
          <div className="col text-center">
            <i className="ci-map-pin bg-dark text-white fs-4 rounded-circle p-3 mb-3 d-inline-flex d-none-dark"></i>

            <i
              className="ci-map-pin bg-body-secondary text-white fs-4 rounded-circle p-3 mb-3 d-none d-inline-flex-dark"></i>
            <h3 className="text-body fs-sm fw-normal mb-2">
              Fadime Aktaş Atölye
              Yenice Mh. Atatürk Bul. <br/> B Blok 48/A Alaşehir/Manisa</h3>
            <div className="nav animate-underline justify-content-center">
              <Link className="nav-link animate-target text-dark-emphasis fs-base p-0" href="#!">
                {/*Sıkça Sorulan Sorular*/}
                Adres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>
}