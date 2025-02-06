import { IResponse } from "@/types/api/IResponse";
import { IOrder } from "@/types/IOrder";
import { getData } from "@/lib/api/api-fun";
import MyOrder from "@/containers/orders/order-by-id";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import MyOrders from "@/containers/orders";

export default async function MyOrderPage({
                                            params,
                                          }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <>
    <h1 className="h2 mb-1 mb-sm-2">Siparişlerim</h1>
    <Suspense
      fallback={
        <LoadingSpinner/>
      }>
      <MyOrder id={id}/>
    </Suspense>
  </>
}