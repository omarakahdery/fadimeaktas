export default function AddressUnit({ collapseName, title }: { collapseName: string, title: string }) {
  return <>
    <div className="border-bottom py-4">
      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
        <div className="d-flex align-items-center gap-3 me-4">
          <h2 className="h6 mb-0">{title}</h2>
        </div>
        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href={"." + collapseName}
           data-bs-toggle="collapse" aria-expanded="false"
           aria-controls="primaryAddressPreview primaryAddressEdit">Düzenle</a>
      </div>
      <div className={"collapse show " + collapseName} id="primaryAddressPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>
            İstanbul, Sarıyer
          </li>
          <li>
            Maslak Mahallesi Saat Sokak Spine Tower No:5 İç Kapı No:19
          </li>
        </ul>
      </div>

      <div className={"collapse " + collapseName} id="primaryAddressEdit">
        <form className="row g-3 g-sm-4 needs-validation" noValidate>
          <div className="col-sm-12">
            <div className="position-relative">
              <label htmlFor="psa-zip" className="form-label">Adres Başlığı</label>
              <input type="text" className="form-control" id="psa-zip" value="" required/>
              <div className="invalid-feedback">Adress başlığı giriniz!</div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="position-relative">
              <label className="form-label">İl</label>
              <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}"
                      aria-label="Select country" required>
                <option value="">Seç...</option>
                <option value="1">İstanbul</option>
                <option value="2">Ankara</option>
                <option value="3">İzmir</option>
                <option value="4">Manisa</option>
              </select>
              <div className="invalid-feedback">Lütfen bir il seçin!</div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="position-relative">
              <label className="form-label">İlçe</label>
              <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}"
                      aria-label="Select country" required>
                <option value="">Seç...</option>
                <option value="1">Kadıyöy</option>
                <option value="2">Fatih</option>
                <option value="3">Şişli</option>
                <option value="4">Büyük çekmece</option>
              </select>
              <div className="invalid-feedback">Lütfen bir ilçe seçin!</div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="position-relative">
              <label htmlFor="psa-address" className="form-label">Açık Adres</label>
              <textarea className="form-control" id="psa-address" value=""
                        required/>
              <div className="invalid-feedback">Açık adres girin!</div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex gap-3 pt-2 pt-sm-0">
              <button type="submit" className="btn btn-dark">Kaydet</button>
              <button type="button" className="btn btn-secondary" data-bs-toggle="collapse"
                      data-bs-target={"." + collapseName} aria-expanded="true"
                      aria-controls="primaryAddressPreview primaryAddressEdit">Vazgeç
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}