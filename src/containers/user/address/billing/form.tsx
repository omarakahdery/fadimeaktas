"use client";
import { z } from "zod";
import { IUser } from "@/types/IUser";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { IResponse } from "@/types/api/IResponse";
import { closeForm } from "@/containers/user/account-info/personal-info-form";
import { Input } from "@/components/input";
import { FormFields } from "@/containers/user/address/address-form";

export const billingSchema = z.object({
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  address_1: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz.").optional()
});


export function BillingAddressForm({ addressData, collapseName, userId }: {
  collapseName: string,
  addressData?: IUser["shipping"]
  userId?: string
}) {
  const [ formData, setFormData ] = useState<IUser["billing"]>({
    first_name: addressData?.first_name || "",
    last_name: addressData?.last_name || "",
    address_1: addressData?.address_1 || "",
    state: addressData?.state || "",
    city: addressData?.city || "",
    email: addressData?.email || "",
  });

  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("");
    setErrors({});

    const result = billingSchema.safeParse(formData);

    if (!result.success) {
      setFieldsErrors(result, setErrors);
      return;
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/" + userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          billing: {
            city: formData.city,
            state: formData.state,
            address_1: formData.address_1,
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email
          }
        }),
      })

      const resData: IResponse<IUser> = await response.json()
      if (resData.success) {
        setMessage(`Customer created successfully! ID: ${resData?.data?.id}`)
        router.refresh()
        closeForm("close1")
      } else {
        setMessage(`Error: ${resData.message}`)
      }
    } catch (error) {
      setMessage("An error occurred while creating the customer.")
    } finally {
      setIsLoading(false)
    }
  }

  return <>
    <form className="row g-3 g-sm-4 needs-validation" onSubmit={handleSubmit}>
      <BillingAddressFormFields
        handleChange={handleChange}
        setFormData={setFormData}
        formData={formData}
        errors={errors}
      />
      <div className="col-12">
        <div className="d-flex gap-3 pt-2 pt-sm-0">
          <button disabled={isLoading} type="submit" className="btn rounded-pill btn-dark">Kaydet</button>
          <button id={"close1"} type="button" className="btn rounded-pill btn-secondary" data-bs-toggle="collapse"
                  data-bs-target={"." + collapseName} aria-expanded="true"
                  aria-controls="primaryAddressPreview primaryAddressEdit">Vazgeç
          </button>
        </div>
      </div>
    </form>
  </>
}

export const BillingAddressFormFields = ({ formData, handleChange, setFormData, errors }: {
  formData?: IUser["billing"],
  setFormData: Dispatch<SetStateAction<IUser["billing"]>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: Record<string, string>
}) => {
  return <>
    <FormFields
      formData={formData}
      errors={errors}
      handleChange={handleChange}
    />
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

  </>
}
