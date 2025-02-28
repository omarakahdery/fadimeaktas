import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { consumerKey, consumerSecret, cookieDomain } from "@/config/wc";

const woocommerceUrl = "https://api.fadimeaktas.com"

export async function POST(req: Request) {

  const { id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const cart_key = searchParams.get("cart_key")
  const authHeader = btoa(`${consumerKey}:${consumerSecret}`)
  //const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart/add-item` + (cart_key ? ("?cart_key=" + cart_key) : "")
  const endpoint = `${woocommerceUrl}?add-to-cart=${id.toString()}&quantity=${quantity.toString()}`
  try {
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    /*    const woocommerceSessionCookie = allCookies.find(({ name }) =>
          name.includes("wp_woocommerce_session")
        );*/
    const headers: HeadersInit = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + authHeader,
    };
    /*  if (woocommerceSessionCookie) {
        headers["Cookie"] = `${woocommerceSessionCookie.name}=${woocommerceSessionCookie.value}`;
      }*/
    if (allCookies.length > 0) {
      headers["Cookie"] = allCookies
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      credentials: "include",
    })
    response.headers.forEach((value, name) => {
      if (name.toLowerCase() === "set-cookie") {
        const cookiePart = value.split("; ")[0];
        const [ cookieName, cookieValue ] = cookiePart.split("=");
        //if (cookieName.includes("wp_woocommerce_session")) {
        const existingCookie = cookieStore.get(cookieName)
        if (!existingCookie) {
          const decodedCookieValue = decodeURIComponent(cookieValue)
          cookieStore.set(cookieName, decodedCookieValue, {
            domain: cookieDomain,
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 2 * 24 * 60 * 60,
            path: "/",
          })
        }
      }
    });
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


