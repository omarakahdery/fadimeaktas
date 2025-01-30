import { NextResponse } from "next/server"
import { api } from "@/config/wc";
import { IResponse } from "@/types/api/IResponse";
import { ICartUser, IUser } from "@/types/IUser";
import { cookies } from "next/headers";


export async function POST(request: Request) {
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
      return NextResponse.json<IResponse<ICartUser>>({ success: true, data: response.data })
    } else {
      return NextResponse.json<IResponse<ICartUser>>({
        success: false,
        message: response.data.message || "Başarsız"
      }, { status: response.status })
    }
    return NextResponse.json<IResponse<IUser>>({ success: true, data: response.data, message: "user sorun" })
  } catch (error: any) {
    console.error("Error creating customer:", error)
    return NextResponse.json<IResponse<IUser>>({
      success: false,
      message: error.response.data.message
    }, { status: 500 })
  }
}

