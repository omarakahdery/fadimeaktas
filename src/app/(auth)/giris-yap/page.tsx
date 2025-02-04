"use server"
import { Login } from "@/containers/auth/login";
import { cookies } from "next/headers";

export default async function (){
  const cookiesStore = await cookies()
  const cart_key = cookiesStore.get("cart_key")?.value
  return <Login cart_key={cart_key} />
}