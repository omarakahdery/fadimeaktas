"use server";
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json({ success: false, error: "Username and password are required" }, { status: 400 })
    }

    const authHeader = "Basic " + btoa(`${username}:${password}`)

    const response = await fetch("https://faktas.yeniveri.com/wp-json/cocart/v2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
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

      return NextResponse.json({ success: true, customer: data })
    } else {
      console.error("Login failed:", data)
      return NextResponse.json({ success: false, error: data.message || "Login failed" }, { status: response.status })
    }
  } catch (error) {
    console.error("An error occurred during login:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

