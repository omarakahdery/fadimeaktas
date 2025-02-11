"use server"
const woocommerceUrl = process.env.WOOCOMMERCE_URL
export async function mergeCarts(cart_key: string, token: string) {
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart?token=${token}&cart_key=${cart_key}`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + token,
      },
    })
    const data = await response.json()
    return null;
  } catch (error) {
    console.log(error)
  }
}