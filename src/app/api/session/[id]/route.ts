import { NextResponse } from "next/server";

export async function GET
(req: Request,
 { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {

    return NextResponse.json({});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}