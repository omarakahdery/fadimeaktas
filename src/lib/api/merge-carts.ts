"use server"
export async function mergeCarts(cart_key: string, token: string) {
  const endpoint = `https://faktas.yeniveri.com/wp-json/cocart/v2/cart?token=${token}&cart_key=${cart_key}`;
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