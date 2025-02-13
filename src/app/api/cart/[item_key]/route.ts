import { NextRequest, NextResponse } from 'next/server';
const woocommerceUrl = "https://api.fadimeaktas.com"

export async function DELETE
(
  req: Request,
  { params }: { params: Promise<{ item_key: string }> }
) {
  const item_key = (await params).item_key
  const { searchParams } = new URL(req.url)
  const cart_key = searchParams.get("cart_key")
  const token = searchParams.get("token")
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/item/${item_key}` + (cart_key ? ("?cart_key=" + cart_key) : "")

  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
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
  req: NextRequest,
  { params }: { params: Promise<{ item_key: string }> }
) {
  const item_key = (await params).item_key
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")

  const { quantity } = await req.json()
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/item/${item_key}` + (cart_key ? ("?cart_key=" + cart_key) : "")
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
      body: JSON.stringify({
        quantity: String(quantity),
      }),
    })
    if (!response.ok) {
      return NextResponse.json({ error: response.json() }, { status: response.status })
    }

    const cartData = await response.json()
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error update item from cart" }, { status: 500 })
  }
}
