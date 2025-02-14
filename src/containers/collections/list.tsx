import React from "react";
import { Items } from "./items";
import { Filter } from "./filter";
import queryString from "query-string";

export const PER_PAGE = 10

type CollectionsProps = {
  params: {
    id: string,
    category: string
  }
  searchParams: {
    orderby: string,
    order: string,
  }
}

export async function Collections({ params, searchParams }: CollectionsProps) {
  const endpoint = `/products?page=${1}&per_page=${PER_PAGE}&category=${params.id}&${queryString.stringify(searchParams)}`;
  // const products: IProduct [] | undefined = await getData(endpoint, {});
/*  const products: IProduct [] | undefined = await getProducts({
    perPage: PER_PAGE,
    page: 1,
    category: params.id,
    orderby: searchParams.orderby,
    order: searchParams.order
  })*/
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
        <Filter/>
      </div>
      <Items
        params={{
          id: params.id,
          category: params.category
        }}
        /*initialProducts={products}*/
      />
    </>
  );
}

