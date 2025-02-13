import { PersonalInfo } from "@/containers/user/account-info/personal-info";
import { Suspense } from "react";
import { PersonalInfoTitle } from "@/containers/user/account-info/personal-info-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hesap Bilgisi'+ " | Fadime Aktaş",
  description: 'Hesap Bilgisi sayfası',
}

export interface PageProps {
  params?: Promise<{ id: string; }>
  searchParams?: Promise<any>
}

export default async function AccountPage() {
  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Hesap bilgileri</h1>
      {/*Basic info*/}
      <Suspense fallback={
        <div className="border-bottom py-4">
          <PersonalInfoTitle/>
          <div className="collapse basic-info show" id="basicInfoPreview">
            <div className="placeholder-glow d-flex flex-column gap-3">
              <span className="placeholder col-2"></span>
              <span className="placeholder col-3"></span>
            </div>
          </div>
        </div>
      }>
        <PersonalInfo />
      </Suspense>
      {/*<ContactInfo/>*/}
    </>
  )
}