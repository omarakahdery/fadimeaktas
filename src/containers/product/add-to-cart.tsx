"use client";
import { closeForm } from "@/containers/user/account-info/personal-info-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  Product: {
    id: string,
    quantity: string
  }
}

export function AddItemToCart({ Product }: Props) {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Product.id,
          quantity: Product.quantity,
          cart_key: "8f63fd5a90dcb7e37f544ae7d76094"
        }),
      })
      const data = await response.json()

      if (data?.notices?.success?.length > 0) {
        setIsSuccess(true)
      } else {
      }
    } catch (error) {
      /*setMessage("An error occurred while creating the customer.")*/
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {isSuccess ? <div className="alert d-flex alert-success" role="alert">
            <i className="ci-check-circle fs-lg pe-1 mt-1 me-2"></i>
            Sepete eklendi
          </div> :
          <button
            disabled={isLoading}
            type="submit" className="btn rounded-pill btn-lg btn-dark w-100">
            Satın Al
          </button>
        }
      </form>
    </>
  );
}