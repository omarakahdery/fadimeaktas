import { AddressTitle } from "@/containers/user/address/address-title";
import { getData } from "@/lib/api/api-fun";
import { IUser } from "@/types/IUser";
import { BillingAddressForm, ShippingAddressForm } from "@/containers/user/address/address-form";

export async function ShippingAddress() {
  const userId = "2"
  const data = await getData<IUser>(`/user/me/${userId}`);
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"ShippingAddress"} title={"Teslimat Adresi"}/>
      <div className={"collapse show " + "ShippingAddress"} id="primaryAddressPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>
            {data?.shipping.first_name} {data?.shipping.last_name}
          </li>
          <li>
            {data?.shipping.state}{data?.shipping.state&&","} {data?.shipping.city}
          </li>
          <li>
            {data?.shipping.address_1}
          </li>
        </ul>
      </div>
      <div className={"collapse " + "ShippingAddress"} id="primaryAddressEdit">
        <ShippingAddressForm addressData={data?.shipping} collapseName={"ShippingAddress"}/>
      </div>
    </div>
  </>
}

export async function BillingAddress() {
  const userId = "2"
  const data = await getData<IUser>(`/user/me/${userId}`);
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"BillingAddress"} title={"Fatura Adresi"}/>
      <div className={"collapse show " + "BillingAddress"} id="primaryAddressPreview">
        <ul className="list-unstyled fs-sm m-0">
          <li>
            {data?.billing.first_name} {data?.billing.last_name}
          </li>
          <li>
            {data?.billing.state}{data?.shipping.state&&","} {data?.billing.city}
          </li>
          <li>
            {data?.billing.address_1}
          </li>
        </ul>
      </div>
      <div className={"collapse " + "BillingAddress"} id="primaryAddressEdit">
        <BillingAddressForm addressData={data?.billing} collapseName={"BillingAddress"}/>
      </div>
    </div>
  </>
}
