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
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { z } from "zod";

type Props = {
  userData?: IUser
  data?: ICart
  token?: string
  payments?: IPaymentGateways[]
  cart_key?: string
}
export type OrderAddress = {
  first_name: string
  last_name: string
  address_1: string
  state: string
  city: string
  email: string
  first_name_billing: string
  last_name_billing: string
  address_1_billing: string
  state_billing: string
  city_billing: string
  phone?: string
  isAddressSame: boolean
}
export const addressSchema = z.object({
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  address_1: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  first_name_billing: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name_billing: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state_billing: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city_billing: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  address_1_billing: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
  phone: z.string().min(10, "Telefon en az 10 karakter olmalıdır.")
});
export const shippingSchema = z.object({
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  address_1: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  phone: z.string().min(10, "Telefon en az 10 karakter olmalıdır.")
});

export function CheckoutContent({ userData, data, token, payments, cart_key }: Props) {
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const [ formData, setFormData ] = useState<OrderAddress>({
    first_name: userData?.shipping?.first_name || "",
    last_name: userData?.shipping?.last_name || "",
    address_1: userData?.shipping?.address_1 || "",
    state: userData?.shipping?.state || "",
    city: userData?.shipping?.city || "",
    first_name_billing: userData?.billing?.first_name || "",
    last_name_billing: userData?.billing?.last_name || "",
    address_1_billing: userData?.billing?.address_1 || "",
    state_billing: userData?.billing?.state || "",
    city_billing: userData?.billing?.city || "",

    email: userData?.billing?.email || "",
    phone: userData?.billing?.phone || "",
    isAddressSame: false
  });
  return <>
    <div className="col-lg-12 col-xl-8  mb-5 mb-lg-0">
      <div className="vstack gap-4">
        <div className="">
          {/*     <pre>
            {JSON.stringify(formData, null, 2)}
          </pre>*/}
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button fs-5 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            <span className="animate-target me-2">
                              Sepetimdeki Ürünler ({data?.items.length})
                            </span>
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingOne"
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
                                  className="fw-normal text-dark fs-sm mb-2">{formatCurrency(Number(item.price))}</div>
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
            <OrderBillingAddress
              errors={errors}
              setFormData={setFormData}
              formData={formData}/>
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
              <PaymentForm
                onSubmit={() => {
                  setErrors({});

                  const result = formData.isAddressSame ? shippingSchema.safeParse(formData) : addressSchema.safeParse(formData);
                  if (!result.success) {
                    setFieldsErrors(result, setErrors);
                    return false;
                  }
                  return true;
                }}
                token={token}
                userId={userData?.id}
                addressData={formData}
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