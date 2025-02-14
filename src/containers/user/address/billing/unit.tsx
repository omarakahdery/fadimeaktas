"use server"
import React from "react";
import { IUser } from "@/types/IUser";
import { cookies } from "next/headers";
import { getData } from "@/lib/api/api-fun";
import { AddressTitle } from "@/containers/user/address/address-title";
import { BillingAddressForm } from "@/containers/user/address/billing/form";
import { BillingAddressData } from "@/containers/user/address/billing/billing-address-data";
import { getUserById } from "@/lib/api/get-data-wc";

export async function BillingAddress() {
  const userId = (await cookies()).get("user_id")
  //const data = await getData<IUser>(`/user/me/${userId?.value}`);
  const data = await getUserById({ id: userId?.value });
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"BillingAddress"} title={"Fatura Adresi"}/>
      <div className={"collapse show " + "BillingAddress"} id="primaryAddressPreview">
        <BillingAddressData  data={data?.billing}/>
      </div>
      <div className={"collapse " + "BillingAddress"} id="primaryAddressEdit">
        <BillingAddressForm
          userId={data?.id}
          addressData={data?.billing}
          collapseName={"BillingAddress"}/>
      </div>
    </div>
  </>
}
