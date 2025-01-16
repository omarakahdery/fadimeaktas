import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/IProduct";

export const Item = ({ product }: { product: IProduct }) => {
  return (
    <div className="col-6 col-md-4 mb-2 mb-sm-3 mb-md-0">
    <div className="animate-underline hover-effect-opacity">
      <div className="position-relative mb-3">
        <button
          type="button"
          className="btn btn-icon btn-secondary animate-pulse fs-base bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
          aria-label="Add to Wishlist">
          <i className="ci-heart animate-target"></i>
        </button>
        <Link className="d-flex bg-body-tertiary rounded-0" href={product.id.toString()}>
          <div className="ratio" style={{ "--cz-aspect-ratio": "calc(360 / 274 * 100%)" } as React.CSSProperties}>
            <Image
              width={274}
              height={360}
              src={product.images[0].src}
              alt="Image"
            />
          </div>
        </Link>

      </div>
      <div className="nav mb-2">
        <Link className="nav-link min-w-0 text-dark-emphasis p-0" href={product.id.toString()}>
          <span className="text-uppercase">{product.name}</span>
        </Link>
      </div>

      <div className="fw-normal text-dark fs-sm mb-2">₺{product.price}.00,00
        <del className="fs-sm fw-normal ms-2 text-body-tertiary">
          {" "}₺{product.regular_price}.200,00
        </del>
      </div>

    </div>
  </div>
  )
}

