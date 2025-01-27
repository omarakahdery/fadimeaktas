import { NextResponse } from "next/server";
import { CoCart } from "@/config/co-cart";
import { cookies } from "next/headers";

export async function GET
(req: Request,
 { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const response = await CoCart.get("session/" + id);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}