import { NextResponse } from "next/server";
import { api } from "../../../../config";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('customer_id') || '1';
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

