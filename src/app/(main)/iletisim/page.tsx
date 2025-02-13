import { Contact } from "@/containers/contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'İletişim',
  description: 'İletişim sayfası ',
}
export default function ContactPage() {
  return <Contact />
}