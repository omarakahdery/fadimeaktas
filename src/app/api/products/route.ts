import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: "https://faktas.yeniveri.com",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
});

export async function GET() {
  try {
    const response = await api.get("products");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

