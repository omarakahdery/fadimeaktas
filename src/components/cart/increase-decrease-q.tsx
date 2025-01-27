"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function IncreaseDecreaseQ({ item_key, quantity, token }: {
  item_key: string,
  quantity: number,
  token?: string
}) {
  const [ q, setQ ] = useState(quantity || 1);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSuccess, setIsSuccess ] = useState(false)
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch(`/api/cart/${item_key}?token=${token}&path=/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: Number(q),
        }),
      })
      const data = await response.json()
      if (data?.notices?.success?.length > 0) {
        setIsSuccess(true)
        //todo:  router.refresh() is not working
        router.refresh()
      }
    } catch (error) {
      /*setMessage("An error occurred while creating the customer.")*/
    } finally {
      setIsLoading(false)
    }
  }
  return <form onSubmit={handleSubmit}>
    <div className="count-input rounded-2">
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-icon btn-sm"
        aria-label="Decrement quantity"
        onClick={() => {
          setQ(q - 1);
          if (q - 1 < 1) {
            setQ(1);
          }
        }}
      >
        <i className="ci-minus"></i>
      </button>
      <input type="number" className="form-control form-control-sm" value={q}/>
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-icon btn-sm"
        data-increment=""
        onClick={() => {
          setQ(q + 1)
        }}
        aria-label="Increment quantity"
      >
        <i className="ci-plus"></i>
      </button>
    </div>
  </form>
}