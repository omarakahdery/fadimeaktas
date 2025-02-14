/*
"use client"
import { Item } from "./item";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/IProduct";
import { useInView } from "react-intersection-observer";
import { PER_PAGE } from "@/containers/collections/list";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/api/get-data-wc";
import queryString from "query-string";

type Props = {
  params: {
    id: string,
    category: string
  }
  initialProducts?: IProduct[]
}


export const Items = ({ initialProducts, params }: Props) => {
  const searchParams = useSearchParams()
  const [ products, setProducts ] = useState<IProduct[]>(initialProducts || [])
  const [ offset, setOffset ] = useState(2)
  const [ haveMoreData, setHaveMoreData ] = useState(true)

  const { ref, inView } = useInView()

  const filterQuery = searchParams.toString()

  const loadMoreProducts = async () => {
    /!*    const apiProducts: IProduct[] | undefined = await getData(
          `/products?page=${offset}&per_page=${PER_PAGE}&category=${params.id}&${filterQuery}`,
        )*!/
    const apiProducts: IProduct[] | undefined = await getProducts({
      perPage: PER_PAGE,
      page: offset,
      category: params.id,
      orderby: String(queryString.parse(filterQuery).orderby),
      order: String(queryString.parse(filterQuery).order)
    })
    setHaveMoreData(apiProducts?.length === PER_PAGE)
    setProducts((prevState) => [ ...prevState, ...(apiProducts || []) ])
    setOffset((offset) => offset + 1)
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts()
    }
  }, [ inView, loadMoreProducts ])

  useEffect(() => {
    const fetchInitialProducts = async () => {
      /!*    const apiProducts: IProduct[] | undefined = await getData(
            `/products?page=1&per_page=${PER_PAGE}&category=${params.id}&${filterQuery}`,
          )*!/
      const apiProducts: IProduct[] | undefined = await getProducts({
        perPage: PER_PAGE,
        page: 1,
        category: params.id,
        orderby: String(queryString.parse(filterQuery).orderby),
        order: String(queryString.parse(filterQuery).order)
      })
      setProducts(apiProducts || [])
      setOffset(1)
      setHaveMoreData(apiProducts?.length === PER_PAGE)
    }
    fetchInitialProducts()
  }, [ filterQuery ])

  return (
    <div className="row gy-4 gy-md-5 pb-4 pb-md-5">
      {/!* wwww
             <pre>
        {JSON.stringify(products, null, 2)}
      </pre>
      xxxxxxxxxxxxxxx
      <pre>
        {JSON.stringify(initialProducts, null, 2)}
      </pre>*!/}
      {products?.map((product) => (
        <Item key={product.id} product={product}/>
      ))}
      {haveMoreData && (
        <div className="w-100 d-flex justify-content-center align-items-center" ref={ref}>
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  )
}
*/
