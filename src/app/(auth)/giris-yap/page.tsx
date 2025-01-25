"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/fadime-aktas-logo.svg";
import { Input } from "@/components/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setFieldsErrors } from "@/lib/form/set-fields-errors";
import { z } from "zod";

const signupSchema = z.object({
  username: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalıdır."),
  password: z
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .max(20, "Şifre en fazla 20 karakter olabilir."),
});

export default function LoginPage() {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("");
    setErrors({});

    const result = signupSchema.safeParse({ username, password });

    setFieldsErrors(result, setErrors);

    setIsLoading(true)
    try {
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(`Customer created successfully! ID: ${data.customer.id}`)
        router.push("/")
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
    <>

      <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: "1920px" }}>

        <div className="d-lg-flex">

          <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ "maxWidth": "416px" }}>

            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <Link className={"navbar-brand"} href={"/"}>
                <Image
                  width={180}
                  height={180}
                  src={Logo}
                  alt={"ddd"}
                />
              </Link>
            </header>

            <h1 className="h2 mt-auto"> Giriş Yap</h1>
            <div className="nav fs-sm mb-3 mb-lg-4">
              Hesabın yok mu?
              <Link className="nav-link text-decoration-underline p-0 ms-2" href="/kaydol">Hesap Oluştur</Link>
            </div>
            {/*Form*/}
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="position-relative mb-4">
                <Input
                  name="username"
                  label="Kullanıcı Adı"
                  type="text"
                  value={username}
                  error={errors.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Input
                  name="password"
                  type="password"
                  label="Şifre"
                  error={errors.password}
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/*           <div className="d-flex flex-column gap-2 mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="privacy" required/>
                  <label htmlFor="privacy" className="form-check-label">
                    <Link className="text-dark-emphasis" href="/">Gizlilik Politikası</Link>
                    Okudum ve kabul ediyorum
                  </label>
                </div>
              </div>*/}
              <button type="submit" className="btn rounded-pill btn-lg btn-dark w-100">
                Giriş Yap
                <i className="ci-chevron-right fs-lg ms-1 me-n1"></i>
              </button>

            </form>

            <footer className="mt-auto">

            </footer>
          </div>


          <div className="offcanvas-lg offcanvas-end w-100 py-lg-4 ms-auto" id="benefits"
               style={{ "maxWidth": "1034px" }}>

            <div
              className="offcanvas-body position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
              <div style={{ background: "#b3b6b7" }}
                   className="position-absolute rounded-5  top-0 start-0 w-100 h-100 d-none d-lg-block">

              </div>
              <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">

              </div>
            </div>

          </div>
        </div>

      </main>

    </>

  )
}