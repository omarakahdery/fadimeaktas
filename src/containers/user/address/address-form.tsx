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

export function AddressForm({ shippingAddress, collapseName }: {
  collapseName: string,
  shippingAddress?: IUser["shipping"]
}) {
  const [ firstName, setFirstName ] = useState(shippingAddress?.first_name || "")
  const [ lastName, setLastName ] = useState(shippingAddress?.last_name || "")
  const [ addressOne, setAddressOne ] = useState(shippingAddress?.address_1 || "")
  const [ state, setState ] = useState(shippingAddress?.state || "")
  const [ city, setCity ] = useState(shippingAddress?.city || "")

  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("");
    setErrors({});

    // Validate form fields using zod schema
    const result = userSchema.safeParse({ city, state, addressOne, firstName, lastName });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipping: {
            city, state,
            address_1: addressOne,
            first_name: firstName,
            last_name: lastName
          }
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(`Customer created successfully! ID: ${data.customer.id}`)
        router.refresh()
        closeForm()
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
      <div className="col-sm-6">
        <div className="position-relative">
          <Input
            name={"firstName"}
            type="text"
            label={"Ad"}
            value={firstName}
            error={errors.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="position-relative">
          <Input
            name={"lastName"}
            type="text"
            label={"Soyad"}
            value={lastName}
            error={errors.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="col-sm-6">
        <div className="position-relative">
          <Input
            name={"state"}
            type="text"
            label={"İl"}
            value={state}
            error={errors.state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="position-relative">
          <Input
            name={"city"}
            type="text"
            label={"İlçe"}
            value={city}
            error={errors.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>


      <div className="col-sm-12">
        <div className="position-relative">
          <label htmlFor="psa-address" className="form-label">Açık Adres</label>
          <textarea
            onChange={(e) => setAddressOne(e.target.value)}
            className="form-control" id="psa-address"
            value={addressOne}
          />
          {errors.addressOne && (
            <p className="text-primary">{errors.addressOne}</p>
          )}
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex gap-3 pt-2 pt-sm-0">
          <button disabled={isLoading} type="submit" className="btn rounded-pill btn-dark">Kaydet</button>
          <button id={"close"} type="button" className="btn rounded-pill btn-secondary" data-bs-toggle="collapse"
                  data-bs-target={"." + collapseName} aria-expanded="true"
                  aria-controls="primaryAddressPreview primaryAddressEdit">Vazgeç
          </button>
        </div>
      </div>
    </form>
  </>
}