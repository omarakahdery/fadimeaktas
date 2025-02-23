import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { cookieDomain } from "@/config/wc";

const woocommerceUrl = "https://api.fadimeaktas.com"

export async function POST(req: Request) {

  const { id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/add-item` + (cart_key ? ("?cart_key=" + cart_key) : "")
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
      credentials: "include",
    })
    const cookieStore = await cookies()
    response.headers.forEach((value, name) => {
      if (name.toLowerCase() === "set-cookie") {
        // Extract the first cookie (before the first semicolon)
        const cookiePart = value.split("; ")[0];

        // Split by '=' to get name and value
        const [cookieName, cookieValue] = cookiePart.split("=");
        cookieStore.set(cookieName, cookieValue, {
          domain: cookieDomain,
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: 90 * 24 * 60 * 60, // 1 week
          path: "/",
        })
      }
    });
    const cartData = await response.json()
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart from CoCart API" }, { status: response.status })
    }
    cookieStore.set("cart_key", cartData.cart_key, {
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


