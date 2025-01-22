import { NextResponse } from "next/server";
import { api } from "../../../../../../config";


export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  try {
    const response = await api.get("customers/" + id);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

export async function PUT(request: Request,
                          { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  try {
    const body = await request.json()
    const { email, firstName, lastName, shipping } = body

    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      shipping: shipping
    }

    const response = await api.put("customers/" + id, data)

    return NextResponse.json({ success: true, customer: response.data })
  } catch (error) {
    console.error("Error creating customer:", error)
    return NextResponse.json({ success: false, error: "Failed to create customer" }, { status: 500 })
  }
}