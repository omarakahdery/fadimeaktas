//@ts-ignore
import CoCartAPI from "@cocart/cocart-rest-api";

export const CoCart = new CoCartAPI({
  url: "https://faktas.yeniveri.com/",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
    version: "cocart/v2",
});
