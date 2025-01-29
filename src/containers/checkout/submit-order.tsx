"use client";
import { ICart } from "@/types/ICart";
import { formatCurrency } from "@/lib/helper/format-currency";
import { useState } from "react";
import { IUser } from "@/types/IUser";


export interface IPaymentGateways {
  id: string,
  title: string,
  description: string
}

type Props = {
  cartData?: ICart,
  payments?: IPaymentGateways[]
  userData?: IUser
  token?: string
}

export function PaymentForm({ cartData, payments, userData, token }: Props) {
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
          userData={userData}
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
  userData?: IUser
  token?: string
}
export const SubmitOrder = ({ cartData, userData, selectedGateway, token }: PaymentFormProps) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)
  const email = userData?.email
  const handleSubmit = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method: selectedGateway,
          billing: {
            ...userData?.billing, email
          },
          shipping: {
            ...userData?.shipping, email
          },
          set_paid: false,
          line_items: cartData?.items.map((item) => {
            return {
              product_id: item.id,
              quantity: Number(item.quantity.value),
            }
          })
        }),
      })
      const data = await response.json()
      if (data?.id) {
        window.location.href = `/siparis/${data.id}`

        try {
          const response = await fetch(`/api/cart/clear?token=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          })
        } catch (error) {
          /*setMessage("An error occurred while creating the customer.")*/
        }
      }
      setIsSuccess(true)
    } catch (error) {
      /*setMessage("An error occurred while creating the customer.")*/
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <button
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