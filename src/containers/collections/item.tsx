import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/IProduct";
import { formatCurrency } from "@/lib/helper/format-currency";
import React from "react";

export const Item = ({ product }: { product: IProduct }) => {
  return (
    <div className="col-6 col-md-4 mb-2 mb-sm-3 mb-md-0">
      {/*    {product.id === 232 && <pre>
        {JSON.stringify(product, null, 2)}
      </pre>}*/}
      <div className="animate-underline hover-effect-opacity">
        <div className="position-relative mb-3">
          <Link className="d-flex bg-body-tertiary rounded-0"
                href={`/urun/${product.slug || "urun-adi"}/${product.id}`}>
            <div className="ratio"
                 style={{ "--cz-aspect-ratio": "calc(900 / 600 * 100%)" } as React.CSSProperties}
            >
              <Image
                width={600}
                height={900}
                src={product.images[0].src}
                alt="Image"
              />
            </div>
          </Link>
        </div>
        <div className="nav mb-2">
          <Link className="nav-link min-w-0 text-dark-emphasis p-0"
                href={`/urun/${product.slug || "urun-adi"}/${product.id}`}>
            <span className="text-uppercase">{product.name}</span>
          </Link>
        </div>
        <div className="fw-normal text-dark fs-sm mb-2">{formatCurrency(Number(product.price))}
          {Number(product?.regular_price) > Number(product?.price) &&
              <del className="fs-sm fw-normal ms-2 text-body-tertiary">
                {" "}{formatCurrency(Number(product.regular_price))}
              </del>
          }
        </div>

      </div>
    </div>
  )
}

