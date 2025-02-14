import Image from "next/image";
import { getData } from "@/lib/api/api-fun";
import { IOrder, statusTr } from "@/types/IOrder";
import { formatDate } from "@/lib/format-dete";
import { cookies } from "next/headers";
import { formatCurrency } from "@/lib/helper/format-currency";
import { IResponse } from "@/types/api/IResponse";
import Link from "next/link";
import { getOrders } from "@/lib/api/get-data-wc";

export default async function MyOrders() {
  const userId = (await cookies()).get("user_id")?.value
  //const apiOrders: IResponse<IOrder[]> | undefined = await getData(`/orders?customer_id=${userId}`);
  const apiOrders: any = await getOrders({ customer_id: userId });
  if (apiOrders && apiOrders?.length <= 0)
    return (
      <main className="container content-wrapper">
        <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ maxWidth: "fit-content" }}
                 className="alert alert-light d-flex justify-content-center align-items-center flex-column gap-3"
                 role="alert">
              <i style={{ "fontSize": "34px" }} className="ci-table"></i>
              <p>
                <b>Ürün bulunmamaktadır.</b>
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  return <>
    {/*    <pre>
      {JSON.stringify(apiOrders?.data[1], null, 2)}
    </pre>*/}
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4 py-4">
      {apiOrders?.map((order:IOrder) => {
        return <>
          <div className="col">
            <div className="card">
              <div className="card-header border-0 fs-sm d-flex gap-2 justify-content-between align-items-center">
                <div>
                  <span className="d-flex align-items-center fw-semibold">
                    {formatDate(order.date_created).toLocaleDateString()}
                  </span>
                  <span className="d-flex align-items-center">
                    Toplam: {formatCurrency(Number(order.total))}
                  </span>
                </div>
                <Link className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                      href={`/siparislerim/${order.id}`}>
                  <i className="ci-chevron-right fs-lg"></i>
                </Link>
              </div>
              <div className="card-footer bg-white fs-sm">
                <span className="d-flex align-items-center mb-2">
                  Durum: {statusTr[order.status] || "Bilinmeyen"}
                 </span>
                <div className={"d-flex gap-2 align-items-center"}>
                  {order?.line_items.map((item, index) => {
                    return <>
                      <span
                        className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                      <span>
                        <Image
                          className={"rounded"}
                          src={item?.image.src}
                          width="64"
                          height="64"
                          alt="urun"
                        />
                      </span>
                    </span>
                    </>
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      })}
    </div>
  </>
}
