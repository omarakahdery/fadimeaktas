import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { cookieDomain } from "@/config/wc";

const woocommerceUrl = "https://api.fadimeaktas.com"

export async function POST(req: Request) {
  const { id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const wishlist_key = searchParams.get("wishlist_key")
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/add-item` + (wishlist_key ? ("?cart_key=" + wishlist_key) : "")
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id.toString(),
        quantity,
      }),
    })

    const cartData = await response.json()
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart from CoCart API" }, { status: response.status })
    }
    const cookieStore = await cookies()
    cookieStore.set("wishlist_key", cartData.cart_key, {
      domain: cookieDomain,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 90 * 24 * 60 * 60, // 1 week
      path: "/",
    })
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


