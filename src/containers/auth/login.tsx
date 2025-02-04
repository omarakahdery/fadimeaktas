"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/fadime-aktas-logo.svg";
import { Input } from "@/components/input";
import { IResponse } from "@/types/api/IResponse";
import { ICartUser } from "@/types/IUser";
import { cookies } from "next/headers";
import { removeCartKey } from "@/app/actions/auth";

export function Login({ cart_key }: { cart_key?: string }) {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("");
    setErrors({});

    setIsLoading(true)
    const endpoint = "api/user/login" + (cart_key ? `?cart_key=${cart_key}` : "")
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      })
      const data: IResponse<ICartUser> = await response.json()
      if (data.success) {
        window.location.href = "/"
        await removeCartKey()
      } else {
        setMessage(`${data.message}`)
      }
    } catch (error) {
      setMessage("Bir hata oluştu!")
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
            {message.length > 0 && (<div className="alert alert-primary" role="alert">
              {message}
            </div>)}

            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="position-relative mb-4">
                <Input
                  name="email"
                  type="text"
                  required
                  label={"E-posta"}
                  error={errors.email}
                  value={email} onChange={(e) => setEmail(e.target.value)}
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