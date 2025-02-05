"use server";
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { IResponse } from "@/types/api/IResponse";
import { ICartUser, IUser } from "@/types/IUser";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const cart_key = searchParams.get("cart_key")
  try {
    const body = await request.json()
    const { username, password } = body

    /*   if (!username || !password) {
         return NextResponse.json({ success: false, error: "email and password are required" }, { status: 400 })
       }*/

    const authHeader = btoa(`${username}:${password}`)

    const response = await fetch("https://faktas.yeniveri.com/wp-json/cocart/v2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + authHeader,
      },
    })

    const data = await response.json()
    if (response.ok) {
      const cookieStore = await cookies()
      cookieStore.set("user_id", data.user_id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 1 week
        path: "/",
      })
      cookieStore.set("token", authHeader, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 1 week
        path: "/",
      })
      cart_key && await mergeCarts(cart_key, authHeader)
      return NextResponse.json<IResponse<ICartUser>>({ success: true, data: data })
    } else {
      return NextResponse.json<IResponse<ICartUser>>({
        success: false,
        message: data.message || "Başarsız"
      }, { status: response.status })
    }
  } catch (error) {
    console.error("An error occurred during login:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function mergeCarts(cart_key: string, token: string) {
  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart?token=${token}&cart_key=${cart_key}`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + token,
      },
    })
    const data = await response.json()
    return null;
  } catch (error) {
    console.log(error)
  }
}

