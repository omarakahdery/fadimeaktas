import { PersonalInfoForm } from "@/containers/user/account-info/personal-info-form";
import { IUser } from "@/types/IUser";
import { getData } from "@/lib/api/api-fun";
import { PersonalInfoTitle } from "@/containers/user/account-info/personal-info-title";

export async function PersonalInfo({ id }: { id?: string }) {
  const data = await getData<IUser>(`/user/me/3`);

  return <>
    <div className="border-bottom py-4">
      <PersonalInfoTitle/>
      <div className="collapse basic-info show" id="basicInfoPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>{data?.first_name} {data?.last_name}</li>
          <li className="mb-1">{data?.email}</li>
        </ul>
      </div>
      <div className="collapse basic-info" id="basicInfoEdit">
        <PersonalInfoForm user={data}/>
      </div>
    </div>
  </>

}