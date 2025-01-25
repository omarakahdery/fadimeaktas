import { NextResponse } from "next/server";

export async function DELETE
(
  req: Request,
  { params }: { params: Promise<{ item_key: string }> }
) {
  const item_key = (await params).item_key
  const { searchParams } = new URL(req.url)
  const cart_key = searchParams.get("cart_key")
  /*const quantity = searchParams.get("quantity")*/

  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart/item?cart_key=${cart_key}`
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item_key: item_key }),

    })

    if (!response.ok) {
      return NextResponse.json({ error: response.json() }, { status: response.status })
    }

    const cartData = await response.json()
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error removing item from cart" }, { status: 500 })
  }
}


//---------------------------


export async function POST
(
  req: Request,
  { params }: { params: Promise<{ item_key: string }> }
) {
  const item_key = (await params).item_key

  const { searchParams } = new URL(req.url)
  const cart_key = searchParams.get("cart_key")
  const quantity = searchParams.get("quantity")

  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart/item?cart_key=${cart_key}`
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_key,
        quantity
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to remove item from cart" }, { status: response.status })
    }

    const cartData = await response.json()
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error removing item from cart" }, { status: 500 })
  }
}
