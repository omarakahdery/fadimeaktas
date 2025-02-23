"use server";
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { IResponse } from "@/types/api/IResponse";
import { ICartUser, IUser } from "@/types/IUser";
import { mergeCarts } from "@/lib/api/merge-carts";

const woocommerceUrl = "https://api.fadimeaktas.com"

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

    const response = await fetch(woocommerceUrl + "/wp-json/cocart/v2/login", {
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
        domain: ".fadimeaktas.com",
        httpOnly: true,
        secure:true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 1 week
        path: "/",
      })
      cookieStore.set("token", authHeader, {
        domain: ".fadimeaktas.com",
        httpOnly: true,
        secure:true,
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



