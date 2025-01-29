/*
'use client'
import { useState } from 'react'
import { Cart } from './cart'
import { ICart } from "@/types/ICart";
import { getData } from "@/lib/api/api-fun";

export function ClientCartWrapper({ initialData, token }: { initialData?: ICart, token?: string }) {
  const [ cartData, setCartData ] = useState(initialData)
  const refreshCart = async () => {
    const newData = await getData<ICart>(`/api/cart?token=${token}`)
    setCartData(newData)
  }
  return (
    <Cart
      data={cartData}
      refreshCart={refreshCart}
      clientSide={true}
      token={token}
    />
  )
}*/
