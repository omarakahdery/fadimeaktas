import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  if(!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 })
  }
  try {
    const response = await fetch("https://faktas.yeniveri.com/wp-json/cocart/v2/cart", {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + token,
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


export async function POST(req: Request) {

  const {  id, quantity } = await req.json()
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")
  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart/add-item`
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


    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart from CoCart API" }, { status: response.status })
    }

    const cartData = await response.json()
    return NextResponse.json(cartData)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 })
  }
}


