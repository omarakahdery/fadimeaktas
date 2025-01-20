import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getData } from "@/lib/api/api-fun";
import { RemoveOverflow } from "@/components/remove-overflow";
import Link from "next/link";


export default async function UserLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getData<ICategory[]>(`/products/categories`);
  return (
    <main className="page-wrapper">
      <RemoveOverflow/>
      <Navbar/>
      <div className="container py-5 mt-n2 mt-sm-0">
        <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
          <aside className="col-lg-3">

            <div className="offcanvas-lg offcanvas-start pe-lg-0 pe-xl-4" id="accountSidebar">
              <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
                <nav className="list-group list-group-borderless">
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/sipatislerim">
                    <i className="ci-shopping-bag fs-base opacity-75 me-2"></i>
                    Siparişlerim
                  </Link>
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/favorilerim">
                    <i className="ci-heart fs-base opacity-75 me-2"></i>
                    Favorilerim
                  </Link>
                </nav>
                <h6 className="pt-4 ps-2 ms-1">Hesap</h6>
                <nav className="list-group list-group-borderless">
                  {/*pe-none active*/}
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/hesap-bilgisi">
                    <i className="ci-user fs-base opacity-75 me-2"></i>
                    Hesap bilgileri
                  </Link>
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/adreslerim">
                    <i className="ci-map-pin fs-base opacity-75 me-2"></i>
                    Adreslerim
                  </Link>
                </nav>
                <h6 className="pt-4 ps-2 ms-1">Müşteri Hizmetleri</h6>
                <nav className="list-group list-group-borderless">
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/iletisim">
                    <i className="ci-mail fs-base opacity-75 me-2"></i>
                    İletişim
                  </Link>
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                        href="/sss">
                    <i className="ci-help-circle fs-base opacity-75 me-2"></i>
                    SSS
                  </Link>
                </nav>
                <nav className="list-group list-group-borderless pt-3">
                  <Link className="list-group-item list-group-item-action d-flex align-items-center"
                     href="/">
                    <i className="ci-log-out fs-base opacity-75 me-2"></i>
                    Çıkış yap
                  </Link>
                </nav>
              </div>
            </div>
          </aside>
          <div className="col-lg-9">
            <div className="ps-lg-3 ps-xl-0">
              {children}
            </div>
          </div>
        </div>
      </div>

      <Footer categories={categories}/>
    </main>
  );
}
