"use server";
import React from "react";
import { cookies } from "next/headers";
import { getData } from "@/lib/api/api-fun";
import { IUser } from "@/types/IUser";
import { AddressTitle } from "@/containers/user/address/address-title";
import { ShippingAddressForm } from "@/containers/user/address/shipping/form";
import { ShippingAddressData } from "@/containers/user/address/shipping/shipping-address-data";
import { getUserById } from "@/lib/api/get-data-wc";

export async function ShippingAddress() {
  const userId = (await cookies()).get("user_id")
  //const data = await getData<IUser>(`/user/me/${userId?.value}`);
  const data = await getUserById({ id: userId?.value });
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"ShippingAddress"} title={"Teslimat Adresi"}/>
      <div className={"collapse show " + "ShippingAddress"} id="primaryAddressPreview">
       <ShippingAddressData data={data?.shipping} />
      </div>
      <div className={"collapse " + "ShippingAddress"} id="primaryAddressEdit">
        <ShippingAddressForm
          userId={data?.id}
          addressData={data?.shipping} collapseName={"ShippingAddress"}/>
      </div>
    </div>
  </>
}