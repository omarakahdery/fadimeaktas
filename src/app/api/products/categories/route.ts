import { api } from "../../../../config/wc";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await api.get("products/categories");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}
