import MyOrders from "@/containers/orders";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Sipatişlerim'+ " | Fadime Aktaş",
  description: 'Sipatişlerim sayfası',
}
export default async function MyOrdersPage() {
  return <>
    <h1 className="h2 mb-1 mb-sm-2">Siparişlerim</h1>
    <Suspense
      fallback={
        <LoadingSpinner/>
      }>
      <MyOrders/>
    </Suspense>
  </>
    
}
