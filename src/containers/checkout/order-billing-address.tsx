import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/input";
import { OrderAddress } from "@/containers/checkout/checkout-content";

type Props = {
  formData?: OrderAddress,
  setFormData: Dispatch<SetStateAction<OrderAddress>>
  errors: Record<string, string>
}

export function OrderBillingAddress({ formData, setFormData, errors }: Props) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return <>
    <div className="border-bottom py-4">
      <div className={"row  g-3 g-sm-4"}>
        <h2 className="h6 mb-2">İletişim bilgileri</h2>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"email"}
              type="text"
              label={"E-posta"}
              value={formData?.email || ""}
              error={errors.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"phone"}
              type="text"
              label={"Telefon"}
              value={formData?.phone || ""}
              error={errors.phone}
              onChange={handleChange}
              placeholder="(5__) ___ __ __"
              data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 (&quot;, &quot;)&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 2, 2]}"
            />
          </div>
        </div>
        <h2 className="h6 mb-2">Teslimat Adresi</h2>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"first_name"}
              type="text"
              label={"Ad"}
              value={formData?.first_name || ""}
              error={errors.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"last_name"}
              type="text"
              label={"Soyad"}
              value={formData?.last_name || ""}
              error={errors.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"state"}
              type="text"
              label={"İl"}
              value={formData?.state || ""}
              error={errors.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="position-relative">
            <Input
              name={"city"}
              type="text"
              label={"İlçe"}
              value={formData?.city || ""}
              error={errors.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="position-relative">
            <label htmlFor="psa-address" className="form-label">Açık Adres</label>
            <textarea
              onChange={(e) => {
                const { value } = e.target;
                setFormData((prev) => ({ ...prev, address_1: value }));
              }}
              className="form-control rounded-6" id="psa-address"
              value={formData?.address_1}
            />
            {errors.address_1 && (
              <p className="text-primary">{errors.address_1}</p>
            )}
          </div>
        </div>
        <div className="form-check">
          <input
            onChange={(e) => {
              const { checked } = e.target;
              setFormData((prev) => {
                const { isAddressSame, ...rest } = prev;
                return {
                  isAddressSame: checked,
                  ...rest,
                }
              });
            }}
            className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Teslimat Adresi Fatura Adresi olarak kullan
          </label>
        </div>
        {!formData?.isAddressSame && (
          <>
            <h2 className="h6 mb-2">Fatura Adresi</h2>
            <div className="col-sm-6">
              <div className="position-relative">
                <Input
                  name={"first_name_billing"}
                  type="text"
                  label={"Ad"}
                  value={formData?.first_name_billing || ""}
                  error={errors.first_name_billing}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="position-relative">
                <Input
                  name={"last_name_billing"}
                  type="text"
                  label={"Soyad"}
                  value={formData?.last_name_billing || ""}
                  error={errors.last_name_billing}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="position-relative">
                <Input
                  name={"state_billing"}
                  type="text"
                  label={"İl"}
                  value={formData?.state_billing || ""}
                  error={errors.state_billing}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="position-relative">
                <Input
                  name={"city_billing"}
                  type="text"
                  label={"İlçe"}
                  value={formData?.city_billing || ""}
                  error={errors.city_billing}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="position-relative">
                <label htmlFor="psa-address" className="form-label">Açık Adres</label>
                <textarea
                  onChange={(e) => {
                    const { value } = e.target;
                    setFormData((prev) => ({ ...prev, address_1_billing: value }));
                  }}
                  className="form-control rounded-6" id="psa-address"
                  value={formData?.address_1_billing}
                />
                {errors.address_1_billing && (
                  <p className="text-primary">{errors.address_1_billing}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </>
}