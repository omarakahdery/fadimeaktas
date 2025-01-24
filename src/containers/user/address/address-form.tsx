"use client"
import { useState } from "react";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { closeForm } from "@/containers/user/account-info/personal-info-form";
import { z } from "zod";
import { IUser } from "@/types/IUser";


const userSchema = z.object({
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
  addressOne: z.string().min(5, "Adres en az 5 karakter olmalıdır."),
});

export function ShippingAddressForm({ addressData, collapseName }: {
  collapseName: string,
  addressData?: IUser["shipping"]
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

    // Validate form fields using zod schema
    const result = userSchema.safeParse({
      ...formData
    });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/2", {
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
            last_name: formData.lastName
          }
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(`Customer created successfully! ID: ${data.customer.id}`)
        router.refresh()
        closeForm("close2")
      } else {
        setMessage(`Error: ${data.error}`)
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


export function BillingAddressForm({ addressData, collapseName }: {
  collapseName: string,
  addressData?: IUser["shipping"]
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

    // Validate form fields using zod schema
    const result = userSchema.safeParse({
      ...formData
    });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/2", {
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
            last_name: formData.lastName
          }
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(`Customer created successfully! ID: ${data.customer.id}`)
        router.refresh()
        closeForm("close1")
      } else {
        setMessage(`Error: ${data.error}`)
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
          <button id={"close1"} type="button" className="btn rounded-pill btn-secondary" data-bs-toggle="collapse"
                  data-bs-target={"." + collapseName} aria-expanded="true"
                  aria-controls="primaryAddressPreview primaryAddressEdit">Vazgeç
          </button>
        </div>
      </div>
    </form>
  </>
}


function FormFields({ formData, errors, handleChange }: {
  formData: {
    firstName: string,
    lastName: string,
    state: string,
    city: string,
    addressOne: string
  },
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