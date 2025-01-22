"use client"
import { IUser } from "@/types/IUser";
import { Input } from "@/components/input";
import { useState } from "react";
import { z } from "zod";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { useRouter } from "next/navigation";


const userSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
});

export xfunction PersonalInfoForm({ user }: { user?: IUser }) {
  const [ firstName, setFirstName ] = useState(user?.first_name || "")
  const [ lastName, setLastName ] = useState(user?.last_name || "")
  const [ email, setEmail ] = useState(user?.email || "")

  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const router = useRouter()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("");
    setErrors({});

    // Validate form fields using zod schema
    const result = userSchema.safeParse({ email, firstName, lastName });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName, lastName }),
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

  return (
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
            name={"email"}
            type="text"
            label={"E-posta"}
            value={email}
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex gap-3 pt-2 pt-sm-0">
          <button disabled={isLoading} type="submit" className="btn rounded-pill btn-dark">Kaydet</button>
          <button id={"close"} type="button" className="btn rounded-pill btn-secondary" data-bs-toggle="collapse"
                  data-bs-target=".basic-info"
                  aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Vazgeç
          </button>
        </div>
      </div>
    </form>
  )
}


export function closeForm() {
  //@ts-ignore
  const btn: HTMLButtonElement = document.getElementById("close");
  btn.click();
}
