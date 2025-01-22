import AddressUnit from "@/containers/user/address/address-unit";
import { Suspense } from "react";
import { AddressTitle } from "@/containers/user/address/address-title";

export default async function AddressesPage() {

  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Adreslerim</h1>
      <Suspense fallback={
        <div className="border-bottom py-4">
          <AddressTitle collapseName={"Address-1"} title={"Teslimat Adresi"}/>
          <div className="collapse basic-info show" id="basicInfoPreview">
            <div className="placeholder-glow d-flex flex-column gap-3">
              <span className="placeholder col-2"></span>
              <span className="placeholder col-3"></span>
              <span className="placeholder col-4"></span>
            </div>
          </div>
        </div>
      }>
        <AddressUnit collapseName={"Address-1"} title={"Teslimat Adresi"} />
      </Suspense>
    </>
  )
}