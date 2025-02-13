import { Cart } from "@/components/cart/cart";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Sepetim'+ " | Fadime Aktaş",
  description: 'Sepetim sayfası',
}
export default async function CartPage() {
  return (
    <>
      <Cart/>
    </>
  );
}