"use server"
import { Login } from "@/containers/auth/login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage (){
  const cookiesStore = await cookies()
  const cart_key = cookiesStore.get("cart_key")?.value

  redirect("https://api.fadimeaktas.com/hesabim/")

  return <Login cart_key={cart_key} />
}