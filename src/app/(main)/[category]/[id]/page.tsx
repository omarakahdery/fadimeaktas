import { Collections } from "@/containers/collections/list";
import Link from "next/link";
import { Suspense } from "react";

export default async function CategoryPage
({
   params,
 }: {
  params: Promise<{ id: string, category: string }>
}) {
  const { id, category } = await params

  return (
    <main className="content-wrapper">
      <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb text-dark fs-xs">
          <li className="breadcrumb-item"><Link href="/gelinlik-frontend/public">Ana Sayfa</Link></li>
          <li className="breadcrumb-item" aria-current="page">Gelinlik</li>
        </ol>
      </nav>
      <h1 className="h3 container pb-3 pb-lg-4">Gelinlik</h1>
      <section className="container">
        <Suspense fallback={
          <div style={{ height: "50vh" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        }>
          <Collections params={{
            id, category
          }}/>
        </Suspense>
      </section>
    </main>
  );
}
