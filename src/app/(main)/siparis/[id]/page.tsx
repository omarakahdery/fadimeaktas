import Link from "next/link";

export default function OrderPage() {
  return <section style={{ marginTop: "80px" }}>
    <main className="container content-wrapper">
      <div className="row align-items-center justify-content-center">
        <div className="alert alert-success col-6" role="alert">
          Siparişiniz başarıyla oluşturuldu.
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <Link className={"btn btn-dark w-auto"} href={"/"}>
          Alışverişe devam et
          <i className="ci-arrow-up-right"></i>
        </Link>
      </div>
    </main>
  </section>
}