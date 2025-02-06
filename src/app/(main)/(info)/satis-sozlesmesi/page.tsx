import { InfoBody } from "@/components/info-body";

export default function Page() {
  return <>
    <main className="content-wrapper">
      <h1 className="h3 container pb-3 pb-lg-4">
        Satış Sözleşmesi
      </h1>
      <main className="container content-wrapper">
        <InfoBody
          title={"MADDE 1 - TARAFLAR"}
          body={"İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), aşağıda bilgileri yer alan satıcı (“Satıcı”) ile aşağıdaki şartları kabul eden alıcı (“Alıcı”) arasında, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında elektronik ortamda kurulmuştur."}
        />

        <InfoBody
          title={"Satıcı Bilgileri:"}
          body={
            <ul>
              <li>
                Ticaret Unvanı: Fadime Aktaş Fashion Tekstil San. ve Tic. A.Ş.
              </li>
              <li>
                Telefon: 0 535 709 17 20
              </li>
              <li>
                Vergi Numarası: 11111111111
              </li>
              <li>
                Adres: Akdeniz Mh., Halit Ziya Bulvarı, No:27, Katipoğlu İşhanı, Kat:6, 35210 Konak
              </li>
            </ul>
          }
        />
        <InfoBody
          title={"MADDE 2 - KONU"}
          body={
            <p>
              İşbu Sözleşme, Alıcı’nın Satıcı’ya ait
              <br/>
              www.fadimeaktas.com (“Web Sitesi”) üzerinden siparişini verdiği aşağıda nitelikleri belirtilen ürünün
              satışı
              ve teslimi ile ilgili olarak tarafların hak ve yükümlülüklerini düzenler.
            </p>
          }
        />

        <InfoBody
          title={"MADDE 3 - ÜRÜN BİLGİLERİ"}
          body={"Ürünün cinsi, miktarı, marka/modeli, satış bedeli, ödeme şekli ve teslimat bilgileri sipariş aşamasında belirtilmiştir."}
        />

        <InfoBody
          title={"MADDE 4 - TESLİMAT ŞARTLARIİ"}
          body={"Satıcı, siparişi en geç 5 iş günü içinde MNG Kargo aracılığıyla Alıcı’nın bildirdiği adrese gönderir. Kargo sürecinde yaşanabilecek gecikmelerden kargo firması sorumludur."}
        />
        <InfoBody
          title={" MADDE 5 - İADE VE CAYMA HAKKI"}
          body={<>
            <p>
              Satıcı, siparişi en geç 5 iş günü içinde MNG Kargo aracılığıyla Alıcı’nın bildirdiği adrese gönderir.
              Kargo sürecinde yaşanabilecek gecikmelerden kargo firması sorumludur.
            </p>
            <ul>
              <li>
                Alıcı, 6502 sayılı Kanun kapsamında, siparişi teslim aldıktan sonra 14 gün içinde hiçbir gerekçe
                göstermeksizin cayma hakkını kullanabilir.
              </li>
              <li>
                Ancak, kişiye özel dikim yapılan ürünlerde cayma hakkı kullanılamaz.
              </li>
              <li>
                Cayma hakkının kullanılması durumunda, kargo ücreti Alıcı’ya aittir.
              </li>
              <li>
                Cayma hakkı için Alıcı, Satıcı ile iletişime geçerek iade sürecini başlatmalıdır.
              </li>
            </ul>
          </>}
        />
        <InfoBody
          title={"MADDE 6 - UYGULANACAK HUKUK VE YETKİLİ MAHKEME"}
          body={"İşbu Sözleşme Türkiye Cumhuriyeti yasalarına tabidir. Alıcı, uyuşmazlıklarda İzmir Tüketici Hakem Heyetleri ve Mahkemelerinin yetkili olduğunu kabul eder."}
        />
      </main>
    </main>
  </>
}