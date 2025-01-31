"use server";
import Link from "next/link"
import Image from "next/image";
import { getData } from "@/lib/api/api-fun";
import { ICart } from "@/types/ICart";
import { RemoveItemBtn } from "@/components/cart/remove-item-btn";
import { IncreaseDecreaseQ } from "@/components/cart/increase-decrease-q";
import { cookies } from "next/headers";
import { formatCurrency } from "@/lib/helper/format-currency";
import { Amount } from "@/components/amount";

export const Cart = async () => {
  const token = (await cookies()).get("token")?.value;
  const data = await getData<ICart>("/cart?token=" + token);
  if (data?.items && data?.items?.length <= 0)
    return (
      <section style={{ marginTop: "80px" }}>
        <main className="container content-wrapper">
          <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <h1 className="h3 pb-2 pb-md-3">Sepetim</h1>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ maxWidth: "fit-content" }}
                   className="alert alert-light d-flex justify-content-center align-items-center flex-column gap-3"
                   role="alert">
                <i style={{ "fontSize": "34px" }} className="ci-shopping-bag animate-target me-1"></i>
                <p>
                  <b>Sepetinde ürün bulunmamaktadır.</b>
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    )
  return (
    <>
      <section style={{ marginTop: "80px" }}>
        <main className="container content-wrapper">
          <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">

            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <h1 className="h3 pb-2 pb-md-3">Sepetim</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-xl-5 offset-xl-1 mb-5 mb-lg-0">
                <div className="vstack gap-4">
                  <div style={{ width: "100%" }} className="">
                    <div className="vstack  gap-4">
                      {/*                      <pre>
                        {JSON.stringify(data, null, 2)}
                      </pre>*/}
                      {data?.items.map((item, index) => {
                        return <>
                          <div className="d-flex align-items-center">
                            <Link aria-label="Close" className="flex-shrink-0" href={"/product/" + item.id}>
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
                                  <Link aria-label="Close" className="nav-link min-w-0 text-dark-emphasis p-0"
                                        href={"/product/" + item.id}>
                                    <span className="text-uppercase">{item.name}</span>
                                  </Link>
                                </div>
                                <div className="fw-normal fs-sm d-flex align-items-center">
                                  {formatCurrency(Number(item?.totals?.total))}
                                  {/*<del className="fs-sm fw-normal text-body-tertiary ms-2">₺15.900,00</del>*/}
                                </div>
                              </div>

                              <div className="w-100 d-flex justify-content-between">
                                <IncreaseDecreaseQ
                                  item_key={item?.item_key}
                                  quantity={item?.quantity.value}
                                  token={token}
                                />
                                <RemoveItemBtn token={token} item_key={item?.item_key}/>
                              </div>
                            </div>
                          </div>
                        </>
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="col-lg-5 col-xl-4 offset-lg-1">
                <div
                  style={{ "marginTop": "-115px" }}
                  className=" offcanvas-end sticky-lg-top ps-lg-4 ps-xl-0"
                >
                  <div className="" style={{ "height": "115px" }}></div>
                  <div className="card border-0 shadow">
                    <div className="card-body vstack gap-4">
                      <h5 className="card-title">Sipariş Özeti</h5>
                      <div>
                        <Amount value={Number(data?.totals?.total)} label={"Ürünün Toplamı"}/>
                        <Amount value={Number(data?.totals?.shipping_total)} label={"Kargo Ücreti"}/>
                        {Number(data?.totals?.discount_total) > 0 &&
                            <Amount value={Number(data?.totals?.discount_total)} label={"İndrim"}/>
                        }
                        <Amount value={Number(data?.totals?.total)} label={"Toplam"}/>
                      </div>

                      <div className="d-flex w-100 gap-3">
                        <Link className="btn rounded-pill btn-lg btn-dark w-100" href="/odeme">
                          <span data-bs-dismiss="offcanvas" aria-label="Close">
                            Sepeti Onayla
                          </span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}