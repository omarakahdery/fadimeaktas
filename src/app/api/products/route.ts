import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { api } from "../../../../config";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('per_page') || '3';
  try {
    const response = await api.get("products",
      {
        per_page: perPage,
        page: page,
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

