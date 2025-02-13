import Link from "next/link";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import MyOrder from "@/containers/orders/order-by-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Başarılı Sipariş',
  description: 'Başarılı Sipariş sayfası',
}
export default async function OrderPage({
                                    params,
                                  }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <section style={{ marginTop: "80px" }}>
    <main className="container content-wrapper">
      <div className="row align-items-center justify-content-center">
        <div className="alert alert-success fw-bold col-6" role="alert">
          Siparişiniz başarıyla oluşturuldu.
          <p className={"fw-normal mt-2"}>
            Siparişinizle ilgili görüşmek için bize ulaşabilirsiniz.
            <br/>
            Telefon:  <Link className={"animate-target text-decoration-none text-success"} href={"tel:+905357091720"}>0 535 709 17 20</Link>
          </p>
          <div className="row align-items-center justify-content-center">
            <Link className={"btn btn-success w-auto"} href={"/"}>
              Alışverişe devam et
              <i className="ci-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <LoadingSpinner/>
        }>
        <MyOrder id={id}/>
      </Suspense>
    </main>
  </section>
}