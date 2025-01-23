import Image from "next/image";
import { getData } from "@/lib/api/api-fun";
import { IOrder, statusTr } from "@/types/IOrder";
import { formatDate } from "@/lib/format-dete";

export default async function MyOrders() {
  const apiOrders: IOrder [] | undefined = await getData(`/orders?customer_id=${3}`);
  return <>

    <h1 className="h2 mb-1 mb-sm-2">Siparişlerim</h1>
    <table className="table align-middle fs-sm text-nowrap">
      <thead>
      <tr>
        <th scope="col" className="py-3 ps-0">
          <span className="text-body fw-normal">
            Ürün
          </span>
        </th>
        <th scope="col" className="py-3 d-none d-md-table-cell">
          <span className="text-body fw-normal">
            Tarih
          </span>
        </th>
        <th scope="col" className="py-3 d-none d-md-table-cell">
          <span className="text-body fw-normal">Durum</span>
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
      {apiOrders?.map((order) => {
        return <>
          <tr>
            <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
              <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                 href="/" data-bs-toggle="offcanvas" aria-controls="orderDetails"
                 aria-label="Show order details">
                <span className="animate-target">{order?.line_items[0].name}</span>
              </a>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
              {formatDate(order.date_created).toLocaleDateString()}
              <span className="date d-none">25-02-06</span>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
              <span className="d-flex align-items-center">
                {statusTr[order.status] || "Bilinmeyen"}
              </span>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
              ₺{order.total}
            </td>
            <td className="py-3 pe-0">
                        <span
                          className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <Image
                              className={"rounded"}
                              src={order?.line_items[0]?.image.src}
                              width="64"
                              height="64"
                              alt="urun"
                            />
                          </span>
                          {/*<a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                             href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails"
                             aria-label="Show order details">
                            <i className="ci-chevron-right fs-lg"></i>
                          </a>*/}
                        </span>
            </td>
          </tr>
        </>
      })}


      </tbody>
    </table>
  </>
}
