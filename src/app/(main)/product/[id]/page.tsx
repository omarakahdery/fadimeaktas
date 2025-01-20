import { Suspense } from "react";
import Link from "next/link";
import { Product } from "@/containers/product";

export interface PageProps {
  params?: Promise<{ id: string; }>
  searchParams?: Promise<any>
}

export default async function ProductPage
({
   params,
 }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <>
      <main className="content-wrapper">
        <main className="content-wrapper">
          <section className="container pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
            <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
              <ol className="breadcrumb text-dark fs-xs">
                <li className="breadcrumb-item"><Link href="/gelinlik-frontend/public">Ana Sayfa</Link></li>
                <li className="breadcrumb-item"><Link href="/collections">Gelinlik</Link>
                </li>
                {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
              </ol>
            </nav>

            <section className="container">
              <div className="row">
                <Suspense fallback={
                  <div style={{height:"50vh"}} className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  </div>
                }>
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
