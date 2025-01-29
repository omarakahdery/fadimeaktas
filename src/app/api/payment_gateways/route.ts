import { NextResponse } from "next/server";
import { api } from "@/config/wc";


export async function GET(request: Request) {
  try {
    const response = await api.get("payment_gateways",
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

