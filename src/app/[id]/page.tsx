import { Product } from "@/containers/product";
import { Suspense } from "react";
import Link from "next/link";

type Props = {
  params: { id: string }
}

export default async function ProductPage({ params: { id } }: Props) {

  return (
    <>
      <main className="content-wrapper">
        {/*   <pre>
        {JSON.stringify(product, null, 2)}
        </pre>*/}
        <main className="content-wrapper">
          <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">

            <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
              <ol className="breadcrumb text-dark fs-xs">
                <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
                <li className="breadcrumb-item"><Link href="/collections">Gelinlik</Link>
                </li>
                {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
              </ol>
            </nav>

            <section className="container">
              <div className="row">
                <Suspense fallback={<p>Yükleniyor...</p>}>
                  <Product id={id}/>
                </Suspense>
              </div>
            </section>
          </section>
        </main>
      </main>
    </>
  );
}
