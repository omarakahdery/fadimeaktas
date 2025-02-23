import { api } from "@/config/wc";

const woocommerceUrl = "https://api.fadimeaktas.com"

export async function getCategoryById(
  { id }: { id: string }
) {
  try {
    const response = await api.get("products/categories/" + id);
    return response.data;
  } catch (error) {
    console.error(error);
    return {}
  }
}

export async function getCategoriesAsList() {
  try {
    const response = await api.get("products/categories");
    return response.data;
  } catch (error) {
    return {}
  }
}

export async function getOrders({ customer_id }: { customer_id?: string }) {
  try {
    const response = await api.get("orders",
      {
        customer: customer_id,
      }
    );
    return response.data
  } catch (error: any) {
    return { error: "Error fetching orders" }
  }
}

type GetProductParams = {
  page?: number,
  perPage?: number,
  category?: string,
  orderby?: string,
  order?: string,
  slug?: string
}

export async function getProducts({ page, perPage, category, orderby, order, slug }: GetProductParams) {
  try {
    const response = await api.get("products",
      {
        per_page: perPage,
        page: page,
        category,
        orderby,
        order,
        /*slug*/
      }
    );
    return response.data;
  } catch (error: any) {
    return []
  }
}

export async function getOrderById(
  { id }: { id: string },
) {
  try {
    const response = await api.get("orders/" + id,);
    return response.data
  } catch (error: any) {
    return {
      error: "Error fetching order"
    }
  }
}

export async function getUserById(
  { id }: { id?: string }
) {
  try {
    const response = await api.get(`customers/${id}`)
    // console.log(response.request._header, "xwwwx")
    //const {data,  headers, request, config, ...rest } = response
    return response.data
  } catch (error) {
    return {}
  }
}

export async function getProductById(
  { id }: { id?: string }
) {
  try {
    const response = await api.get("products/" + id);
    return response.data
  } catch (error) {
    return {}
  }
}

type GetMyCartProps = {
  token?: string,
  cart_key?: string
}

export async function getMyCart({
                                  token,
                                  cart_key
                                }: GetMyCartProps) {
  const endpoint = `${woocommerceUrl}/wp-json/cocart/v2/cart` + (!token && cart_key ? ("?cart_key=" + cart_key) : "")
  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: "Basic " + token,
      },
    })
    console.log(response, "ooooowww")
    if (!response.ok) {
      return { error: "Failed to fetch cart from CoCart API" }
    }
    return await response.json()
  } catch (error) {
    return { error: "Error fetching cart" }
  }
}

export async function getPaymentGateways() {
  try {
    const response = await api.get("payment_gateways",
    );
    return response.data;
  } catch (error) {
    return { error: "Error fetching products" }
  }
}
