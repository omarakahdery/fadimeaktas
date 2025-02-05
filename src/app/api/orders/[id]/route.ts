import { api } from "@/config/wc";
import { NextResponse } from "next/server";
import { IResponse } from "@/types/api/IResponse";
import { IOrder } from "@/types/IOrder";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  try {
    const response = await api.get("orders/" + id,);
    return NextResponse.json<IResponse<IOrder[]>>({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    return NextResponse.json<IResponse<IOrder>>({
      success: false,
      message: error.response.data?.message,
      data: error.response.data?.data
    }, { status: 500 });
  }
}