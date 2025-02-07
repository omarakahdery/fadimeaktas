import { InfoBody } from "@/components/info-body";

export default function PageSS() {
  return(
    <main className="content-wrapper">
      <h1 className="h3 container pb-3 pb-lg-4">
        Sınırlı Sorumluluk
      </h1>
      <main className="container content-wrapper">
        <InfoBody
          title={"1. Genel Hükümler"}
          body={"Bu web sitesi (Fadime Aktaş Fashion Tekstil San. ve Tic. A.Ş.) tarafından yönetilmektedir. Kullanıcılar, siteyi ziyaret ederek aşağıda belirtilen şartları kabul etmiş sayılır."}
        />
        <InfoBody
          title={"2. İçerik ve Bilgilendirme"}
          body={"Web sitemizde yer alan tüm içerikler bilgilendirme amaçlıdır. Ürün açıklamaları, fiyatlar ve stok durumu önceden haber verilmeksizin değiştirilebilir."}
        />
        <InfoBody
          title={"3. Ürün ve Hizmet Garantisi"}
          body={<>
          <ul>
            <li>Satılan ürünler, belirtilen özelliklere uygun olarak teslim edilir.</li>
            <li>Ürünlerin hatalı kullanımı, yanlış yıkama veya kullanma talimatlarına aykırı hareket edilmesi durumunda firmamız sorumlu tutulamaz.</li>
            </ul>
          </>}
        />
        <InfoBody
          title={"4. Web Sitesi Kullanımı"}
          body={<>
            <ul>
              <li>Kullanıcıların web sitesinde gerçekleştirdiği işlemlerden kendileri sorumludur.</li>
              <li>Üçüncü tarafların verdiği zararlar veya hukuka aykırı işlemler firmamızın sorumluluğunda değildir.</li>
            </ul>
          </>}
        />
        <InfoBody
          title={"5. Teknik Sorunlar ve Erişim"}
          body={<>
            <ul>
              <li>Web sitesinin kesintisiz çalışması için gerekli önlemler alınmıştır. Ancak teknik aksaklıklar veya sistem bakım süreçlerinden doğabilecek erişim sorunları firmamızın sorumluluğunda değildir.</li>
              <li>Kullanıcılar, web sitesini kullanırken herhangi bir zarara uğramaları durumunda firmamızdan tazminat talep edemez.</li>
            </ul>
          </>}
        />
        <InfoBody
          title={"6. Yasal Uyarı"}
          body={<>
            <ul>
              <li>Firmamız, web sitesi kullanımıyla ilgili olarak doğrudan veya dolaylı herhangi bir zarardan sorumlu tutulamaz.</li>
              <li>Kullanıcılar, Türkiye Cumhuriyeti yasalarına ve uluslararası ticaret kurallarına uygun hareket etmekle yükümlüdür.</li>
            </ul>
          </>}
        />
      </main>
    </main>
  )

}