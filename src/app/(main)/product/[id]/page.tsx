import { Suspense } from "react";
import { Product } from "@/containers/product";
import { LoadingSpinner } from "@/components/loading-spinner";
import { ProductTitle } from "@/containers/product/title";
import { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import { getData } from "@/lib/api/api-fun";
import { IProduct } from "@/types/IProduct";

export interface PageProps {
  params?: Promise<{ id: string; }>
  searchParams?: Promise<any>
}


export async function generateMetadata(
  { params, searchParams }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params)?.id
  const product = await getData<IProduct>(`/products/${id}`, {});
  return {
    title: product?.name ? product?.name + " - "+product.categories[0].name + " | Fadime Aktaş" : "Ürün",
  }
}

//export const revalidate = 60
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
            <ProductTitle id={id}/>
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
