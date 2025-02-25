import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { consumerKey, consumerSecret, cookieDomain } from "@/config/wc";

const woocommerceUrl = "https://api.fadimeaktas.com"

// https://api.fadimeaktas.com/?add-to-cart=354&quantity=1

export async function POST(req: Request) {

  const { id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")
  const authHeader = btoa(`${consumerKey}:${consumerSecret}`)
  //const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/add-item` + (cart_key ? ("?cart_key=" + cart_key) : "")
  const endpoint = `${woocommerceUrl}?add-to-cart=${id.toString()}&quantity=${quantity.toString()}`
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + authHeader,
      },
      credentials: "include",
    })
    const cookieStore = await cookies()
    response.headers.forEach((value, name) => {
      if (name.toLowerCase() === "set-cookie") {
        const cookiePart = value.split("; ")[0];
        const [ cookieName, cookieValue ] = cookiePart.split("=");
        //console.log({ cookieName, cookieValue })
        if (cookieName.includes("wp_woocommerce_session")) {
        const decodedCookieValue = decodeURIComponent(cookieValue)
          cookieStore.set(cookieName, decodedCookieValue, {
            domain: cookieDomain,
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 90 * 24 * 60 * 60,
            path: "/",
          })
        }
      }
    });
    /* const cartData = await response.json()
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
     })*/
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


