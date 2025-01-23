import { NextResponse } from "next/server";
import { CoCart } from "@/config/co-cart";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cart_key = searchParams.get("cart_key")

  const endpoint = !cart_key ? "https://faktas.yeniveri.com/wp-json/cocart/v2/cart"
    : `https://faktas.yeniveri.com/wp-json/cocart/v2/cart?cart_key=${cart_key}`

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart from CoCart API" }, { status: response.status })
    }

    const cartData = await response.json()

    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


export async function POST(req: Request) {

  const { cart_key, id, quantity } = await req.json()

  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart/add-item`
  console.log(cart_key, id, quantity, "--------")
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_key,
        id: id.toString(),
        quantity,
      }),
    })


    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart from CoCart API" }, { status: response.status })
    }

    const cartData = await response.json()
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}