import { NextResponse } from "next/server"
import { api } from "@/config/wc";
import { IResponse } from "@/types/api/IResponse";
import { ICartUser, IUser } from "@/types/IUser";
import { cookies } from "next/headers";
import { mergeCarts } from "@/lib/api/merge-carts";


export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const cart_key = searchParams.get("cart_key")
  try {
    const body = await request.json()
    const { email, password } = body

    const data = {
      email,
      password: password,
    }

    const response = await api.post("customers", data)
    if (response.data.id) {
      const authHeader = btoa(`${response.data.username}:${password}`)
      const cookieStore = await cookies()
      cookieStore.set("user_id", response.data.id.toString(), {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 1 week
        path: "/",
      })
      cookieStore.set("token", authHeader, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 1 week
        path: "/",
      })
      cart_key && await mergeCarts(cart_key, authHeader)
      return NextResponse.json<IResponse<ICartUser>>({ success: true, data: response.data })
    } else {
      return NextResponse.json<IResponse<ICartUser>>({
        success: false,
        message: response.data.message || "Başarsız"
      }, { status: response.status })
    }
  } catch (error: any) {
    return NextResponse.json<IResponse<IUser>>({
      success: false,
      message: error.response.data.message
    }, { status: 500 })
  }
}

