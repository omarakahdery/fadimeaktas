export interface IOrder {
  id: string,
  line_items: ILineItem[];
  discount_total: string,
  discount_tax: string,
  shipping_total: string,
  shipping_tax: string,
  cart_tax: string,
  total: string,
  total_tax: string,
  date_created: string
  status: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash",
}

export const statusTr = {
  pending: "Beklemede",
  processing: "İşleniyor",
  "on-hold": "Beklemede",
  completed: "Tamamlandı",
  cancelled: "İptal Edildi",
  refunded: "İade Edildi",
  failed: "Başarısız",
  trash: "Çöp Kutusunda"
}

interface ILineItem {
  name: string,
  product_id: number,
  variation_id: number,
  quantity: number,
  subtotal: number,
  subtotal_tax: string,
  total: number,
  total_tax: string,
  "image": {
    "id": string,
    "src": string
  },
}