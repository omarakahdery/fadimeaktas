"use client"
import { IUser } from "@/types/IUser";
import { Input } from "@/components/input";
import { useState } from "react";
import { z } from "zod";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { useRouter } from "next/navigation";

export function PersonalInfoForm({ user }: { user?: IUser }) {
  const [ formData, setFormData ] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
  });

  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    /*setMessage("");*/
    setErrors({});

    const result = userSchema.safeParse({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
    });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("/api/user/me/3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      })

      const data = await response.json()

      if (data.success) {
        /*setMessage(`Customer created successfully! ID: ${data.customer.id}`)*/
        router.refresh()
        closeForm("close")
      } else {
        /*setMessage(`Error: ${data.error}`)*/
      }
    } catch (error) {
      /*setMessage("An error occurred while creating the customer.")*/
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
            name={"email"}
            type="text"
            label={"E-posta"}
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
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

const userSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  first_name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
  last_name: z.string().min(3, "Soyad en az 3 karakter olmalıdır."),
});

export function closeForm(id: string) {
  //@ts-ignore
  const btn: HTMLButtonElement = document.getElementById(id);
  btn.click();
}
