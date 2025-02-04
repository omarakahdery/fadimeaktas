"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function RemoveItemBtn({ item_key, token, cart_key }: { item_key: string, token?: string, cart_key?: string }) {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)
  const router = useRouter();
  const endpoint = `/api/cart/${item_key}` + (token ? `?token=${token}` : `?cart_key=${cart_key}`)
  const handleSubmit = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      if (data?.notices?.success?.length > 0) {
        setIsSuccess(true)
        router.refresh()
      }
    } catch (error) {
      /*setMessage("An error occurred while creating the customer.")*/
    } finally {
      setIsLoading(false)
    }
  }
  return <>

    <button
      onClick={() => {
        handleSubmit()
      }}
      type="button" className="btn btn-icon btn-sm flex-shrink-0 fs-sm" data-bs-toggle="tooltip"
      data-bs-custom-class="tooltip-sm" data-bs-title="Remove" aria-label="Remove from cart">
      <i className="ci-trash fs-base"></i>
    </button>
  </>
}