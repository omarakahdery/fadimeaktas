import { NextResponse } from "next/server"
import { api } from "@/config/wc";


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, username, password } = body

    const data = {
      email,
      username: username,
      password: password,
    }

    const response = await api.post("customers", data)

    return NextResponse.json({ success: true, customer: response.data })
  } catch (error) {
    console.error("Error creating customer:", error)
    return NextResponse.json({ success: false, error: "Failed to create customer" }, { status: 500 })
  }
}

