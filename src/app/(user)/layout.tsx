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
                <h6 className="pt-4 ps-2 ms-1">Hesabı yönet</h6>
                <nav className="list-group list-group-borderless">
                  <Link className="list-group-item list-group-item-action d-flex align-items-center pe-none active"
                     href="/hesap-bilgisi">
                    <i className="ci-user fs-base opacity-75 me-2"></i>
                    Hesap bilgileri
                  </Link>
                  <a className="list-group-item list-group-item-action d-flex align-items-center"
                     href="account-addresses.html">
                    <i className="ci-map-pin fs-base opacity-75 me-2"></i>
                    Addresses
                  </a>
                  <a className="list-group-item list-group-item-action d-flex align-items-center"
                     href="account-notifications.html">
                    <i className="ci-bell fs-base opacity-75 mt-1 me-2"></i>
                    Notifications
                  </a>
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
