import { NextResponse } from "next/server";

const woocommerceUrl = "https://api.fadimeaktas.com"
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const wishlist_key = searchParams.get("wishlist_key")
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart` + (wishlist_key ? ("?cart_key=" + wishlist_key) : "")
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


