"use client";
import { IUser } from "@/types/IUser";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AddressTitle } from "@/containers/user/address/address-title";
import { ShippingAddressFormFields } from "@/containers/user/address/shipping/form";
import { ShippingAddressData } from "@/containers/user/address/shipping/shipping-address-data";
import { billingSchema } from "@/containers/user/address/billing/form";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { closeForm } from "@/containers/user/account-info/personal-info-form";

type Props = {
  formData?: IUser["billing"],
  setFormData: Dispatch<SetStateAction<IUser["billing"]>>
}

export function OrderShippingAddress({ formData, setFormData }: Props) {
  const [ errors, setErrors ] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"ShippingAddress"} title={"Teslimat Adresi"}/>
      <div className={"collapse show " + "ShippingAddress"} id="primaryAddressPreview">
        <ShippingAddressData data={formData}/>
      </div>
      <div className={"collapse " + "ShippingAddress"} id="primaryAddressEdit">
        <form className="row g-3 g-sm-4 needs-validation" onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form");
          const result = billingSchema.safeParse(formData);
          if (!result.success) {
            setFieldsErrors(result, setErrors);
            return;
          }
          closeForm("close2")
        }}>
          <ShippingAddressFormFields
            handleChange={handleChange}
            setFormData={setFormData}
            formData={formData}
            errors={errors}
          />
          <div className="col-12">
            <div className="d-flex gap-3 pt-2 pt-sm-0">
              <button type="button" className="btn rounded-pill btn-dark">Kaydet</button>
              <button id={"close2"} type="button" className="btn rounded-pill btn-secondary"
                      onClick={() => {

                      }}
                      data-bs-toggle="collapse"
                      data-bs-target={"." + "ShippingAddress"} aria-expanded="true"
                      aria-controls="primaryAddressPreview primaryAddressEdit">Kapat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}