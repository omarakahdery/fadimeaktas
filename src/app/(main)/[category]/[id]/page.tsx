import { Collections } from "@/containers/collections/list";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { CollectionTitle } from "@/containers/collections/title";

export default async function CategoryPage({
                                             params,
                                             searchParams,
                                           }: {
  params: { id: string; category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { id, category } = params
  const { orderby, order } = searchParams

  return (
    <main className="content-wrapper">
      <CollectionTitle params={{ id, category }} />
      <section className="container">
        <Suspense fallback={<LoadingSpinner />}>
          <Collections
            searchParams={{
              orderby: orderby as string,
              order: order as string,
            }}
            params={{ id, category }}
          />
        </Suspense>
      </section>
    </main>
  )
}
