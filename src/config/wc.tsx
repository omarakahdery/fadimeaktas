import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const cookieDomain = ".fadimeaktas.com"
export const consumerKey="ck_f333d670c4c587cdc509bf971ef642e49ae00b84"
export const consumerSecret="cs_300f399490e4138310ea2ca9676b28135657713d"
export const api = new WooCommerceRestApi({
  url: "https://api.fadimeaktas.com",
  consumerKey,
  consumerSecret,
  version: 'wc/v3'
});