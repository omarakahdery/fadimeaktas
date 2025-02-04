"use client";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/helper/format-currency";
import { OrderBillingAddress } from "@/containers/checkout/order-billing-address";
import { Amount } from "@/components/amount";
import { IPaymentGateways, PaymentForm } from "@/containers/checkout/submit-order";
import { IUser } from "@/types/IUser";
import { ICart } from "@/types/ICart";
import { useState } from "react";
import { OrderShippingAddress } from "@/containers/checkout/order-shipping-address";

type Props = {
  userData?: IUser
  data?: ICart
  token?: string
  payments?: IPaymentGateways[]
  cart_key?: string
}

export function CheckoutContent({ userData, data, token, payments,cart_key }: Props) {
  const [ formData, setFormData ] = useState<IUser["billing"]>({
    first_name: userData?.billing?.first_name || "",
    last_name: userData?.billing?.last_name || "",
    address_1: userData?.billing?.address_1 || "",
    state: userData?.billing?.state || "",
    city: userData?.billing?.city || "",
    email: userData?.billing?.email || "",
  });
  const [ formDataShipping, setFormDataShipping ] = useState<IUser["shipping"]>({
    first_name: userData?.billing?.first_name || "",
    last_name: userData?.billing?.last_name || "",
    address_1: userData?.billing?.address_1 || "",
    state: userData?.billing?.state || "",
    city: userData?.billing?.city || "",
  });
  return <>
    <div className="col-lg-12 col-xl-8  mb-5 mb-lg-0">
      <div className="vstack gap-4">
        <div className="">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button fs-5" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <span className="animate-target me-2">
                              Sepetimdeki Ürünler ({data?.items.length})
                            </span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne"
                       data-bs-parent="#accordionExample">
                    <div className="vstack gap-4">
                      {/*Item*/}
                      {data?.items.map((item: any) => {
                        return <>
                          <div className="d-flex w-100 h-100 align-items-start me-auto">
                            <Link className="flex-shrink-0" href={"/product/" + item.id}>
                              <Image
                                src={item.featured_image}
                                className="bg-body-tertiary rounded"
                                width={80}
                                height={80}
                                alt={item.name}
                              />
                            </Link>
                            <div
                              className="h-100 w-100 d-flex justify-content-between flex-column min-w-0 ps-3">
                              <div>
                                <div className="nav mb-2">
                                  <Link className="nav-link min-w-0 text-dark-emphasis p-0"
                                        href={"/product/" + item.id}>
                                    <span className="text-uppercase">{item.name}</span>
                                  </Link>
                                </div>
                                <div
                                  className="fw-normal text-dark fs-sm mb-2">{formatCurrency(Number(item.totals?.total))}</div>
                                <div
                                  className="fw-normal text-dark fs-sm mb-2">Adet: {item.quantity.value}</div>
                              </div>

                            </div>
                          </div>

                        </>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 shadow">
          <div className="card-body">
            <OrderShippingAddress setFormData={setFormDataShipping} formData={formDataShipping}/>
            <OrderBillingAddress setFormData={setFormData} formData={formData}/>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-5 col-xl-4 ">
      <div style={{ "marginTop": "-115px" }} className=" offcanvas-end sticky-lg-top ps-lg-4 ps-xl-0">
        <div className="" style={{ "height": "115px" }}></div>
        <div className="vstack gap-4">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Sipariş Özeti</h5>
              <Amount value={Number(data?.totals?.subtotal)} label={"Ürünün Toplamı"}/>
              <Amount value={Number(data?.totals?.shipping_total)} label={"Kargo Ücreti"}/>
              {Number(data?.totals?.discount_total) > 0 &&
                  <Amount value={Number(data?.totals?.discount_total)} label={"İndrim"}/>}
              <Amount value={Number(data?.totals?.total)} label={"Toplam"}/>
            </div>
          </div>
          <div className="card border-0 shadow">
            <div className="card-body">
              <PaymentForm token={token}
                           shippingAddress={formDataShipping}
                           billingAddress={formData}
                           cartData={data} payments={payments}
                           cart_key={cart_key}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}