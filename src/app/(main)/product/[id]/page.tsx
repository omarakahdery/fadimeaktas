import { Suspense } from "react";
import { Product } from "@/containers/product";
import { LoadingSpinner } from "@/components/loading-spinner";
import { ProductTitle } from "@/containers/product/title";

export interface PageProps {
  params?: Promise<{ id: string; }>
  searchParams?: Promise<any>
}
export const revalidate = 60
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
            <ProductTitle  id={id}/>
            <section className="container">
              <div className="row">
                <Suspense fallback={
                  <LoadingSpinner/>
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
