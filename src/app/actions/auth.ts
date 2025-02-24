"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function logout() {
  const cookieStore = await cookies()
  /*  cookieStore.delete("token")
    cookieStore.delete("user_id")
    cookieStore.delete("cart_key")*/
  const allCookies = cookieStore.getAll()
  allCookies.forEach((cookie) => {
    cookieStore.delete(cookie.name)
  })
  redirect("/")
}

export async function removeCartKey() {
  const cookieStore = await cookies()
  cookieStore.delete("cart_key")
}
