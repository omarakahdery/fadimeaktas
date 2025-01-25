"use server";
import { NextResponse } from "next/server";
import { api } from "@/config/wc";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const userId =  (await cookies()).get("user_id")
  console.log("xxxxxxx", userId?.value)

  /*  if (!userId) {
      return NextResponse.json({ error: "User ID not found in cookies" }, { status: 400 })
    }*/

  try {
    const response = await api.get(`customers/${userId?.value}`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error fetching customer data" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const cookieStore = await cookies()
  const userId = cookieStore.get("user_id")
  try {
    const body = await request.json()
    const { email, firstName, lastName, shipping, billing } = body

    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      shipping: shipping,
      billing: billing
    }

    const response = await api.put("customers/" + userId?.value, data)

    return NextResponse.json({ success: true, customer: response.data })
  } catch (error) {
    console.error("Error creating customer:", error)
    return NextResponse.json({ success: false, error: "Failed to create customer" }, { status: 500 })
  }
}