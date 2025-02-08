import { Collections } from "@/containers/collections/list";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { CollectionTitle } from "@/containers/collections/title";
import queryString from "query-string";

export default async function CategoryPage
({
   params,
   searchParams
 }: {
  params: Promise<{ id: string, category: string }>
  searchParams: {
    orderby: string,
    order: string,
  }
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
          <Collections
            searchParams={searchParams}
            params={{
              id, category
            }}/>
        </Suspense>
      </section>
    </main>
  );
}
