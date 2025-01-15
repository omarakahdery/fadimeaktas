export interface IProduct {
  id: number;
  name: string;
  price: string;
  price_html: string;
  regular_price: string;
  sale_price: string;
  short_description: string;
  description: string;

  images: { src: string }[];
}
