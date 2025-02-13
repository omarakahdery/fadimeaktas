import { Checkout } from "@/containers/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ödeme Yap' + " | Fadime Aktaş",
  description: 'Ödeme Yap sayfası'+ " | Fadime Aktaş",
}
export default function CheckoutPage() {
  return (
    <Checkout/>
  );
}