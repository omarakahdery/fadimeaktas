import { NextResponse } from "next/server";
import { api } from "@/config/wc";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('customer_id');
  try {
    const response = await api.get("orders",
      {
        customer_id: id,
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const response = await api.post("orders", body);
    console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

