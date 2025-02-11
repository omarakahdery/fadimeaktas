export interface IProduct {
  id: number;
  name: string;
  price: string;
  price_html: string;
  regular_price: string;
  sale_price: string;
  short_description: string;
  description: string;
  backordered: boolean;
  backorders_allowed: boolean;
  backorders: string;
  images: { src: string, alt: string }[];
  categories: {
    id: number;
    name: string;
    slug: string
  }[];
}
