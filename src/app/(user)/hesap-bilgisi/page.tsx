import { PersonalInfo } from "@/containers/user/account-info/personal-info";
import { getData } from "@/lib/api/api-fun";
import { IUser } from "@/types/IUser";
import { Suspense } from "react";

export interface PageProps {
  params?: Promise<{ id: string; }>
  searchParams?: Promise<any>
}

export default async function AccountPage
({
   params,
 }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = await getData<IUser>(`/user/me/3`);

  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Hesap bilgileri</h1>
      {/*Basic info*/}
        <PersonalInfo user={data}/>
      {/*<ContactInfo/>*/}
    </>
  )
}