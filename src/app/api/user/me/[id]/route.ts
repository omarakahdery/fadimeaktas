"use server";
import { NextResponse } from "next/server";
import { api } from "@/config/wc";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  try {
    const response = await api.get(`customers/${id}`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error fetching customer data" }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const body = await req.json()
    const { email, firstName, lastName, shipping, billing } = body

    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      shipping: shipping,
      billing: billing
    }
    const response = await api.put("customers/" + id, data)
    return NextResponse.json({ success: true, customer: response.data })
  } catch (error) {
    console.error("Error creating customer:", error)
    return NextResponse.json({ success: false, error: "Failed to create customer" }, { status: 500 })
  }
}