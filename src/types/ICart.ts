import { IAddress } from "@/types/IUser";

export interface ICart {

  items: ICartItem[],
  customer: {
/*    billing_address:IAddress
    shipping_address:IAddress*/
  }
  totals: {
    subtotal: string,
    subtotal_tax: string,
    fee_total: string,
    fee_tax: string,
    discount_total: string,
    discount_tax: string,
    shipping_total: string,
    shipping_tax: string,
    total: string,
    total_tax: string
  },
}

export interface ICartItem{
  item_key: string,
  id: string,
  name: string,
  title: string,
  price: string,
  slug: string,
  featured_image: string,
  quantity: {
    value: number,
    min_purchase: number,
    max_purchase: number
  },
  totals: {
    subtotal: string,
    subtotal_tax: number,
    total: number,
    tax: number
  },
}