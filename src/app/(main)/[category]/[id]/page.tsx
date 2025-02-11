import { Collections } from "@/containers/collections/list";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { CollectionTitle } from "@/containers/collections/title";
import { use } from "react"

export const revalidate = 60
export default function CategoryPage({
                                       params,
                                       searchParams,
                                     }: {
  params: Promise<{ id: string; category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = use(params)
  const resolvedSearchParams = use(searchParams)

  const { id, category } = resolvedParams
  const { orderby, order } = resolvedSearchParams

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