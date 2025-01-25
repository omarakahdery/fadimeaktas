import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const baseUrl = "https://faktas.yeniveri.com/wp-json/cocart/v2/sessions"
  try {
    const response = await fetch(baseUrl, {
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
