"use client";
import { useState } from "react";
import { ICart } from "@/types/ICart";
import { IUser } from "@/types/IUser";
import { IOrder } from "@/types/IOrder";
import { formatCurrency } from "@/lib/helper/format-currency";
import { IFailureResponse, IResponse } from "@/types/api/IResponse";


export interface IPaymentGateways {
  id: string,
  title: string,
  description: string
}

type Props = {
  cartData?: ICart,
  payments?: IPaymentGateways[]
  token?: string
  cart_key?: string
  shippingAddress: IUser["shipping"]
  billingAddress: IUser["billing"]
}

export function PaymentForm({ cartData, payments, shippingAddress, billingAddress, token,cart_key }: Props) {
  const [ selectedGateway, setSelectedGateway ] = useState<string>("sanalpospro")
  return (
    <>
      <div className={"vstack gap-2"}>
        {payments?.map((payment) => {
          return <div className={""}>
            <div className="form-check fs-xl">
              <input
                type="radio"
                className="form-check-input"
                id={payment.id}
                name={payment.id}
                onChange={() => setSelectedGateway(payment?.id)}
                checked={selectedGateway === payment.id}
              />
              <label htmlFor="card" className="form-check-label fs-base fw-medium text-body-emphasis ps-1">
                {payment.title}
              </label>
            </div>
            {
              payment.id == "sanalpospro" && selectedGateway == "sanalpospro" &&
                <>
                  <div className="mb-3 mt-3">
                    <input type="email" className="form-control rounded-pill"
                           placeholder="Kart Sahibi"/>
                  </div>
                  <div className="position-relative mb-3" data-input-format="{&quot;creditCard&quot;: true}">
                    <input type="text" className="form-control form-icon-end rounded-pill"
                           placeholder="Kart numarası"/>
                    <span
                        className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3"
                        data-card-icon=""></span>
                  </div>
                  <div className="d-flex gap-3">
                    <input type="text" className="form-control w-50 rounded-pill"
                           data-input-format="{&quot;date&quot;: true, &quot;datePattern&quot;: [&quot;m&quot;, &quot;y&quot;]}"
                           placeholder="AA/YY"/>
                    <input type="text" className="form-control w-50 rounded-pill" maxLength={4}
                           data-input-format="{&quot;numeral&quot;: true, &quot;numeralPositiveOnly&quot;: true, &quot;numeralThousandsGroupStyle&quot;: &quot;none&quot;}"
                           placeholder="CVC"/>
                  </div>
                </>
            }
          </div>
        })
        }
        {/*<pre>
            {JSON.stringify(userData?.email, null, 2)}
        </pre>*/}
        <SubmitOrder
          token={token}
          cart_key={cart_key}
          shippingAddress={shippingAddress}
          billingAddress={billingAddress}
          cartData={cartData}
          selectedGateway={selectedGateway}
        />
      </div>

    </>
  );
}

type PaymentFormProps = {
  cartData?: ICart
  selectedGateway: string
  token?: string
  cart_key?: string
  shippingAddress: IUser["shipping"]
  billingAddress: IUser["billing"]
}
export const SubmitOrder = ({
                              cartData,
                              shippingAddress,
                              billingAddress,
                              selectedGateway,
                              token,
                              cart_key
                            }: PaymentFormProps) => {
  const clearEndpoint = `/api/cart/clear?` + (token ? `token=${token}` : `cart_key=${cart_key}`);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState<IFailureResponse>()
  const handleSubmit = async () => {
    setIsLoading(true)
    setError(undefined)
    try {
      const response = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method: selectedGateway,
          billing: billingAddress,
          shipping: shippingAddress,
          set_paid: false,
          line_items: cartData?.items.map((item) => {
            return {
              product_id: item.id,
              quantity: Number(item.quantity.value),
            }
          })
        }),
      })
      const responseData: IResponse<IOrder> = await response.json()
      console.log(responseData)
      if (responseData?.success) {
        try {
          const response = await fetch(clearEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          })
        } catch (error) {
        }
        window.location.href = `/siparis/${responseData?.data?.id}`
      } else {
        setError(responseData)
      }
    } catch (error: any) {
      setError(error?.data)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      {error?.data?.params &&
          <div className="alert alert-danger" role="alert">
            <ul className="mt-2">
              {
                Object.entries(error.data?.params).map(([ field, message ]) => (
                  <li key={field} className="text-sm">
                    {/* <strong>{field}:</strong>*/} {message}
                  </li>
                ))}
            </ul>
          </div>
      }

      <button
        disabled={isLoading}
        onClick={handleSubmit}
        type="button" className="btn mt-3 btn-lg btn-dark w-100 rounded-pill">
        Öde {formatCurrency(Number(cartData?.totals?.total))}
      </button>
      <div className="d-flex align-items-center justify-content-center fs-xs text-body-secondary mt-3">
        <i className="ci-lock me-1"></i>
        Güvenli ödeme
      </div>
    </>
  )
}