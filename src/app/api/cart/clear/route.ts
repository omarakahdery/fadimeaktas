import { NextResponse } from "next/server";

const woocommerceUrl = "https://api.fadimeaktas.com"
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/clear`+ (cart_key ? ("?cart_key=" + cart_key) : "")
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
      body: JSON.stringify({}),
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
