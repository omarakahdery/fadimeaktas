import { PersonalInfo } from "@/containers/user/account-info/personal-info";
import { ContactInfo } from "@/containers/user/account-info/contact-info";

export default function AccountPage() {
  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Hesap bilgileri</h1>
      {/*Basic info*/}
      <PersonalInfo/>
      <ContactInfo/>
    </>
  )
}