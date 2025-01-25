import { useState } from "react";
import { useRouter } from "next/navigation";

export function RemoveItemBtn({ item_key }: { item_key: string }) {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)

  const router = useRouter();
  const handleSubmit = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch(`/api/cart/${item_key}?cart_key=8f63fd5a90dcb7e37f544ae7d76094`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
  return <>
    <button
      onClick={() => {
        handleSubmit()
      }}
      disabled={isLoading}
      type="button" className="btn-close fs-sm" data-bs-toggle="tooltip" aria-label="Remove from cart">

    </button>
  </>
}