"use server"
import { cookies } from "next/headers";
import Signup from "@/containers/auth/singup";

export default async function SignupPage (){
  const cookiesStore = await cookies()
  const cart_key = cookiesStore.get("cart_key")?.value
  return <Signup cart_key={cart_key} />
}