import { AddressTitle } from "@/containers/user/address/address-title";
import { AddressForm } from "@/containers/user/address/address-form";
import { getData } from "@/lib/api/api-fun";
import { IUser } from "@/types/IUser";

export default async function AddressUnit({ collapseName, title }: { collapseName: string, title: string }) {
  const data = await getData<IUser>(`/user/me/3`);

  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={collapseName} title={title}/>
      <div className={"collapse show " + collapseName} id="primaryAddressPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>
            {data?.shipping.first_name} {data?.shipping.last_name}
          </li>
          <li>
            {data?.shipping.state}, {data?.shipping.city}
          </li>
          <li>
            {data?.shipping.address_1}
          </li>
        </ul>
      </div>
      <div className={"collapse " + collapseName} id="primaryAddressEdit">
        <AddressForm shippingAddress={data?.shipping} collapseName={collapseName}/>
      </div>
    </div>
  </>
}