"use client"
import { Item } from "./item";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/IProduct";
import { useInView } from "react-intersection-observer";
import { getData } from "@/lib/api/api-fun";
import { PER_PAGE } from "@/containers/collections/list";
import { useSearchParams } from "next/navigation";

type Props = {
  params: {
    id: string,
    category: string
  }
  initialProducts?: IProduct[]
}


export const Items = ({ initialProducts, params }: Props) => {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<IProduct[]>(initialProducts || [])
  const [offset, setOffset] = useState(2)
  const [haveMoreData, setHaveMoreData] = useState(true)

  const { ref, inView } = useInView()

  const filterQuery = searchParams.toString()

  const loadMoreProducts = async () => {
    const apiProducts: IProduct[] | undefined = await getData(
      `/products?page=${offset}&per_page=${PER_PAGE}&category=${params.id}&${filterQuery}`,
    )
    setHaveMoreData(apiProducts?.length === PER_PAGE)
    setProducts((prevState) => [...prevState, ...(apiProducts || [])])
    setOffset((offset) => offset + 1)
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts()
    }
  }, [inView, loadMoreProducts])

  useEffect(() => {
    const fetchInitialProducts = async () => {
      const apiProducts: IProduct[] | undefined = await getData(
        `/products?page=1&per_page=${PER_PAGE}&category=${params.id}&${filterQuery}`,
      )
      setProducts(apiProducts || [])
      setOffset(2)
      setHaveMoreData(apiProducts?.length === PER_PAGE)
    }
    fetchInitialProducts()
  }, [filterQuery])

  return (
    <div className="row gy-4 gy-md-5 pb-4 pb-md-5">
      {products.map((product) => (
        <Item key={product.id} product={product} />
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
