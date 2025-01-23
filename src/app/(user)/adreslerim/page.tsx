import { Suspense } from "react";
import { AddressTitle } from "@/containers/user/address/address-title";
import { BillingAddress, ShippingAddress } from "@/containers/user/address/address-unit";
import { getData } from "@/lib/api/api-fun";



export default async function AddressesPage() {
  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Adreslerim</h1>
      <Suspense fallback={
        <div className="border-bottom py-4">
          <AddressTitle collapseName={"ShippingAddress"} title={"Teslimat Adresi"}/>
          <div className="collapse basic-info show" id="basicInfoPreview">
            <div className="placeholder-glow d-flex flex-column gap-3">
              <span className="placeholder col-3"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-2"></span>
            </div>
          </div>
        </div>
      }>
        <ShippingAddress/>
      </Suspense>

      <Suspense fallback={
        <div className="border-bottom py-4">
          <AddressTitle collapseName={"BillingAddress"} title={"Fatura Adresi"}/>
          <div className="collapse basic-info show" id="basicInfoPreview">
            <div className="placeholder-glow d-flex flex-column gap-3">
              <span className="placeholder col-2"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-3"></span>
            </div>
          </div>
        </div>
      }>
        <BillingAddress/>
      </Suspense>

    </>
  )
}