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

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Product.id,
          quantity: Product.quantity,
          cart_key: "9f190bde23bc8600fa10658866536d"
        }),
      })
      const data = await response.json()

      if (data.success) {
        /*setMessage(`Customer created successfully! ID: ${data.customer.id}`)*/
        router.refresh()
        closeForm("close")
      } else {
        /*setMessage(`Error: ${data.error}`)*/
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
        <button
          disabled={isLoading}
          type="submit" className="btn rounded-pill btn-lg btn-dark w-100">
          Satın Al
        </button>
      </form>
    </>
  );
}