"use client";
import Link from "next/link"
import Image from "next/image";
import { getData } from "@/lib/api/api-fun";
import { ICart } from "@/types/ICart";
import { RemoveItemBtn } from "@/components/cart/remove-item-btn";
import { IncreaseDecreaseQ } from "@/components/cart/increase-decrease-q";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/helper/format-currency";

export const CartModel = ({ token }: { token?: string }) => {
  /*  const [data, setData] = useState<ICart | null>(null);

    useEffect(() => {
      (async () => {
        try {
          const fetchedData = await getData<ICart>("/cart?cart_key=903d882be54f000d83fb7710ff3059");
          setData(fetchedData);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      })();
    }, []);*/
  /*  const token = (await cookies()).get("token")?.value;
    const data = await getData<ICart>("/cart?token=" + token);*/

  const [ cartData, setCartData ] = useState<ICart | undefined>(undefined)

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const data = await getData<ICart>("/cart?token=" + token)
        setCartData(data)
      } catch (err) {
        console.error(err)
      } finally {
      }
    }
    fetchCartData()
  }, [])
  return (
    <>
      {/* Shopping cart offcanvas */}
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="shoppingCart"
        tabIndex={-1}
        aria-labelledby="shoppingCartLabel"
        style={{ width: "500px" }}
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id="shoppingCartLabel">
              Sepetim
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>

        {/* Items */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
          {cartData?.items?.map((item, index) => (
            <div className="d-flex align-items-center" key={index}>
              <Link
                aria-label="Close"
                className="flex-shrink-0"
                href={`/product/${item.id}`}
              >
                <Image
                  src={item.featured_image}
                  className="bg-body-tertiary rounded"
                  width={80}
                  height={80}
                  alt={item.name}
                />
              </Link>
              <div className="h-100 w-100 d-flex justify-content-between flex-column min-w-0 ps-3">
                <div>
                  <div className="nav mb-2">
                    <Link
                      aria-label="Close"
                      className="nav-link min-w-0 text-dark-emphasis p-0"
                      href={`/product/${item.id}`}
                    >
                      <span className="text-uppercase">{item.name}</span>
                    </Link>
                  </div>
                  <div className="fw-normal fs-sm d-flex align-items-center">{formatCurrency(Number(item?.totals?.total))}
                  </div>
                  <div className="w-100 d-flex justify-content-between mt-2">
                    <IncreaseDecreaseQ
                      item_key={item?.item_key}
                      quantity={item?.quantity.value}
                      token={token}
                    />
                    <RemoveItemBtn token={token} item_key={item?.item_key}/>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="offcanvas-header mt-auto flex-column align-items-start">
            <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
              <span className="text-light-emphasis">Toplam:</span>
              <span className=" mb-0">{formatCurrency(Number(cartData?.totals?.total))}</span>

            </div>
            <div className="d-flex w-100 gap-3">
              {/* <Link  className="btn btn-lg btn-secondary w-100" href="/">
            <span data-bs-dismiss="offcanvas" aria-label="Close">
              İndirim Kodu Gir
            </span>
            </Link>*/}
              <Link aria-label="Close" className="btn rounded-pill btn-lg btn-dark w-100" href="/odeme">
            <span data-bs-dismiss="offcanvas" aria-label="Close">
              Sepeti Onayla
            </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
