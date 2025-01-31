import { Collections } from "@/containers/collections/list";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { CollectionTitle } from "@/containers/collections/title";

export default async function CategoryPage
({
   params,
 }: {
  params: Promise<{ id: string, category: string }>
}) {
  const { id, category } = await params

  return (
    <main className="content-wrapper">
      <CollectionTitle
        params={{
          id, category
        }}
      />
      <section className="container">
        <Suspense fallback={
          <LoadingSpinner/>
        }>
          <Collections params={{
            id, category
          }}/>
        </Suspense>
      </section>
    </main>
  );
}
