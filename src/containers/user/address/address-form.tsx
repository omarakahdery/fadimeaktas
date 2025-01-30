"use client"
import { useState } from "react";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { closeForm } from "@/containers/user/account-info/personal-info-form";
import { z } from "zod";
import { IUser } from "@/types/IUser";
import { IResponse } from "@/types/api/IResponse";


const shippingSchema = z.object({
  firstName: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  lastName: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  addressOne: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
});

export function ShippingAddressForm({ addressData, collapseName, userId }: {
  collapseName: string,
  addressData?: IUser["shipping"]
  userId?: string
}) {
  const [ formData, setFormData ] = useState({
    firstName: addressData?.first_name || "",
    lastName: addressData?.last_name || "",
    addressOne: addressData?.address_1 || "",
    state: addressData?.state || "",
    city: addressData?.city || "",
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

    const result = shippingSchema.safeParse(formData);

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
          shipping: {
            city: formData.city,
            state: formData.state,
            address_1: formData.addressOne,
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }),
      })

      const resData: IResponse<IUser> = await response.json()

      if (resData.success) {
        setMessage(`Customer created successfully! ID: ${resData?.data?.id}`)
        closeForm("close2")
        router.refresh()
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
      <FormFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <div className="col-sm-12">
        <div className="position-relative">
          <label htmlFor="psa-address" className="form-label">Açık Adres</label>
          <textarea
            onChange={(e) => {
              const { value } = e.target;
              setFormData((prev) => ({ ...prev, addressOne: value }));
            }}
            className="form-control rounded-6" id="psa-address"
            value={formData.addressOne}
          />
          {errors.addressOne && (
            <p className="text-primary">{errors.addressOne}</p>
          )}
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex gap-3 pt-2 pt-sm-0">
          <button disabled={isLoading} type="submit" className="btn rounded-pill btn-dark">Kaydet</button>
          <button id={"close2"} type="button" className="btn rounded-pill btn-secondary" data-bs-toggle="collapse"
                  data-bs-target={"." + collapseName} aria-expanded="true"
                  aria-controls="primaryAddressPreview primaryAddressEdit">Vazgeç
          </button>
        </div>
      </div>
    </form>
  </>
}

const billingSchema = z.object({
  firstName: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  lastName: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  state: z.string().min(3, "İl en az 3 karakter olmalıdır."),
  city: z.string().min(3, "İlçe en az 3 karakter olmalıdır."),
  addressOne: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz.").optional()
});

export function BillingAddressForm({ addressData, collapseName, userId }: {
  collapseName: string,
  addressData?: IUser["shipping"]
  userId?: string
}) {
  const [ formData, setFormData ] = useState({
    firstName: addressData?.first_name || "",
    lastName: addressData?.last_name || "",
    addressOne: addressData?.address_1 || "",
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
            address_1: formData.addressOne,
            first_name: formData.firstName,
            last_name: formData.lastName,
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
            value={formData.email}
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
              setFormData((prev) => ({ ...prev, addressOne: value }));
            }}
            className="form-control rounded-6" id="psa-address"
            value={formData.addressOne}
          />
          {errors.addressOne && (
            <p className="text-primary">{errors.addressOne}</p>
          )}
        </div>
      </div>
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


function FormFields({ formData, errors, handleChange, textarea }: {
  formData: {
    firstName: string,
    lastName: string,
    state: string,
    city: string,
    addressOne: string
  },
  textarea?: React.ReactNode,
  errors: Record<string, string>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return <>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"firstName"}
          type="text"
          label={"Ad"}
          value={formData.firstName}
          error={errors.firstName}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"lastName"}
          type="text"
          label={"Soyad"}
          value={formData.lastName}
          error={errors.lastName}
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
          value={formData.state}
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
          value={formData.city}
          error={errors.city}
          onChange={handleChange}
        />
      </div>
    </div>
  </>
}