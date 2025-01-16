"use client"
import { Item } from "./item";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/IProduct";
import { useInView } from "react-intersection-observer";
import { getData } from "@/lib/api/api-fun";
import { PER_PAGE } from "@/containers/collections/list";


export const Items = ({ initialProducts }: { initialProducts?: IProduct[] }) => {
  const [ products, setInitialProducts ] = useState<IProduct[]>(initialProducts || [])
  const [ offset, setOffset ] = useState(2)
  const [ haveMoreData, setHaveMoreData ] = useState(true)

  const { ref, inView } = useInView()

  const loadMoreUsers = async () => {
    const apiProducts: IProduct [] | undefined = await getData(`/products?page=${offset}&per_page=${PER_PAGE}`);
    setHaveMoreData(apiProducts?.length === PER_PAGE)
    setInitialProducts(prevState => [ ...prevState, ...(apiProducts || []) ])
    setOffset(offset => offset + 1)
  }
  useEffect(() => {
    if (inView) {
      loadMoreUsers()
    }
  }, [ inView ])

  return (
    <div className="row gy-4 gy-md-5 pb-4 pb-md-5">
      {products.map((product, index) => (
        <Item key={product.id} product={product}/>
      ))}
      {haveMoreData && (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          ref={ref}
        >
          <span className=" d-flex animate-target rotating-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                 className="bi bi-vignette"
                 viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
              <path
                d="M8.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.683-6.281a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m-3.5 6.062a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m4.598-4.598a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866m-6.062 3.5a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866M11.5 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6.281 1.683a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m-6.062-3.5a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m4.598 4.598a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5m-3.5-6.062a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5"/>
            </svg>
          </span>
        </div>

      )}
      {/*<button className={"btn btn-dark rounded-pill"} onClick={loadMoreUsers}>Daha fazla yükle</button>*/}
    </div>

  )
}