import { IResponse } from "@/types/api/IResponse";
import { IOrder, statusTr } from "@/types/IOrder";
import { getData } from "@/lib/api/api-fun";
import { formatCurrency } from "@/lib/helper/format-currency";
import Image from "next/image";
import { formatDate } from "@/lib/format-dete";
import { getOrderById } from "@/lib/api/get-data-wc";

export default async function MyOrder({
                                        id,
                                      }: {
  id: string
}) {
  // const apiOrders: IResponse<IOrder> | undefined = await getData(`/orders/${id}`);
  const apiOrders: any = await getOrderById({ id });
  return <>
       {/*      <pre>
      {JSON.stringify(apiOrders, null, 2)}
    </pre>*/}
    <div className={"py-4"}>
 <span className="d-flex align-items-center">
                 Sipariş Tarihi: {formatDate(apiOrders?.date_created).toLocaleDateString()}
                  </span>
      <span className="d-flex align-items-center">
                    Toplam: {formatCurrency(Number(apiOrders?.total))}
                  </span>
      {apiOrders?.status && <span className="d-flex align-items-center mb-2">
                  Durum: {statusTr[apiOrders?.status as keyof typeof statusTr] || "Bilinmeyen"}
                 </span>
      }
      <table className="table align-middle fs-sm text-nowrap ">
        <thead>
        <tr>
          <th scope="col" className="py-3 ps-0">
          <span className="text-body fw-normal">
            Ürün
          </span>
          </th>
          <th scope="col" className="py-3 d-none d-md-table-cell">
            <span className="text-body fw-normal">Adet</span>
          </th>
          <th scope="col" className="py-3 d-none d-md-table-cell">
  <span className="text-body fw-normal">
            Toplam
          </span>
          </th>
          <th scope="col" className="py-3">&nbsp;</th>
        </tr>
        </thead>
        <tbody className="text-body-emphasis orders-list">
        { apiOrders?.line_items?.map((order: any) => {
          return <>
            <tr>
              <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                <span className="animate-target">{order?.name}</span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
              <span className="d-flex align-items-center">
               {order?.quantity}
              </span>
              </td>
              <td className="fw-medium py-3 d-none d-md-table-cell">
                {formatCurrency(Number(order.total))}
              </td>
              <td className="py-3 pe-0">
                        <span
                          className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <Image
                              className={"rounded"}
                              src={order?.image.src}
                              width="64"
                              height="64"
                              alt="urun"
                            />
                          </span>
                        </span>
              </td>
            </tr>
          </>
        })}
        </tbody>
      </table>
    </div>
  </>
}