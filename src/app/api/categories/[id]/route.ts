import { NextResponse } from "next/server";
import { api } from "@/config/wc";


export  async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const response = await api.get("products/categories/" + id);
    console.log(response,"kkkkkkk");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

