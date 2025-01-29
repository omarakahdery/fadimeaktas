import Link from "next/link";
import Image from "next/image";
import { getData } from "@/lib/api/api-fun";
import { ICart } from "@/types/ICart";
import { cookies } from "next/headers";
import { formatCurrency } from "@/lib/helper/format-currency";
import { BillingAddress, ShippingAddress } from "@/containers/user/address/address-unit";
import { IPaymentGateways, PaymentForm } from "@/containers/checkout/submit-order";
import { IUser } from "@/types/IUser";

export const Checkout = async () => {
  const token = (await cookies()).get("token")?.value;
  const userId = (await cookies()).get("user_id")?.value
  const data = await getData<ICart>("/cart?token=" + token);
  const payments = await getData<IPaymentGateways[]>("/payment_gateways");
  const userData = await getData<IUser>(`/user/me/${userId}`);
  return (
    <>
      <section style={{ marginTop: "80px" }}>
        <main className="container content-wrapper">
          <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
            <div className="row">
              <div className="col-xl-10 ">
                <h1 className="h3 pb-2 pb-md-3">Ödeme</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-xl-8  mb-5 mb-lg-0">
                <div className="vstack gap-4">
                  <div className="">
                    <div className="card border-0 shadow">
                      <div className="card-body">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingOne">
                              <button type="button" className="accordion-button fs-5" data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <span className="animate-target me-2">
                              Sepetimdeki Ürünler ({data?.items.length})
                            </span>
                              </button>
                            </h3>
                            <div className="accordion-collapse collapse" id="collapseOne"
                                 aria-labelledby="headingOne"
                                 data-bs-parent="#accordionExample">
                              <div className="vstack gap-4">
                                {/*Item*/}
                                {data?.items.map((item: any) => {
                                  return <>
                                    <div className="d-flex w-100 h-100 align-items-start me-auto">
                                      <Link className="flex-shrink-0" href={"/product/" + item.id}>
                                        <Image
                                          src={item.featured_image}
                                          className="bg-body-tertiary rounded"
                                          width={80}
                                          height={80}
                                          alt={item.name}
                                        />
                                      </Link>
                                      <div
                                        className="h-100 w-100 d-flex justify-content-between flex-column min-w-0 ps-3">
                                        <div>
                                          <div className="nav mb-2">
                                            <Link className="nav-link min-w-0 text-dark-emphasis p-0"
                                                  href={"/product/" + item.id}>
                                              <span className="text-uppercase">{item.name}</span>
                                            </Link>
                                          </div>
                                          <div
                                            className="fw-normal text-dark fs-sm mb-2">{formatCurrency(Number(item.totals?.total))}</div>
                                          <div
                                            className="fw-normal text-dark fs-sm mb-2">Adet: {item.quantity.value}</div>
                                        </div>

                                      </div>
                                    </div>

                                  </>
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <ShippingAddress/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-xl-4 ">
                <div
                  style={{ "marginTop": "-115px" }}
                  className=" offcanvas-end sticky-lg-top ps-lg-4 ps-xl-0"
                >
                  <div className="" style={{ "height": "115px" }}></div>
                  <div className="vstack gap-4">

                    <div className="card border-0 shadow">
                      <div className="card-body">
                        <h5 className="card-title">Sipariş Özeti</h5>
                        <Amount value={Number(data?.totals?.subtotal)} label={"Ürünün Toplamı"}/>
                        <Amount value={Number(data?.totals?.shipping_total)} label={"Kargo Ücreti"}/>
                        {Number(data?.totals?.discount_total) > 0 &&
                            <Amount value={Number(data?.totals?.discount_total)} label={"İndrim"}/>
                        }
                        <Amount value={Number(data?.totals?.total)} label={"Toplam"}/>
                      </div>
                    </div>
                    <div className="card border-0 shadow">
                      <div className="card-body">
                        <PaymentForm token={token} userData={userData} cartData={data} payments={payments}/>
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
  );
}

export function Amount({ label, value }: { label: string, value?: number }) {
  return (
    <div className="d-flex align-items-center justify-content-between w-100 mt-4 mb-3">
      <span className="fs-sm">{label}</span>
      <span className="mb-0">
        {formatCurrency(Number(value))}
        </span>
    </div>

  )
}



