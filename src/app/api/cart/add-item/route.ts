import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {

  const { id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")
  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart/add-item` + (cart_key ? ("?cart_key=" + cart_key) : "")
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
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
    cookieStore.set("cart_key", cartData.cart_key, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 90 * 24 * 60 * 60, // 1 week
      path: "/",
    })
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


