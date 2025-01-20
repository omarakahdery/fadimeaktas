import Image from "next/image";
import imgP from "../../../../public/2.jpg";
export default function MyOrders() {
  return <>
    <h1 className="h2 mb-1 mb-sm-2">Siparişlerim</h1>
    <table className="table align-middle fs-sm text-nowrap">
      <thead>
      <tr>
        <th scope="col" className="py-3 ps-0">
          <span className="text-body fw-normal">Sipariş <span className="d-none d-md-inline">#</span></span>
        </th>
        <th scope="col" className="py-3 d-none d-md-table-cell">
          <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="date">Tarih</button>
        </th>
        <th scope="col" className="py-3 d-none d-md-table-cell">
          <span className="text-body fw-normal">Durum</span>
        </th>
        <th scope="col" className="py-3 d-none d-md-table-cell">
          <button type="button" className="btn orders-sort fw-normal text-body p-0" data-sort="total">Toplam</button>
        </th>
        <th scope="col" className="py-3">&nbsp;</th>
      </tr>
      </thead>
      <tbody className="text-body-emphasis orders-list">

      <tr>
        <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
          <a className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
             href="/" data-bs-toggle="offcanvas" aria-controls="orderDetails"
             aria-label="Show order details">
            <span className="animate-target">78A6431D409</span>
          </a>
        </td>
        <td className="fw-medium py-3 d-none d-md-table-cell">
          Şub 6, 2025
          <span className="date d-none">25-02-06</span>
        </td>
        <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-info rounded-circle p-1 me-2"></span>
                          Yolde
                        </span>
        </td>
        <td className="fw-medium py-3 d-none d-md-table-cell">
          ₺10.900,00
        </td>
        <td className="py-3 pe-0">
                        <span
                          className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span><Image className={"rounded"} src={imgP} width="64" alt="urun"/></span>
                {/*<a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                             href="#orderDetails" data-bs-toggle="offcanvas" aria-controls="orderDetails"
                             aria-label="Show order details">
                            <i className="ci-chevron-right fs-lg"></i>
                          </a>*/}
                        </span>
        </td>
      </tr>

      </tbody>
    </table>
  </>
}