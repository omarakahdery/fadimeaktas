import { NextResponse } from "next/server";
import { api } from "@/config/wc";
import { IResponse } from "@/types/api/IResponse";
import { IOrder } from "@/types/IOrder";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('customer_id');
  try {
    const response = await api.get("orders",
      {
        customer_id: id,
      }
    );
    return  NextResponse.json<IResponse<IOrder[]>>({
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

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const response = await api.post("orders", body);
    console.log(response.data);
    return NextResponse.json<IResponse<IOrder>>({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    return NextResponse.json<IResponse<IOrder>>({
      success: false,
      message: error.response.data.message,
      data: error.response.data?.data
    }, { status: 500 });
  }
}

