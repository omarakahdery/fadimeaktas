import { Collections } from "@/containers/collections";
import Link from "next/link";
import { Suspense } from "react";




export default async function CollectionsPage() {
  return (
    <main className="content-wrapper">
      <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb text-dark fs-xs">
          <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
          <li className="breadcrumb-item" aria-current="page">Gelinlik</li>
        </ol>
      </nav>
      <h1 className="h3 container pb-3 pb-lg-4">Gelinlik</h1>
      <section className="container">
        {/* <pre>{JSON.stringify(products[0], null, 4)}</pre>;*/}
        <Suspense fallback={<p>Yükleniyor...</p>}>
          <Collections />
        </Suspense>
      </section>

    </main>

  );
}
