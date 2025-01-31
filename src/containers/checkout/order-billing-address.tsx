"use client";
import { AddressTitle } from "@/containers/user/address/address-title";
import { BillingAddressData } from "@/containers/user/address/billing/billing-address-data";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IUser } from "@/types/IUser";
import { BillingAddressFormFields, billingSchema } from "@/containers/user/address/billing/form";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { closeForm } from "@/containers/user/account-info/personal-info-form";

type Props = {
  formData?: IUser["billing"],
  setFormData: Dispatch<SetStateAction<IUser["billing"]>>
}

export function OrderBillingAddress({ formData, setFormData }: Props) {
  const [ errors, setErrors ] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return <>
    <div className="border-bottom py-4">
      <AddressTitle collapseName={"BillingAddress"} title={"Fatura Adresi"}/>
      <div className={"collapse show " + "BillingAddress"} id="primaryAddressPreview">
        <BillingAddressData data={formData}/>
      </div>
      <div className={"collapse " + "BillingAddress"} id="primaryAddressEdit">
        <form className="row g-3 g-sm-4 needs-validation" onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form");
          const result = billingSchema.safeParse(formData);

          if (!result.success) {
            setFieldsErrors(result, setErrors);
            return;
          }
          closeForm("close1")
        }}>
          <BillingAddressFormFields
            handleChange={handleChange}
            setFormData={setFormData}
            formData={formData}
            errors={errors}
          />
          <div className="col-12">
            <div className="d-flex gap-3 pt-2 pt-sm-0">
              <button type="submit" className="btn rounded-pill btn-dark">Kaydet</button>
              <button
                id={"close1"}
                type="button" className="btn rounded-pill btn-secondary"  data-bs-toggle="collapse"
                data-bs-target={"." + "BillingAddress"} aria-expanded="true"
                aria-controls="primaryAddressPreview primaryAddressEdit">Kapat
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </>
}