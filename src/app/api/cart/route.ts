import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cart_key = searchParams.get("cart_key")
  const baseUrl = "https://faktas.yeniveri.com/wp-json/cocart/v2/cart"
  const endpoint = !cart_key ? baseUrl
    : `${baseUrl}?cart_key=${cart_key}`

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        cache: 'no-store',
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
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Cart-Key': cart_key,
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


