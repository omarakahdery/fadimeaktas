import { Collections } from "@/containers/collections/list";
import Link from "next/link";
import { Suspense } from "react";
import ErrorBoundary from "@/components/error-boundary";
/*
import { IProduct } from "@/types/IProduct";
interface ProductsPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
*/


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
        <Suspense fallback={<p>Yükleniyor...</p>}>
          <Collections />
        </Suspense>
      </section>
    </main>
  );
}
