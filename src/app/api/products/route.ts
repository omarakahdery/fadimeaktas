import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { api } from "../../../../config";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('per_page') || '3';
  const category = searchParams.get('category') ;
  const slug = searchParams.get('slug') ;
  try {
    const response = await api.get("products",
      {
        per_page: perPage,
        page: page,
        category,
        /*slug*/
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

