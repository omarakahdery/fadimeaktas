import React from "react";
import { IProduct } from "@/types/IProduct";
import { Items } from "./items";
import { Filter } from "./filter";
import { getData } from "@/lib/api/api-fun";

export const PER_PAGE = 3


export async function Collections() {
  const products: IProduct [] = await getData(`/products?page=${1}&per_page=${PER_PAGE}`);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
        <Filter/>
      </div>
      <Items initialProducts={products}/>
    </>
  );
}


export const imges: {
  id: number,
  name: string,
  src: string
}[] = [
  {
    id: 0,
    name: "Georges Hobeika",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-72.jpeg",
  },
  {
    id: 435,
    name: "Tony Ward",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-63.jpeg",
  },
  {
    id: 45,
    name: "Dior",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-59.jpeg",
  },
  {
    id: 3,
    name: "Stephane Rolland",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-71.jpeg"
  },
  {
    id: 344,
    name: "Stephane Rolland",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-59.jpeg"
  },
  {
    id: 1,
    name: "Schiaparelli",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-69.jpeg",
  },
  {
    id: 32,
    name: "Dior",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-56.jpeg"
  },
  {
    id: 2,
    name: "Georges Hobeika",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-66.jpeg",
  },
  {
    id: 3112,
    name: "Schiaparelli",
    src: "https://weddedwonderland.com/wp-content/uploads/2024/01/image-57.jpeg"
  }
]
