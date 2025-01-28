"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  Product: {
    id: string,
    quantity: string
    token?: string
    backordered?: boolean
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
      const response = await fetch("/api/cart?token=" + Product.token, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Product.id,
          quantity: Product.quantity,
        }),
      })
      const data = await response.json()

      if (data?.notices?.success?.length > 0) {
        setIsSuccess(true)
        router.push("/sepetim");
        /*openCart("cartButton");*/
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
        <button
          disabled={Product.backordered ||isLoading}
          type="submit" className="btn rounded-pill btn-lg btn-dark w-100">
          Satın Al
        </button>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#shoppingCart"
          aria-controls="shoppingCart"
          aria-label="Shopping cart"
          id="cartButton"
          type="button"
          className="opacity-0 position-absolute w-0 h-0">
          Görünmez Buton
        </button>
      </form>
    </>
  );
}

function openCart(id: string) {
  const btn = document.getElementById(id) as HTMLButtonElement;
  if (btn) {
    btn.click();
  } else {
    console.error("Button not found");
  }
}