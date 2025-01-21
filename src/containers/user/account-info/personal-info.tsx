"use client"
import { IUser } from "@/types/IUser";
import { Input } from "@/components/input";
import { Suspense, useState } from "react";
import { z } from "zod";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { useRouter } from "next/navigation";

const userSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
});

export function PersonalInfo({ user }: { user?: IUser }) {
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
    <div className="border-bottom py-4">
      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
        <h2 className="h6 mb-0">Kişisel bilgiler</h2>
        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href=".basic-info"
           data-bs-toggle="collapse" aria-expanded="false" aria-controls="basicInfoPreview basicInfoEdit">Düzenle</a>
      </div>
      <div className="collapse basic-info show" id="basicInfoPreview">
        <Suspense fallback={<p></p>}>
          <ul className="list-unstyled fs-sm m-0">
            <li>{user?.first_name} {user?.last_name}</li>
            <li className="mb-1">{user?.email}</li>
          </ul>
        </Suspense>
      </div>
      <div className="collapse basic-info" id="basicInfoEdit">
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
          {/* <div className="col-sm-6">
            <label htmlFor="phone" className="form-label">Telefon numarası</label>
            <div className="position-relative">
              <input type="text" className="form-control" id="phone"
                     data-input-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 (&quot;, &quot;)&quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 0, 3, 2, 2]}"
                     placeholder="+90 (___) ___ __ __" value="+90 (535) 348 95 72" required/>
              <div className="invalid-feedback">Please enter your phone number!</div>
            </div>
          </div>*/}
          <div className="col-12">
            <div className="d-flex gap-3 pt-2 pt-sm-0">
              <button disabled={isLoading} type="submit" className="btn btn-dark">Kaydet</button>
              <button id={"close"} type="button" className="btn btn-secondary" data-bs-toggle="collapse"
                      data-bs-target=".basic-info"
                      aria-expanded="true" aria-controls="basicInfoPreview basicInfoEdit">Vazgeç
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

function closeForm() {
  //@ts-ignore
  const btn: HTMLButtonElement = document.getElementById("close");
  btn.click();
}